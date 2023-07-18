<script>
    export default{
        name: 'formAddCategory',
        emits: ['handleAddCategory'],
        data(){
            return {
                category: {
                    name: ""
                }
            }
        },
        created(){
            this.handleSubmitCategory
        },
        methods: {
            handleSubmitCategory(){
                this.$emit('handleAddCategory', this.category.name)
            }
        }
    }
</script>







<template>

    <div class="container d-flex flex-column justify-content-center ">
        <h1>Tempat menambahkan category baru</h1>
        <form @submit.prevent="handleSubmitCategory">
            <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label ">Name</label>
             <input type="text" class="form-control" v-model="category.name" >
            <div id="emailHelp" class="form-text"></div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


    </div>

</template>







<style></style>