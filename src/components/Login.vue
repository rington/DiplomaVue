<template>
  <div class="bg-image">
    <div class="login-basic">
      <div class="card-body-header" style="font-family: CURSIVE">Zaiets Booking</div>
      <div style="padding: 10px;">
        <form>
          <p
            class="h4 text-center mb-4 padding-title"
            style="color:#2bbbad;font-weight: bold;font-size: 40px;font-family: CURSIVE"
          >Sign in</p>
          <div class="grey-text">
            <mdb-input label="Your email" icon="envelope" type="email" v-model="email" />
            <br />
            <mdb-input label="Your password" icon="lock" type="password" v-model="password" />
            <div style="color:#757575;margin-bottom:15px">
              <input type="checkbox"> Remember me
            </div>
            
          </div>
          <div class="text-center">
            <mdb-btn
              style="width:150px;padding:10px;font-family: CURSIVE;color: white;"
              @click="authorise();goToHome()"
            >Login</mdb-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { mdbInput, mdbBtn } from "mdbvue";
import Vue from "vue";
import axios from "axios";
// import Loader from "../components/Loader";

export default Vue.extend({
  name: "Basic",
  components: {
    mdbInput,
    mdbBtn
    // Loader
  },
  data() {
    return {
      email: null,
      password: null,
      url:null
    };
  },
  methods: {
    authorise() {
      let email = this.email;
      localStorage.setItem("userEmail", email)
      let password = this.password;
      let url = this.url;
      axios
        .post("https://localhost:5001/api/account/login", {
          email,
          password,
          url
        })
        .then(function(response) {
          setTimeout(() => {
            console.log(response);
          }, 100);
        })
        .catch(function(error) {
          console.log(error);
          alert("Login Error!");
        });
    },
    goToHome() {
      this.$router.push("/");
    }
  }
});
</script>

<style>
.login-basic {
  left: 42%;
  width: 350px;
  position: relative;
  top: 200px;
  border: 3px solid #2bbbad;
  border-radius: 8px;
  background-color: #e4f2ef;
}
.card-body-header {
  height: 90px;
  background-color: #2bbbad;
  color: #ffffff;
  align-items: center;
  text-align: center;
  display: flex;
  padding-left: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: aliceblue;
  padding-left: 90px;
}
.padding-title {
  padding-top: 25px;
  padding-bottom: 25px;
}
.bg-image {
  background-image: url(../../public/images/loginBG.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
</style>