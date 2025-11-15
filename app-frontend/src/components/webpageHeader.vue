

<template>

  <header class="w-full text-sm text-center bg-blue-50">

    <div class="flex flex-nowrap h-16 border-b border-solid border-blue-100 px-5 pt-2 mx-auto shadow-lg">


      <img class="mt-0.5 ml-2" style="max-width:7%; max-height:75%;" src="/src/book.png">


      <div class="flex items-center justify-center mb-2">
        <h1 class="text-2xl font-medieval ml-2 mt-2">{{ company }}</h1>
      </div>

      <nav class="ml-12">
        <ul class="flex h-full list-none">

          <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 ">
            <div class="w-20 h-full hover:shadow-md hover:text-green-800">
              <a href="" class="text-lg flex h-full items-center justify-center pb-1 font-serif">{{ menuItem }}</a>
            </div>
          </li>
        </ul>
      </nav>

      <div class="flex ml-auto h-full items-center">
        <button @click="$router.push('/user/signup')" class="bg-green-600 text-white rounded-md hover:bg-green-800 font-medium shadow-md transition-all duration-100 h-9 w-20 p-2 mb-2">Sign in</button>
        <!-- <customButton text="Sign in" customClasses="bg-green-600 text-white rounded-md hover:bg-green-800 font-medium shadow-md transition-all duration-100" class="h-9 w-20 p-2 mb-2"/> -->
        <!-- <customButton text="Log In" customClasses="bg-green-600 text-white rounded-md hover:bg-green-800 font-medium shadow-md transition-all duration-100" class="h-9 w-20 p-2 mb-2 ml-3"/> -->
        <button @click="$router.push('/user/login')" class="bg-green-600 text-white rounded-md hover:bg-green-800 font-medium shadow-md transition-all duration-100 h-9 w-20 p-2 mb-2 ml-3">Log in</button> 

      </div>

    </div>
  </header>

</template>

<script>

  // import { mapStores } from 'pinia'

  // import { useUserStore } from '@/stores/user'

  import blueButton from './blueButton.vue';
  import customButton from './customButton.vue'


  export default {
    name: "webpageHeader",
    components: {
      blueButton,
      customButton
    },
  

  data(){
    return{
      company: "BookWyrm",
      menuItems: [
        "Home",
        "Books",
        "Help"
      ]
    }

    },

    // computed: {
    //   ...mapStores(useUserStore), 
    //   doSmtg(){
    //     console.log(this.userStore.loginStatus)
    //   }
    // }
  }
</script>