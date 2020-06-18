<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar />
    <div class="to-center">
      <h1 style="margin-top:45px;margin-bottom:25px">Rate the client</h1>
      <p>Name</p>
      <input type="text" v-model="name" />
      <p>Decency</p>
      <input type="number" v-model="nutritionTypeId" />
      <p>RoomCleanliness</p>
      <input type="number" v-model="rating" />
      <br />
      <p>HotelRulesCompliance</p>
      <input type="number" v-model="distance" />
      <br />
      <p>Behavior</p>
      <input type="number" v-model="behavior" />
      <br />
      <p>Comment</p>
      <textarea name="" id="" cols="30" rows="4"></textarea> 
      
      <div style="margin-top:25px;">
        <b-button squared variant="primary" @click="updateHotel()">Submit</b-button>
      </div>
    </div>
    <Footer style="bottom:0px" />
  </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default Vue.extend({
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      name: null,
      city: null,
      adress: null,
      description: null,
      nutritionTypeId: 0,
      rating: 0,
      behavior: 0,
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
    // updateProduct() {
    //   let name = this.name;
    //   let city = this.city;
    //   let adress = this.adress;
    //   let description = this.description;
    //   let nutritionTypeId = this.nutritionTypeId;
    //   let rating = this.rating;
    //   let distance = this.distance;
    //   let roomCleaning = this.config1.placeholder;
    //   let hasParking = this.config2.placeholder;
    //   if (id != 0) {
    //     axios
    //       .put("https://localhost:44357/api/products/" + id, {
    //         id,
    //         title,
    //         price,
    //         quantity
    //       })
    //       .then(function(response) {
    //         console.log(response);
    //         alert("Success!");
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //         alert("Error!");
    //       });
    //   } else alert("Error!");
    // },
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


</style>