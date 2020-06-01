<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar />
    <div class="to-center">
      <h1 style="margin-top:45px;margin-bottom:25px">Adding room</h1>
      <p>Room type id</p>
      <input type="number" v-model="roomTypeId" />
      <p>Hotel id</p>
      <input type="number" v-model="hotelId" />
      <p>Price</p>
      <input type="number" v-model="rating" />      
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="addRoom()">Add</b-button>
        <b-button squared variant="primary" @click="goHome()">Go home</b-button>
      </div>
    </div>
    <Footer style="bottom:0px;" />
  </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default Vue.extend({
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      roomTypeId: undefined,
      hotelId: undefined,
      isReserved: true,
      price: undefined
    };
  },
  methods:{
    goHome() {
      this.$router.push("/");
    },
    addRoom() {
      
    },
  }
});
</script>

<style>
.to-center {
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
}
</style>