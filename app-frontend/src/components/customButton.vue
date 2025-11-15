<template>
  
  <button :class="[baseClasses, customClasses]" class="px-4 py-2 rounded" :type="buttonType">{{ text }}</button>


</template>

<script>

  export default {
    name: "customButton",

    props: {
      text: {
        type: String,
        required: true,
      },

      customClasses: {
        type: String,
        default: 'text-white',
      },

      buttonType: {
        type: String,
        default: 'button'
      }
    },

    computed: {
      baseClasses() {
        return 'font-semibold'
      }
    }

  }




</script>