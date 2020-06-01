<template>
  <div style="background-color:#99d6ff;min-height:100vh;">
    <div>
      <NavBar />
      <div class="login-basic">
        <div
          class="card-body-header"
          style="font-family: CURSIVE; justify-content:center;padding-left:0"
        >Please, fill all nececary fields</div>
        <div style="padding: 10px;">
          <form>
            <div style="display: flex; padding-left:200px">
              <p
                class="h4 text-center mb-4 padding-title"
                style="color:#3D99F5;font-weight: bold;font-size: 40px;font-family: CURSIVE"
              >Reservation</p>
              <div
                style="padding-top:35px;position: absolute;right: 100px;font-size: 22px;"
              >status: New</div>
            </div>
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
                label="Confirm Email"
                icon="exclamation-triangle"
                type="email"
                v-model="name"
              />
              <div style="display:flex;">
                <div style="margin-top:25px">
                  <vue-dropdown :config="config" @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
                </div>
                <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="First name" icon="user" type="text" v-model="name" />
                </div>
                <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="Last name" icon="user" type="text" v-model="name" />
                </div>
              </div>
            </div>
            <div class="text-center">
              <mdb-btn
                style="width:150px;padding:10px;font-family: CURSIVE;"
                class="btn-default"
                @click="reserve()"
              >Reserve</mdb-btn>
            </div>
          </form>
        </div>
      </div>
      <!-- <Footer style="bottom:0" />  -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
import NavBar from "./NavBar";
// import Footer from "./Footer";
import { mdbInput, mdbBtn } from "mdbvue";
import VueDropdown from "vue-dynamic-dropdown";

export default Vue.extend({
  components: {
    NavBar,
    // Footer,
    mdbInput,
    mdbBtn,
    VueDropdown
  },
  data() {
    return {
      config: {
        options: [
          {
            value: "Mr."
          },
          {
            value: "Ms."
          },
          {
            value: "Mrs."
          }
        ],
        placeholder: "Title",
        backgroundColor: "#97CEF7",
        textColor: "black",
        borderRadius: "1.1em",
        border: "1px solid #3D99F5",
        width: 180
      }
    };
  },
  methods: {
    reserve() {},
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    }
  }
});
</script>

<style>
.login-basic {
  left: 32%;
  width: 700px;
  position: relative;
  top: 120px;
  border: 3px solid #3d99f5;
  border-radius: 8px;
  background-color: #e4f2ef;
}
.card-body-header {
  height: 90px;
  background-color: #3d99f5;
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
.btn-default {
  color: white;
  background-color: #3d99f5 !important;
}
</style>