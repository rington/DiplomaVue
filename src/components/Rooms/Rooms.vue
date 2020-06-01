<template>
  <div style="background-color:#99d6ff;min-height:100vh">
    <div>
      <NavBar />
      <div>
        <div class="title-rooms">
          <h1 style="font-size:3rem !important">Rooms</h1>
        </div>

        <Loader v-if="loading" />
        <div
          v-else-if="rooms.length"
          style="display:flex; margin-top: 30px; justify-content:center;padding-bottom:50px;font-family:cursive;"
        >
          <b-card
            title="Suite"
            img-src="../../../public/images/suite.jpg"
            img-alt="Image"
            img-top
            img-height="212px"
            tag="article"
            style="max-width: 20rem; margin-right:30px;cursor:pointer"
            class="mb-2 card-image-top"
            :class="{ 'disable-form' : roomTypeCounter[0].count == 0}"
          >
            <b-card-text>A room comprises of two or more bedroom, a living room and a dining area. Belong to the luxury category. Demanded by tourists, especially families.</b-card-text>
            <div class="room-card">
              <b-button squared variant="primary" @click="goToReserve()">Reserve</b-button>
              <div>Price: ${{roomTypeCounter[0].price}}</div>
            </div>
            <div class="available">Available:{{roomTypeCounter[0].count}}</div>
          </b-card>
          <b-card
            title="Standart"
            img-src="../../../public/images/standart.jpg"
            img-alt="Image"
            img-top
            img-height="212px"
            tag="article"
            style="max-width: 20rem; margin-right:30px;cursor:pointer"
            class="mb-2 card-image-top"
            :class="{ 'disable-form' : roomTypeCounter[1].count == 0}"
          >
            <b-card-text>Standard single rooms with minimum comfort. Has double beb facility.There is a TV, telephone, refrigerator, minimal furniture, a bathroom.</b-card-text>
            <div class="room-card">
              <b-button squared variant="primary" @click="goToReserve()">Reserve</b-button>
              <div>Price: ${{roomTypeCounter[1].price}}</div>
            </div>
            <div class="available">Available:{{roomTypeCounter[1].count}}</div>
          </b-card>
          <b-card
            title="De Luxe"
            img-src="../../../public/images/de_luxe.jpg"
            img-alt="Image"
            img-top
            img-height="212px"
            tag="article"
            style="max-width: 20rem;  margin-right:30px;cursor:pointer"
            class="mb-2 card-image-top"
            :class="{ 'disable-form' : roomTypeCounter[2].count == 0}"
          >
            <b-card-text>Superior rooms which mainly bigger than others. Have all necessary appliances with excellent quality. The deluxe rooms have all the necessary appliances.</b-card-text>
            <div class="room-card">
              <b-button squared variant="primary" @click="goToReserve()">Reserve</b-button>
              <div>Price: ${{roomTypeCounter[2].price}}</div>
            </div>
            <div class="available">Available:{{roomTypeCounter[2].count}}</div>
          </b-card>
          <b-card
            title="Duplex"
            img-src="../../../public/images/duplex.jpg"
            img-alt="Image"
            img-top
            img-height="212px"
            tag="article"
            style="max-width: 20rem; margin-right:30px;cursor:pointer"
            class="mb-2 card-image-top"
            :class="{ 'disable-form' : roomTypeCounter[3].count == 0}"
          >
            <b-card-text>A room which is been spread on two floars connected by an internal staircase. Have all necessary appliances with excellent quality.</b-card-text>
            <div class="room-card">
              <b-button squared variant="primary" @click="goToReserve()">Reserve</b-button>
              <div>Price: ${{roomTypeCounter[3].price}}</div>
            </div>
            <div class="available">Available:{{roomTypeCounter[3].count}}</div>
          </b-card>
        </div>
      </div>
    </div>
    <Footer style="bottom:0" />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Loader from "../Loader";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default Vue.extend({
  components: {
    Loader,
    NavBar,
    Footer
  },
  data() {
    return {
      hotelId: localStorage.getItem("hotelId"),
      rooms: [],
      roomTypeCounter: [
        { count: 0, price: 0 },
        { count: 0, price: 0 },
        { count: 0, price: 0 },
        { count: 0, price: 0 }
      ],
      loading: true
    };
  },
  methods: {
    goToReserve() {
      console.log("qweqwe");
      this.$router.push("/hotels/*/rooms/reservation");
    }
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/rooms/hotel/" + this.hotelId)
      .then(response => {
        setTimeout(() => {
          this.rooms = response.data;
          this.rooms.forEach(element => {
            if (element.roomTypeId == 1) {
              this.roomTypeCounter[0].count++;
              this.roomTypeCounter[0].price = element.price;
            } else if (element.roomTypeId == 2) {
              this.roomTypeCounter[1].count++;
              this.roomTypeCounter[1].price = element.price;
            } else if (element.roomTypeId == 3) {
              this.roomTypeCounter[2].count++;
              this.roomTypeCounter[2].price = element.price;
            } else if (element.roomTypeId == 4) {
              this.roomTypeCounter[3].count++;
              this.roomTypeCounter[3].price = element.price;
            }
            this.loading = false;
          });
          console.log(this.roomTypeCounter);
        }, 600);
      })
      .catch(error => {
        console.log(error);
      });
  }
});
</script>

<style>
.title-rooms {
  text-align: center;
  margin: 50px auto 70px auto;
  font-weight: bold;
  font-family: cursive;
}
.room-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
}
.disable-form {
  background-color: #e2dddd;
  opacity: 0.7;
  pointer-events: none;
}
.available {
  padding: 10px 10px 0px 10px;
  font-weight: bold;
  font-size: 18px;
}
</style>