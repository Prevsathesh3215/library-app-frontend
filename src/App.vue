
<template>
  <webpageHeader />
  <router-view />

</template>

<script>
  import webpageHeader from './components/webpageHeader.vue';

  export default {
    name: "App",
    submitted: false,
    components:{
      webpageHeader,
    }
  }

</script>


<style>

body{
  background-color: rgb(252, 254, 200);
}

</style>
