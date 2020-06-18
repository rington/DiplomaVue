<template>
  <div class="bg-image">
    <div class="login-basic2">
      <div class="card-body-header2" style="font-family: CURSIVE">Zaiets Booking</div>
      <div style="padding: 10px;">
        <form>
          <p
            class="h4 text-center mb-4 padding-title"
            style="color:#2bbbad;font-weight: bold;font-size: 40px;font-family: CURSIVE"
          >Create account</p>
          <div class="grey-text">
            <mdb-input
              style="padding-bottom:10px"
              label="Email"
              icon="envelope"
              type="email"
              v-model="email"
            />
            <mdb-input
              style="padding-bottom:10px"
              label="Username"
              icon="user"
              type="text"
              v-model="name"
            />
            <mdb-input
              style="padding-bottom:10px"
              label="Password"
              icon="lock"
              type="password"
              v-model="password"
            />
            <mdb-input
              style="padding-bottom:10px"
              label="Confirm Password"
              icon="exclamation-triangle"
              type="password"
              v-model="passwordConfirm"
            />
          </div>
          <div class="text-center">
            <mdb-btn
              style="width:150px;padding:10px;font-family: CURSIVE;color: white;background-color: #2bbbad !important;"
              @click="register()"
            >Create</mdb-btn>
            <mdb-btn
              style="width:150px;padding:10px;font-family: CURSIVE;color: white;background-color: #2bbbad !important;"
              @click="varifyUser()"
            >Sign In</mdb-btn>
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

export default Vue.extend({
  name: "Basic",
  components: {
    mdbInput,
    mdbBtn
  },
  data() {
    return {
      email: null,
      name: null,
      password: null,
      passwordConfirm: null,
      isExist: false
    };
  },
  methods: {
    register() {
      let email = this.email;
      let name = this.name;      
      let password = this.password;
      let passwordConfirm = this.passwordConfirm;
      axios
        .post("https://localhost:5001/api/account/register", {
          email,
          name,
          password,
          passwordConfirm
        })
        .then(function(response) {
          console.log(response);
          alert("Success!");
        })
        .catch(function(error) {
          console.log(error);
          alert("Validation error!");
        });
    },
    varifyUser() {
      let user = this.user;
      axios
        .get(
          "https://localhost:5001/api/account/register/confirm/" + this.email
        )
        .then(response => {
          setTimeout(() => {
            user = response.data;
            if (user.email == this.email) {
              this.isExist = true;
              this.goToLogin();
            }
          }, 100);
        })
        .catch(error => {
          console.log(error);
        });
      this.goToLogin();
    },
    goToLogin() {
      if (this.isExist == true) {
        this.$router.push("/login");
      }
    }
  }
});
</script>

<style>
.login-basic2 {
  left: 42%;
  width: 350px;
  position: relative;
  top: 120px;
  border: 3px solid #2bbbad;
  border-radius: 8px;
  background-color: #e4f2ef;
}
.card-body-header2 {
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