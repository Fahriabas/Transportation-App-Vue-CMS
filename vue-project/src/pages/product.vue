<script>
import customRow from './customRow.vue'
export default{
    name: "product",
    props: ["vehicles", "allStatus"],
    emits: ["handleFetchProduct", "handleEditStatus", "buttonformAddVehicle", "buttonformEditVehicle"],
    data() {
        return {
        };
    },
    created() {
        this.handleProduct();
        // this.handleStatusChange(id)
        // this.handleDetailEdit(id)
    },
    methods: {
        handleProduct() {
            this.$emit("handleFetchProduct");
        },

        statusHandle(id, status) {
          // console.log(id, status, '<<<<<<');
            this.$emit("handleEditStatus",  id, status);
        },

        handleEdit(id){
          this.$emit('buttonformEditVehicle', id)
        }
    },
    components: { customRow }
}

</script>

<template>

    <h1 class="text-center">ini Halaman Products</h1>

    <div class="container-fluid">
      <a type="button" class="btn btn-primary" id="add-product" @click.prevent="$emit('buttonformAddVehicle')">
      Add New Vehicle
    </a>
    </div>
    <div class="container-fluid">
 
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table class="table">
                    <thead>
                        <th>NO.</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                      <customRow v-for="(el, index) in vehicles.data" :key="el.id" :index="index" :el="el" type="product"  @statusHandle="statusHandle"  @editVehicle="handleEdit"  />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
 

</style>