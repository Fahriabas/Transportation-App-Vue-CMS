<script>
    export default{
        name: 'register',
        emits: ['handleToLoginForm', 'handleRegisterForm'],
        data(){
            return{
                register: {
                    userName: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    address: ""
                }
            }
        },
        methods:{
          handleSubmitForm(){
            // console.log('terhandle brow');
            const {userName, email, password, phoneNumber, address} = this.register
            // console.log(this.register);
            this.$emit('handleRegisterForm', userName, email, password, phoneNumber, address)
          }
        }
    }
</script>


<template>
    <!-- <h1>Create User</h1> -->
    <!-- <form method="post" action="/register">
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" required><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>
      <button type="submit">Create User</button>
    </form> -->
    <div class="container d-flex flex-column justify-content-center align-items-center"
    style="height: 100vh"
    >
        <!-- <a href="/register">
            <button>REGISTER</button>
        </a>
        <a href="/login">
            <button>LOGIN</button>
        </a> -->
        <h1>Register</h1> 
        <form @submit.prevent="handleSubmitForm">
            <!-- user name iput -->
            <div class="form-outline mb-4">
              <input type="text" id="form2Example" class="form-control" name="userName" v-model="register.userName"/>
              <label class="form-label" for="form2Example">User Name</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" name="email" v-model="register.email" />
              <label class="form-label" for="form2Example1">Email address</label>
            </div>
          
            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" name="password" v-model="register.password" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>

            <!-- phone Number input -->
            <div class="form-outline mb-4">
              <input type="text" id="form2Example3" class="form-control" name="phoneNumber" v-model="register.phoneNumber" />
              <label class="form-label" for="form2Example3">Phone Number</label>
            </div>

            <!-- address input -->
            <div class="form-outline mb-4">
              <input type="text" id="form2Example4" class="form-control" name="address" v-model="register.address"/>
              <label class="form-label" for="form2Example4">Address</label>
            </div>
          
            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <!-- <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div> -->
              </div>
          
              <div class="col">
                <!-- Simple link -->
                <!-- <a href="#!">Forgot password?</a> -->
              </div>
            </div>
          
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Register</button>
          
            <!-- Register buttons -->
            <div class="text-center">
              <p>Already a member? <a @click.prevent="$emit('handleToLoginForm')">Login</a></p>

            </div>
          </form>
    </div>
</template>

<style>
</style>