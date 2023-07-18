<script>
    export default{
        name: 'formAddVehicle',
        props: ['categories' , 'detailVehicle'],
        emits: ['handleAddVehicle', 'handleFetchCategory'],
        data(){
          return {
            formAddVehicle:{
              name: "",
              typeId: "",
              imgUrl: "",
              description: "",
              location: "",
              price: ""
            },
          }
        },
        created(){
          
          this.handleSubmitAdd,
          this.getDataCategory()
          // console.log(this.detailVehicle.name ,'abiiidetailVehicle');
          // this.formAddVehicle.name = this.detailVehicle.name
          // this.formAddVehicle.typeId = this.detailVehicle.typeId
          // this.formAddVehicle.imgUrl = this.detailVehicle.imgUrl
          // this.formAddVehicle.description = this.detailVehicle.description
          // this.formAddVehicle.location = this.detailVehicle.location
          // this.formAddVehicle.price = this.detailVehicle.price
        },
        methods:{
          handleSubmitAdd(){
            console.log('tombol submit dipencet')
            const {name, typeId, imgUrl, description, location, price } = this.formAddVehicle
            this.$emit('handleAddVehicle', name, typeId, imgUrl, description, location, price)
          },
          getDataCategory(){
            this.$emit('handleFetchCategory')
          }
        }
    }
</script>


<template>


    <h1 class="container d-flex">Add New Product</h1>
    <div class="container d-flex flex-column justify-content-center ">


    <form @submit.prevent="handleSubmitAdd">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label ">Name</label>
    <input type="text" class="form-control" v-model="formAddVehicle.name" >
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label class="form-label">Category</label>
    <select class="form-control" v-model="formAddVehicle.typeId">

      <option v-for="category in categories.data" :key="category.id" :value="category.id" >{{ category.name }}</option>

    </select>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image Url</label>
    <input type="text" class="form-control" v-model="formAddVehicle.imgUrl">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" v-model="formAddVehicle.description">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Location</label>
    <input type="text" class="form-control" v-model="formAddVehicle.location" >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="number" class="form-control" v-model="formAddVehicle.price">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>


<style scoped>

</style>

