<template>
  <!-- <WebpageHeader/> -->
  <loginForm/>

</template>


<script>
  import WebpageHeader from '@/components/webpageHeader.vue';
  import loginForm from '@/components/loginForm.vue';


  export default {
    name: "loginView",
    components: {
      WebpageHeader,
      loginForm,

    }
  }


</script>