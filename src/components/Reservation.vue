<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <div>
      <NavBar />
      <div class="login-basic">
        <div
          class="card-body-header"
          style="font-family: CURSIVE; justify-content:center;padding-left:0"
        >Please, fill all nececary fields</div>
        <div style="position: absolute;right: 100px;font-size: 22px;">status: {{currentStatus}}</div>
        <div style="padding: 10px;">
          <form>
            <div style="display: flex; padding-left:200px">
              <p
                class="h4 text-center mb-4 padding-title"
                style="color:#3D99F5;font-weight: bold;font-size: 40px;font-family: CURSIVE"
              >Reservation</p>
            </div>
            <div v-show="!waitingForAcceptBool" class="grey-text">
              <mdb-input style="padding-bottom:10px" label="Email" icon="envelope" type="email" />
              <mdb-input
                style="padding-bottom:10px"
                label="Confirm Email"
                icon="exclamation-triangle"
                type="email"
              />
              <div style="display:flex;">
                <div style="margin-top:25px">
                  <vue-dropdown :config="config" @setSelectedOption="setNewSelectedOption($event)"></vue-dropdown>
                </div>
                <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="First name" icon="user" type="text" />
                </div>
                <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="Last name" icon="user" type="text" />
                </div>
              </div>
            </div>
            <div v-show="waitingForAcceptBool && !acceptedBool">
              <div style="display:flex">
                <label style="font-size:22px;font-weight:bold;color:#3d99f5">Bank card details:</label>
                <div style="font-size:20px;font-weight:bold;margin-left:25px">5168 4444 5555 6666</div>
              </div>
              <div style="display:flex">
                <label style="font-size:22px;font-weight:bold;color:#3d99f5">Price:</label>
                <div style="font-size:20px;font-weight:bold;margin-left:25px">$195</div>
              </div>
            </div>
            <div v-show="acceptedBool">
              <div style="display:flex;justify-content:center;position:relative;top:-45px">
                <b-img src="../../public/images/done.png" fluid alt="Responsive image"></b-img>
              </div>
              <div
                style="display: flex;justify-content: center;font-size: 22px;font-weight: bold;color: #3d99f5;"
              >
                Congratulation! Your room is booked! Have a good reservations
                <i
                  class="mdi mdi-reddit"
                  style="color: #00ff00;font-size:xxx-large;position:relative;top:-25px"
                ></i>
              </div>
            </div>
            <div class="text-center">
              <mdb-btn
                style="width:150px;padding:10px;font-family: CURSIVE;"
                class="btn-default"
                v-show="!waitingForAcceptBool"
                @click="reserve()"
              >Reserve</mdb-btn>
              <mdb-btn
                style="width:150px;padding:10px;font-family: CURSIVE;"
                class="btn-default"
                v-show="waitingForAcceptBool && !acceptedBool"
                @click="pay()"
              >Pay</mdb-btn>
              <mdb-btn
                style="width:150px;padding:10px;font-family: CURSIVE;"
                class="btn-default"
                v-show="acceptedBool"
                @click="backToHome()"
              >To home</mdb-btn>
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
import axios from "axios";
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
      },
      roomId: 11,
      clientId: 3,
      boookingDate: new Date().toISOString(),
      boookingDateEnd: new Date().toISOString(),
      reservations: [],
      bookingStatus: [
        {
          value: "New"
        },
        {
          value: "WaitingForAccepting"
        },
        {
          value: "Accepted"
        },
        {
          value: "Discarded"
        },
        {
          value: "WaitingForPayment"
        },
        {
          value: "Done"
        }
      ],
      currentStatus: undefined,
      id: undefined,
      waitingForAcceptingStatus: false,
      waitingForAcceptBool: false,
      acceptedBool: false
    };
  },
  methods: {
    reserve() {
      // console.log(this.boookingDate)
      // this.addReservation();
      // this.newStatusUpdate();
      if (this.currentStatus == "New") {
        this.currentStatus = "WaitingForAccepting";
        this.waitingForAcceptingStatus = !this.waitingForAcceptingStatus;
        setTimeout(
          () => (this.waitingForAcceptBool = !this.waitingForAcceptBool),
          5000
        );
      }
      setTimeout(() => (this.currentStatus = "Accepted"), 5000);
    },
    pay() {
      this.currentStatus = "WaitingForPayment";
      setTimeout(() => (this.acceptedBool = !this.acceptedBool), 5000);
      setTimeout(() => (this.currentStatus = "Done"), 5000);
    },
    backToHome() {
      this.$router.push("/");
    },
    setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;
    },
    newStatusUpdate() {
      let id = this.id;
      let clientId = this.clientId;
      let roomId = this.roomId;
      let boookingDate = this.boookingDate;
      let boookingDateEnd = this.boookingDateEnd;
      axios
        .put("https://localhost:5001/api/reservations/", {
          id,
          clientId,
          roomId,
          boookingDate,
          boookingDateEnd
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error.message);
        });
    },
    addReservation() {
      let id = this.id;
      let clientId = this.clientId;
      let roomId = this.roomId;
      let boookingDate = this.boookingDate;
      let boookingDateEnd = this.boookingDateEnd;
      let currentStatus = this.currentStatus;
      axios
        .post("https://localhost:5001/api/reservations/", {
          id,
          clientId,
          roomId,
          boookingDate,
          boookingDateEnd,
          currentStatus
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getReservations() {
      return axios
        .get("https://localhost:5001/api/reservations/")
        .then(response => {
          return response.data;
          //console.log(this.reservations);
          //console.log(this.bookingStatus[this.reservations[this.reservations.length - 1].bookingStatus]);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  async created() {
    //  this.reservations = axios
    //    .get("https://localhost:5001/api/reservations/")
    //    .then(response => {
    //      this.reservations = response.data;
    //      //console.log(this.reservations);
    //      //console.log(this.bookingStatus[this.reservations[this.reservations.length - 1].bookingStatus]);
    //    })
    //    .catch(error => {
    //      console.log(error);
    //    });
    this.reservations = await this.getReservations();
    this.id = this.reservations.length + 1;
    console.log(this.id);
    //this.currentStatus = this.bookingStatus[this.reservations[this.reservations.length - 1].bookingStatus].value;
    this.currentStatus = this.bookingStatus[0].value;
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