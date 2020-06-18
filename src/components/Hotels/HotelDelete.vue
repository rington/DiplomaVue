<template >
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar/>
    <div align="center">
      <div>
        <h1 style="margin-top:145px;margin-bottom:25px">Delete hotel</h1>
        <input type="number" v-model="id" placeholder="Input hotel id" min="0" />
      </div>
      <br />
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="deleteHotel">Delete</b-button>
        <b-button squared variant="primary" @click="goToHotels">Go to hotels</b-button>
      </div>      
    </div>
    <Footer style="bottom:0px;"/>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default Vue.extend({
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      id: undefined
    };
  },
  methods: {
     deleteHotel() {
       let id = this.id;
       if (id != 0) {
         axios
           .delete("https://localhost:5001/api/hotels/" + id, { id })
           .then(function(response) {
             console.log(response);
             alert("Success!");
           })
           .catch(function(error) {
             console.log(error);
           });
       } else alert("Error!");
    },
    goToHotels() {
      this.$router.push("/hotels");
    }
  }
});
</script>

<style>

</style>