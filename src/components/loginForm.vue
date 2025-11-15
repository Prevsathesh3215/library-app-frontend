
<template>
  <head>
      <title>BookWyrm - Login</title>

    </head>
    <body>

      <div class="flex items-center justify-center mt-20">

        <!-- <div class="sidebar">Here</div> -->


        <div class="flex flex-col justify-center border border-solid border-gray-100 bg-white p-20 shadow-xl">
          <div class="text-center text-3xl font-serif">
            <h1>Log in to BookWyrm&#8482;</h1>
          </div>

          <div class="flex flex-wrap text-center mt-2" style="max-width: 18rem; font-size: 0.9rem">
            BookWyrm is the first open-access free literature database, ranging over 50,00 book entries, that can be downloaded as .pdf files! 
          </div>



          <form id='Library-Form' v-on:submit.prevent="onSubmit">

            <div style="max-width: 300px; padding: 10px;"> 
              <label for="label-username">Username:</label><br>
              <input class="border boder-solid border-gray-400 rounded-md w-full" type="text" id="username" name="username" v-model="itemUsername"><br>  
            </div>


            <div style="max-width: 300px; padding: 10px;">
              <label for="label-password">Password:</label><br>
              <input class="border border-solid border-gray-400 rounded-md w-full" type="password" id="password" name="password" v-model="itemPswd"><br>
            </div>

            <div class="flex justify-center">
              
              <customButton text="Submit" buttonType="submit" customClasses="text-green-800 border border-solid border-green-600 rounded-md w-full mt-8 h-10 hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out"></customButton>
              <!-- <input class="border border-solid border-green-600 rounded-md w-full mt-8 h-10 text-green-600 hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out"
              type="submit" value="Submit"><br> -->
            </div>


          </form>

          <!-- <div>
            <button style="
              font-family: Tahoma;
              font-weight: bold;
              font-size: 15px;
              width: 180px;
              height: 40px;
              border-radius: 10px;
              margin-top: 20px;
              cursor: pointer;
            " id="Users-Button">Get Users<br>
          </div> -->
        </div>

      </div>


  </body>

</template>

<script>

  // import { mapStores } from 'pinia';
  import { useUserStore } from '@/stores/user';
  import customButton from './customButton.vue';
  import { mapActions } from 'pinia';


  export default {
    name: 'loginForm',
    components: {
      customButton
    },

    setup(){
      const userStore = useUserStore()

      return 

    },

    data(){
      return{
        userOne :{
        name: "Sathesh",
        pswd: "previn"
      }
      }

    },

    // computed: {
    //   ...mapStores(useUserStore)
    // },

    
    methods:{
      onSubmit(){
        console.log(useUserStore.loginStatus)
        const result = useUserStore.loginUser(this.itemUsername, this.itemPswd)
        console.log(result)
        alert(result)
        // if(success){
        //   alert('ok')
        // }
        // else{
        //   alert('not ok')
        // }
        // alert('submitted')
      }
    }
  }

</script>