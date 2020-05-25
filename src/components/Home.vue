<template>
<div>
  <NavBar user="testuser@cjm.com"/>  
</div>
</template>

<script>
import Vue from "vue";
import NavBar from "./NavBar";
export default Vue.extend({
    components: {
    NavBar
  },
  methods:{
    
  }
})
</script>

<style>

</style>