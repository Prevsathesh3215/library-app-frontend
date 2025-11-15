<template>

  <div class="flex">
    <div class="flex flex-col items-center mt-36 text-center align-middle max-w-4xl">
      <h1 class="flex text-7xl font-serif">All of your Books, in One Place</h1>
      <p class="text-lg mt-10 w-2/3">Download .pdf files of literature from a collection of over 50,000 entries collected from over 50 countries, here, at BookWyrm.</p>
      <button class="text-white rounded-md w-2/3 mt-12 h-10 bg-green-800 hover:bg-green-500 transition-all duration-300 ease-in-out">Browse Books</button>
    </div>
    <div class="mt-2">
      <img class="ml-20 mt-5" src="/src/reading.png">
    </div>
  </div>



</template>

<script>
  import customButton from '@/components/customButton.vue';
  import WebpageHeader from '@/components/webpageHeader.vue';


  export default {
    name: "homeView",
    component: {
      WebpageHeader,
      customButton
    }
  }


</script>