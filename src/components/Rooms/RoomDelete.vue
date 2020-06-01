<template >
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar />
    <div align="center">
      <div>
        <h1 style="margin-top:145px;margin-bottom:25px">Delete room</h1>
        <input type="number" v-model="id" placeholder="Input room id" min="0" />
      </div>
      <br />
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="deleteRoom()">Delete</b-button>
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
      id: undefined
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
});
</script>

<style>
</style>