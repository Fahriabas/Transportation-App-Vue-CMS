<script>
export default{
    name: 'navbar',
    props: ['userLogin'],
    emits: ['buttonformEditVehicle', 'displayDashboardPage', 'buttonformAddVehicle', 'displayCategogies', 'displayHistoryPage','buttonLogout', 'buttonProduct'],
    data(){
      return {
        profile : {
          username : ""
        }
      }
    },
    created(){
      this.profile.username = this.userLogin
    },
    methods:{

    }
    
}
</script>



<template>
      <!-- section navbar -->
      <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$emit('displayDashboardPage')" >Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$emit('buttonProduct')">Vehicles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$emit('displayCategogies')">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="$emit('displayHistoryPage')">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="$emit('buttonLogout')">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>

    <!-- end navbar -->
</template>



<style scoped>
    #nav-bar
    {
        position: sticky;
        top: 0;
        z-index: 10;
    }
    .navbar
    {
        background-image: linear-gradient(to right, #79E0EE, #98EECC);
        padding: 0 !important;
    }
    .navbar-nav li
    {
        padding: 0 10px;

    }

    .navbar-nav li a
    {
        color: #fff !important;
        font-weight: 600;
    }

    /* #add-product{
      justify-content: flex-end;
      
    } */
</style>