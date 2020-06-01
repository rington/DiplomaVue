<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <Navbar />
    <div class="to-center">
      <h1 style="margin-top:45px;margin-bottom:25px">Adding hotel</h1>
      <p>Name</p>
      <input type="text" v-model="name" />
      <p>City</p>
      <input type="text" v-model="city" />
      <p>Adress</p>
      <input type="text" v-model="adress" />
      <p>Description</p>
      <input type="text" v-model="description" />
      <p>NutritionTypeId</p>
      <input type="number" v-model="nutritionTypeId" />
      <p>Rating</p>
      <input type="number" v-model="rating" />
      <br />
      <p>Distance to the center</p>
      <input type="number" v-model="distance" />
      <br />
      <div style="margin-top:25px;justify-content:center; display: flex;">
        <vue-dropdown :config="config1" @setSelectedOption="setRoomCleaning($event)"></vue-dropdown>
        <br />
        <vue-dropdown :config="config2" @setSelectedOption="setHasParking($event)"></vue-dropdown>
      </div>
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="addHotel()">Add</b-button>
        <b-button squared variant="primary" @click="goToHotels()">Go to hotels</b-button>
      </div>
    </div>
    <Footer style="bottom:0px" />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Navbar from "../NavBar";
import Footer from "../Footer";
import VueDropdown from "vue-dynamic-dropdown";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
    VueDropdown
  },
  data() {
    return {
      name: null,
      city: null,
      adress: null,
      description: null,
      nutritionTypeId: 0,
      rating: 0,
      distance: 0,
      config1: {
        options: [
          {
            value: "true"
          },
          {
            value: "false"
          }
        ],
        placeholder: "Room cleaning",
        backgroundColor: "#97CEF7",
        textColor: "black",
        borderRadius: "1.1em",
        border: "1px solid #3D99F5",
        width: 200
      },
      config2: {
        options: [
          {
            value: "true"
          },
          {
            value: "false"
          }
        ],
        placeholder: "Has parking",
        backgroundColor: "#97CEF7",
        textColor: "black",
        borderRadius: "1.1em",
        border: "1px solid #3D99F5",
        width: 200
      }
    };
  },
  methods: {
    addHotel() {
      let name = this.name;
      let adress = this.adress;
      let city = this.city;
      let rating = this.rating;
      let description = this.description;
      let nutritionTypeId = this.nutritionTypeId;
      if (
        name != null &&
        city != null &&
        adress != null &&
        !(rating > 10 && rating < 0)
      ) {
        axios
          .post("https://localhost:5001/api/hotels/", {
            name,
            city,
            adress,
            description,
            nutritionTypeId,
            rating
          })
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
    },
    setRoomCleaning(selectedOption) {
      this.config1.placeholder = selectedOption.value;
    },
    setHasParking(selectedOption) {
      this.config2.placeholder = selectedOption.value;
    }
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