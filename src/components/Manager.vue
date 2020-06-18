<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <div>
      <NavBar />
      <div style="display:flex;justify-content:center">
        <div style="display:flex;justify-content:center;padding-top:50px">
        <mdb-btn
          style="width:150px;padding:10px;font-family: CURSIVE;"
          class="btn-default"
          @click="swap1()"
      >Start working</mdb-btn>
      </div>
      <div style="display:flex;justify-content:center;padding-top:50px">
        <mdb-btn
          style="width:150px;padding:10px;font-family: CURSIVE;"
          class="btn-default"
          @click="swap2()"
      >Stop working</mdb-btn>
      </div>
      <div style="display:flex;justify-content:center;padding-top:50px">
        <mdb-btn
          style="width:150px;padding:10px;font-family: CURSIVE;"
          class="btn-default"
          @click="goToRating()"
      >Add rating</mdb-btn>
      </div>      
      </div>       
      <div v-show="isShow" style="display: flex; justify-content: center; position: relative;">
        <div style="position:relative;top:120px;">
          <b-card
            title="Zaiets_IP63"
            img-src="../../public/images/user.jpg"
            img-height="190px"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <div
              style="font-size: 20px;color: #3d99f5;font-weight: bold;justify-content: center;display: flex;"
            >Roman Zaiets</div>
            <b-card-text>
              <b-list-group-item style="color:#3CFF00;font-size:20px;font-weight:bold;">Rating 9.8</b-list-group-item>
              <b-list-group-item style="text-align:center;font-size:16px;font-weight:bold">Reviews</b-list-group-item>
              <b-list-group-item style=";font-size:16px;">Well-mannered client. Recomend!</b-list-group-item>
              <b-list-group-item
                style=";font-size:16px;"
              >Very cultural client. Clean room and the good mood!!!!</b-list-group-item>
            </b-card-text>
          </b-card>
        </div>
        <div class="login-basic1">
          <div
            class="card-body-header1"
            style="font-family: CURSIVE; justify-content:center;padding-left:0"
          >New client</div>
          <div style="padding: 10px;">
            <form>
              <div style="display: flex; padding-left:200px">
                <p
                  class="h4 text-center mb-4 padding-title1"
                  style="color:#3D99F5;font-weight: bold;font-size: 40px;font-family: CURSIVE"
                >Reservation</p>
              </div>
              <hr />
              <div class="grey-text"></div>
              <div v-show="!acceptBool">
                <div
                style="display:flex;justify-content:center;font-size:20px;font-weight:bold;color:red;padding-bottom:15px"
              >Do you allow this user to book a hotel?</div>
              <div class="text-center">
                <mdb-btn
                  style="width:150px;padding:10px;font-family: CURSIVE;"
                  class="btn-default1"
                  @click="accept()"
                >Accept</mdb-btn>
              </div>
              <div class="text-center">
                <mdb-btn
                  style="width:150px;padding:10px;font-family: CURSIVE;"
                  class="btn-default1"
                >Discard</mdb-btn>
              </div>
              </div>
              <div v-show="acceptBool &&!confirmPayment" style="display:flex;justify-content:center">
                <mdb-btn
                  style="width:150px;padding:10px;font-family: CURSIVE;"
                  class="btn-default1"
                  @click="confirm()"
                >Confirm payment</mdb-btn>
              </div> 
              <div v-show="confirmPayment">
                <div
                style="display: flex;justify-content: center;font-size: 26px;font-weight: bold;color: #00ff00"
              >
                The client successfully booked a room!                
              </div>
              </div>             
            </form>
          </div>
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
import { mdbBtn } from "mdbvue";

export default Vue.extend({
  components: {
    NavBar,
    // Footer,

    mdbBtn
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
      },
      isShow: false,
      acceptBool:false,
      confirmPayment: false,
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    reserve() {},
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
    swap1() {
      alert("Start working!");
      setTimeout(() => (this.isShow = !this.isShow), 5000);
    },
    swap2() {
      alert("Stop working!");
      setTimeout(() => (this.isShow = !this.isShow), 5000);
    },
    accept(){
       setTimeout(() => (this.acceptBool = !this.acceptBool), 5000);
    },
    confirm(){
       setTimeout(() => (this.confirmPayment = !this.confirmPayment), 100);
    },
    goToRating(){
      this.$router.push("/ratingCriteria")
    }
  }
});
</script>

<style>
.login-basic1 {
  left: 5% !important;
  width: 700px;
  position: relative;
  top: 120px;
  border: 3px solid #3d99f5;
  border-radius: 8px;
  background-color: #e4f2ef;
  height: 450px;
}
.card-body-header1 {
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
.padding-title1 {
  padding-top: 25px;
  padding-bottom: 25px;
}
.btn-default1 {
  color: white;
  background-color: #3d99f5 !important;
}
</style>