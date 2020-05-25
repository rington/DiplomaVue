<template>
  <div>
    <Navbar />
    <div class="to-center">
      <h1>Adding Hotel</h1>
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
      <div style="margin-top:25px;">
        <button @click="addHotel">Add hotel</button>
        <button @click="goHome">Go to hotels</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import Navbar from "../NavBar";
export default Vue.extend({
  components: {
    Navbar
  },
  data() {
    return {
      name: null,
      city: null,
      adress: null,
      description: null,
      nutritionTypeId: 0,
      rating: 0
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
    goHome() {
      this.$router.push("/hotels");
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