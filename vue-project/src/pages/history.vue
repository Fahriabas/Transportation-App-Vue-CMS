<script>
    export default{
        name: 'history',
        props: ['histories'],
        emits: ['handleFetchHistory'],
        // data(){
        //   return
        // }
        created(){
            this.getFetchHistory()
        },
        methods: {
            getFetchHistory(){
                this.$emit('handleFetchHistory')
            }
        }
    }
</script>



<template>
    <!-- section navbar -->
    <!-- <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Vehicles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Categories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </section>  -->

    <!-- end navbar -->

    <!-- table history -->

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table class="table">
                    <thead>
                        <th>NO.</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>createdAt</th>
                        <th>Updated By</th>
                    </thead>
                    <tbody>
                      <tr v-for="(history , index) in histories.data " :key="history.id">
                        <td>{{ index + 1 }}.</td>
                        <td>{{ history.name }}</td>
                        <td>{{ history.description }}</td>
                        <td>{{ history.createdAt }}</td>
                        <td>{{ history.updatedBy }}</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<!-- <style scoped>
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
    }</style> -->