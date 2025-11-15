<template>

  <button class="bg-green-600 text-white rounded-md hover:bg-green-800 font-medium shadow-md transition-all duration-100">{{ buttonText }}</button>



</template>

<script>

  export default{
    name:"blueButton",
    props: {
      buttonText: {
        type: String,
        required: true,
      },
    },

    data(){

      return{
      }
    }
  }
</script>