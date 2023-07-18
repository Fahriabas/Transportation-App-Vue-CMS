<script>
     import customRow from './customRow.vue';
    export default{
        name: 'category',
        props: ['categories'],
        emits: ['handleFetchCategory', 'buttonformAddCategory', 'buttonDeleteCategory'],
        created(){
            this.getCategoryData()
        },
        methods: {
            getCategoryData(){
                this.$emit('handleFetchCategory')
            },
            HandledeleteCategory(id){
              this.$emit('buttonDeleteCategory', id)
            }
        }, components: {customRow}
    }
</script>

<template>

    <h1 class="text-center">ini halaman category</h1>
    <a type="button" class="btn btn-primary" id="add-product" @click.prevent="$emit('buttonformAddCategory')">
      Add New Category
    </a>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table class="table">
                    <thead>
                        <th>#NO.</th>
                        <th>Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                      <customRow v-for="(el, index) in categories.data" :key="el.id" :el="el" :index="index" @deleteCategory="HandledeleteCategory" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>