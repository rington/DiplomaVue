<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar />
    <div class="to-center">
      <h1 style="margin-top:45px;margin-bottom:25px">Updating room</h1>
      <p>Room type id</p>
      <input type="number" v-model="roomTypeId" />
      <p>Hotel id</p>
      <input type="number" v-model="hotelId" />
      <p>Price</p>
      <input type="number" v-model="rating" />
      <div style="margin-top:25px;justify-content:center; display: flex;">
        <vue-dropdown :config="config" @setSelectedOption="setIsRoomReserved($event)"></vue-dropdown>        
      </div>
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="updateRoom()">Update hotel</b-button>
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
import VueDropdown from "vue-dynamic-dropdown";

export default Vue.extend({
    components: {
    NavBar,
    Footer,
    VueDropdown
  },
    data() {
    return {
      roomTypeId: undefined,
      hotelId: undefined,
      isReserved: undefined,
      price: undefined,
      config: {
        options: [
          {
            value: "true"
          },
          {
            value: "false"
          }
        ],
        placeholder: "Is reserved",
        backgroundColor: "#97CEF7",
        textColor: "black",
        borderRadius: "1.1em",
        border: "1px solid #3D99F5",
        width: 200
      },
    };
  },
  methods:{
    goHome() {
      this.$router.push("/");
    },
    updateRoom() {
      
    },
    setIsRoomReserved(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
  }
})
</script>

<style>

</style>