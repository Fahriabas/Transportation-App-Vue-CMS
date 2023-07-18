<script>
export default{
    name:"dashboardPage",
    props: ["totalVehicle","totalType"],
    emits: ["handleFetchDashboard"],
    created(){
        this.getDashboardata()
    },
    methods:{
        getDashboardata(){
            this.$emit("handleFetchDashboard")
        }
    }

}
</script>


<template>

<!-- Dashboard Section -->
<section
          class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          id="dashboard-section"
        >
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="display-2">Dashboard</h1>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="row">
                <div class="col-12 col-md-6 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Total Products
                      </h6>
                      <h6 class="card-title card-number" id="total-product">
                        <!-- {{ dashboard.vehicles }} -->
                        {{ totalVehicle }}
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Total Categories
                      </h6>
                      <h6 class="card-title card-number" id="total-category">
                        <!-- {{ dashboard.message.types }} -->
                        {{ totalType }}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Dashboard Section -->
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
    }
</style> -->