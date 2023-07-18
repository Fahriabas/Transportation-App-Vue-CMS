<script>
export default{
    name: "login",
    props:[],
    emits: ["handleLoginForm", "displayRegister", "handleGoogle"],
    data(){
        return {
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        handleSubmit(){
            console.log("submit")
            console.log(this.login.email, this.login.password);

            this.$emit("handleLoginForm", this.login.email, this.login.password)
        },
        callback(response){
          this.$emit('handleGoogle', response.credential)
        }
        
    }
}

</script>

<template>
    <div class="container d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh"
    >

        <h1>Sign In</h1> 
        <form @submit.prevent="handleSubmit">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" name="email" v-model="login.email"/>
              <label class="form-label" for="form2Example1">Email address</label>
            </div>
          
            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" name="password" v-model="login.password"/>
              <label class="form-label" for="form2Example2">Password</label>
            </div>
          

            <!-- <div class="row mb-4">
              <div class="col d-flex justify-content-center">
              </div>
          
              <div class="col">

              </div>
            </div> -->
          
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
          
            <!-- Register buttons -->
            <div class="text-center">
              <p>Not a member? <a @click.prevent="$emit('displayRegister')">click here</a></p>
            </div>
            <GoogleLogin :callback="callback"/>
          </form>
    </div>
</template>

<style scoped>

</style>