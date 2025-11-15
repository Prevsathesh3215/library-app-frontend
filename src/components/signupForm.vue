<template>

    <!-- <div class="">
      <button class="" @click="setFalse">Back</button>
    </div> -->

    <div class="flex items-center justify-center mt-20">
      <div class="flex flex-col border border-solid border-gray-100 bg-white p-20 shadow-xl items-center">

        <div class="text-center text-3xl font-serif">
          <h1>Sign Up to BookWyrm&#8482;</h1>
          <p class="mt-2" style="font-size: 0.9rem; font-family: sans-serif;">Sign in to access premium books entries, as well as higher downloads per day!</p>
        </div>

        <!-- <p>Welcome, {{ itemUsername }} </p> -->


        <form class="mt-4 w-full" v-on:submit.prevent="handleSubmit ">

          <div class="flex gap-5 flex-col">
            <div class="form-group">
              <label class="label-username" for="username" >Your Name:</label><br>

              <input class="border border-solid border-gray-400 rounded-md pl-2 py-0.5 font-light w-full text-sm h-8" type="text" id="username" name="username" v-model="itemUsername"
              :class="{'border-red-500': v$.itemUsername.$error}">

              <span v-if="v$.itemUsername.$error" class="text-red-500 text-sm">
                <span v-if="v$.itemUsername.required.$invalid">Name is required</span>
              </span>

            </div>


            <div class="form-group">
              <label class="label-email" for="email">Email:</label><br>

              <input class="border border-solid border-gray-400 rounded-md w-full pl-2 py-0.5 font-light text-sm h-8" type="email" id="email" name="email" v-model="itemEmail"
              :class="{'border-red-500': v$.itemEmail.$error}">
              
              <span v-if="v$.itemEmail.$error" class="text-red-500 text-sm">
                <span v-if="v$.itemEmail.required.$invalid">Email is required</span>
              </span>

            </div>

            <div class="form-group">
              <label class="label-password" for="password">Password:</label><br>
              <input class="border border-solid border-gray-400 rounded-md w-full pl-2 py-0.5 font-light text-sm h-8" type="password" id="password" name="password" v-model="itemPswd"
              :class="{'border-red-500': v$.itemEmail.$error}">

              <span v-if="v$.itemPswd.$error" class="text-red-500 text-sm">
                <span v-if="v$.itemPswd.required.$invalid">Password is required</span>
              </span>

            </div>



          <!-- <div class="flex gap-20">

          

            <div class="form-group">
              <label class="label-age" for="age">Age:</label><br>
              <input class="border border-solid border-gray-400 rounded-md w-full pl-2 py-0.5 font-light" type="text" id="age" name="age" v-model="itemAge">
            </div>
          </div> -->

          <!-- <div class="flex gap-20">
            <div class="form-group">
              <label class="label-role" for="role">Role:</label><br>
              <input class="border border-solid border-gray-400 rounded-md w-full pl-2 py-0.5 font-light" type="text" id="role" name="role" v-model="itemRole">
            </div>

            <div class="form-group">
              <label class="label-firsname" for="firstname">First Name:</label><br>
              <input class="border border-solid border-gray-400 rounded-md w-full pl-2 py-0.5 font-light" type="text" id="firstname" name="firstname" v-model="itemFirstName">,
            </div>
          </div> -->

          <!-- <div class="form-row">
            <div class="form-group">
              <label class="label-lastname" for="lastname">Last Name:</label><br>
              <input type="text" id="lastname" name="lastname">
            </div> 

          </div> -->

            <div class="form-group">
              <customButton text="Create Account" buttonType="submit" customClasses="border border-solid border-green-600 rounded-2xl w-full mt-2 h-10 text-green-800 hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out"></customButton>
            </div>
          </div>
          
        </form>


      </div>
    </div>



</template>


<script>

  import customButton from './customButton.vue';
  import useVuelidate from '@vuelidate/core';
  import { required, email, sameAs, between, minValue, maxValue, alpha, numeric, helpers} from '@vuelidate/validators';


  export default {
    name: 'signupForm',
    components: {
      customButton
    },
    setup(){
      return {v$: useVuelidate()}
    
    },
    data(){
      return {
        itemUsername: "",
        itemEmail: "",
        itemPswd: "",
      }
    },

    validations(){
      return{
        itemUsername: { required },
        itemEmail: { required, email },
        itemPswd: { required }
      }
    },

    methods: {
      async handleSubmit() {

        const validateForm = await this.v$.$validate()
        
        if(validateForm){
          this.item = {
          name: this.itemUsername,
          email: this.itemEmail,
          pswd: this.itemPswd,
        }
        console.log(this.item)
        alert('Form submitted successfully!')
        }
        else{
          alert('Not complete!')
        }
 
      },
    },


  
  }


</script>


<style>

/* input[type='text'],
input[type="email"],
input[type="password"]{
  height: 30x;
} */

</style>