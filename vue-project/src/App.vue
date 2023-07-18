<script>
  import navbar from './components/navbar.vue'
  import login from './pages/login.vue';
  import register from './pages/register.vue';
  import product from './pages/product.vue';
  import dashboardPage from './pages/dashboardPage.vue';
  import category from './pages/category.vue';
  import formAddVehicle from './pages/formAddVehicle.vue';
  import history from './pages/history.vue';
  import formEditVehicle from './pages/formeditVehicle.vue';
  import formAddCategory from './pages/formAddCategory.vue';


  const baseUrl = "http://localhost:3000"
  import axios from "axios";
  export default{
    data(){
      return{
        credentialGoogle: "",
        vehicles : [],
        userLogin : "",
        currentPage: "login",
        totalVehicle : 0,
        totalType : 0,
        categories: [],
        histories: [] ,
        detailVehicle: [],
        allStatus: [
          {
            id: 1,
            status: "Active"
          },
          {
            id: 2,
            status: "Inactive"
          },
          {
            id: 3,
            status: "Archived"
          }
        ]
      }
    },
    components:{navbar, dashboardPage, login, register, product, category, formAddVehicle, history, formEditVehicle, formAddCategory},
    created(){
      if(localStorage.getItem("access_token")){
        this.currentPage = 'dashboardPage'
      } else {
        this.currentPage = 'login'
      }
    },
    methods: {
      async handleGoogle(response){
        try {
        // this.credentialGoogle = response
        const data = await axios({
          method: 'POST',
          url: `${baseUrl}/googleLogin`,
          headers: {
            google_token : response
          }
        })
        // this.access_token = google_token
        localStorage.setItem('access_token', data.data.data.token)
        await this.handleFetchDashboard()
        this.currentPage = 'dashboardPage'
        } catch (error) {
          console.log(error);
        }
      },
      displayHistoryPage(){
        this.currentPage = 'history'
      },
      displayDashboardPage(){
        this.currentPage = 'dashboardPage'
      },
      displayRegister(){
        this.currentPage = 'register'
      },
      handleToLoginForm(){
        this.currentPage = 'login'
      },
      displayCategogies(){
        this.currentPage = 'category'
      },
      buttonLogout(){
        localStorage.clear()
        this.currentPage = 'login'
      },
      buttonformAddVehicle(){
        this.currentPage = 'formAddVehicle'
      },
      buttonProduct(){
        this.currentPage = 'product'
      },
      buttonformAddCategory(){
        this.currentPage = 'formAddCategory'
      },

      buttonDeleteCategory(id){
        console.log('masuk ke tombol delete category', id);
        this.handleDeleteCategory(id)
      },


      async buttonformEditVehicle(id){
        await this.fetchDetailProduct(id)
        this.currentPage = 'formEditVehicle'
      },


      async handleLoginForm(email, password){
        try {
          const {data} = await axios({
            method: 'POST',
            url: `${baseUrl}/login`,
            data:{
              email: email,
              password: password
            }
          })
          const { access_token } = data

          localStorage.setItem('access_token', access_token)
          this.userLogin = data.userName
          await this.handleFetchDashboard()
          this.currentPage = 'dashboardPage'
        } catch (error) {
          console.log(error);
        }
      },

      async handleRegisterForm(userName, email, password, phoneNumber, address){
        try {
          const { data } = await axios({
            method: 'POST',
            url: `${baseUrl}/register`,
            data: {
              userName,
              email,
              password,
              phoneNumber,
              address
            }
          })

          this.currentPage = 'login'
        } catch (error) {
          console.log(error);
        }
      },

      async handleFetchProduct(){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'GET',
            url: `${baseUrl}/vehicles`,
            headers: { access_token: access_token }
          })
          this.vehicles = data
        } catch (error) {
          console.log(error);
        }
      },

      async handleFetchDashboard(){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'GET',
            url: `${baseUrl}/dashboard`,
            headers: { access_token: access_token}
          })
          this.totalVehicle = data.message.vehicles
          this.totalType = data.message.types
        } catch (error) {
          console.log(error);
        }
      },

      async handleFetchCategory(){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'GET',
            url: `${baseUrl}/types`,
            headers: { access_token: access_token},
          })
          this.categories = data
        } catch (error) {
          console.log(error);
        }
      },

      async handleEditVehicle(name, typeId, imgUrl, description, location, price, id){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'PUT',
            url: `${baseUrl}/vehicles/${id}`,
            headers: { access_token },
            data: {
              name: name,
              typeId: typeId,
              imgUrl: imgUrl,
              description: description,
              location: location,
              price: price
            }
          })
          this.currentPage = 'product'
        } catch (error) {
          console.log(error);
        }
      },

      async handleAddVehicle(name, typeId, imgUrl, description, location, price){
        try {
          const access_token = localStorage.getItem("access_token") 

          const  { data } = await axios({
            method: 'POST',
            url: `${baseUrl}/vehicles/add`,
            headers: { access_token },
            data: {
              name: name,
              typeId: typeId,
              imgUrl: imgUrl,
              description: description,
              location: location,
              price: price
            }
          })
          this.currentPage = 'product'
        } catch (error) {
          console.log(error);
        }
      },

      async handleFetchHistory(){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'GET',
            url: `${baseUrl}/histories`,
            headers: { access_token }
          })
          console.log(data, 'isi dari data fetch histories');
          this.histories = data
        } catch (error) {
          console.log(error);
        }
      },

      async fetchDetailProduct(id){
        try {
          const access_token = localStorage.getItem("access_token") 
          const { data } = await axios({
            method: 'GET',
            url: `${baseUrl}/vehicles/${id}`,
            headers: { access_token }
          })
          this.detailVehicle = data.data
          return data.data
        } catch (error) {
          console.log(error);
        }
      },

      async handleEditStatus(id, status){
        const access_token = localStorage.getItem("access_token")
        const { data } = await axios({
          method: 'PATCH',
          url: `${baseUrl}/vehicles/${id}`,
          headers: { access_token },
          data: {
            status: status
          }
        })
      },

      async handleAddCategory(name){
        try {
          const access_token = localStorage.getItem("access_token")
          const {data}  = await axios({
            method: 'POST',
            url: `${baseUrl}/types/add`,
            headers: { access_token },
            data: {
              name: name
            }
          })
          this.currentPage = 'category'
        } catch (error) {
          console.log(error)
        }
      },

      async handleDeleteCategory(id){
        console.log('masuk kedalam handle delete category');
        try {
          const access_token = localStorage.getItem("access_token")
          const { data } = await axios({
            method: 'DELETE',
            url: `${baseUrl}/types/${id}`,
            headers: { access_token }
          })
          await this.handleFetchCategory()
          this.currentPage = 'category'
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

</script>

<template>
  <div>
    <navbar v-if="currentPage !== 'login' && currentPage !== 'register'"  @displayDashboardPage="displayDashboardPage"  :userLogin="userLogin"
    @displayCategogies="displayCategogies" @displayHistoryPage="displayHistoryPage" @buttonLogout="buttonLogout" @buttonProduct="buttonProduct"></navbar>
    <login v-if="currentPage === 'login'" @displayRegister="displayRegister" @handleLoginForm="handleLoginForm" @handleGoogle="handleGoogle"></login>
    <register v-if="currentPage === 'register'" @handleToLoginForm=" handleToLoginForm" @handleRegisterForm="handleRegisterForm"></register>
    <product v-if="currentPage === 'product'" :vehicles="vehicles"  @handleFetchProduct="handleFetchProduct" :allStatus="allStatus" @handleEditStatus="handleEditStatus" @buttonformAddVehicle="buttonformAddVehicle" @buttonformEditVehicle="buttonformEditVehicle"></product>
    <dashboardPage v-if="currentPage === 'dashboardPage'" :totalVehicle="totalVehicle" :totalType="totalType"  @handleFetchDashboard="handleFetchDashboard"></dashboardPage>
    <category v-if="currentPage === 'category'" :categories="categories" @handleFetchCategory="handleFetchCategory" @buttonformAddCategory="buttonformAddCategory" @buttonDeleteCategory="buttonDeleteCategory"></category>
    <formAddVehicle v-if="currentPage === 'formAddVehicle'" :detailVehicle="detailVehicle" @handleAddVehicle="handleAddVehicle" @handleFetchCategory="handleFetchCategory" :categories="categories"></formAddVehicle>
    <history v-if="currentPage === 'history'" @handleFetchHistory="handleFetchHistory" :histories="histories"></history>
    <formEditVehicle v-if="currentPage === 'formEditVehicle'" :detailVehicle="detailVehicle" @handleAddVehicle="handleAddVehicle" @handleFetchCategory="handleFetchCategory" :categories="categories" @handleEditVehicle="handleEditVehicle"></formEditVehicle>
    <formAddCategory v-if="currentPage === 'formAddCategory'" @handleAddCategory="handleAddCategory"></formAddCategory>
  </div>
</template>

<style scoped>


</style>
