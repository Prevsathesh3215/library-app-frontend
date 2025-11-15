<template>

  <!-- <WebpageHeader/> -->
  <signupForm />



</template>

<script>
  import WebpageHeader from '@/components/webpageHeader.vue';
  import signupForm from '@/components/signupForm.vue';

  export default{
    name: "signupView",
    components:{
      WebpageHeader,
      signupForm
    }
  }

</script>