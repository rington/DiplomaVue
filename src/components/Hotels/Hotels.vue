<template>
  <div style="background-color:#D3DBE1;min-height:100vh;font-family:cursive">
    <NavBar />
    <div class="title-design">
      <h1 style="font-family:cursive">All hotels</h1>
    </div>
    <Loader v-if="loading" />
    <div v-else-if="hotels.length" >
      <div class="filer">
        <b-card no-body style="min-width: 15rem;max-width:15rem">
            <template v-slot:header>
                <h4 style="text-align: center;font-weight:bold" class="mb-0">Filter by:</h4>
            </template>
            <b-card-body>
                <b-card-text style="font-weight:bold;font-size:20px;color:black">Star rating</b-card-text>
                <b-list-group>                    
                    <b-form-checkbox style="cursor:pointer;">2 stars</b-form-checkbox>
                    <b-form-checkbox>3 stars</b-form-checkbox>
                    <b-form-checkbox>4 stars</b-form-checkbox>
                    <b-form-checkbox>5 stars</b-form-checkbox> 
                </b-list-group>       
            </b-card-body>
            <b-card-body>
                <b-card-text style="font-weight:bold;font-size:20px;color:black">Nutrition</b-card-text>
                <b-list-group>                    
                    <b-form-checkbox style="cursor:pointer;">RO(Room only)</b-form-checkbox>
                    <b-form-checkbox>BB(Bed & breakfast)</b-form-checkbox>
                    <b-form-checkbox>HB(Half board)</b-form-checkbox>
                    <b-form-checkbox>FB(Full board)</b-form-checkbox> 
                    <b-form-checkbox>AI(All inclusive)</b-form-checkbox> 
                </b-list-group>       
            </b-card-body>
              <b-card-body>
                <b-card-text style="font-weight:bold;font-size:20px;color:black">Has room cleaning</b-card-text>
                <b-list-group>                    
                    <b-form-checkbox style="cursor:pointer;">Yes</b-form-checkbox>
                    <b-form-checkbox>No</b-form-checkbox> 
                </b-list-group>       
            </b-card-body>
              <b-card-body>
                <b-card-text style="font-weight:bold;font-size:20px;color:black">Has parking</b-card-text>
                <b-list-group>                    
                    <b-form-checkbox style="cursor:pointer;">Yes</b-form-checkbox>
                    <b-form-checkbox>No</b-form-checkbox>
                </b-list-group>       
            </b-card-body>
        </b-card>
      </div>
      <div v-for="hotel in hotels" v-bind:key="hotel.id" class="div hotelCard" style="font-family:cursive">
        <b-card no-body style="min-width: 30rem;max-width:30rem">
          <!-- Image carousel -->
          <div>
            <b-carousel
              id="carousel-1"
              :interval="500000"
              controls
              img-width="320"
              img-height="150"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide img-height="225px" img-src="../../../public/images/hotel.jpg" class="img-fluid"></b-carousel-slide>
              <b-carousel-slide img-height="225px" img-src="../../../public/images/hotel2.jpg" class="img-fluid"></b-carousel-slide>
              <b-carousel-slide img-height="225px" img-src="../../../public/images/reception.png" class="img-fluid"></b-carousel-slide>
            </b-carousel>
          </div>

          <!-- Card body -->
          <template v-slot:header>
            <h4 style="text-align: center;font-weight:bold" class="mb-0">{{hotel.name}}</h4>
          </template>
          <b-list-group-item
            class="rating-style"
            :style="ratingColor(hotel.rating)"
          >Rating: {{hotel.rating}}</b-list-group-item>
          <b-card-body>
            <b-card-title>Description</b-card-title>
            <b-card-text>{{hotel.description}}</b-card-text>
          </b-card-body>
          <b-list-group>
            <b-list-group-item>City: {{hotel.city}}</b-list-group-item>
            <b-list-group-item>Address: {{hotel.address}}</b-list-group-item>
          </b-list-group>
          <b-card-body>
            <b-card-title>Nutrition: {{getNutritionByHotelId(hotel.nutritionTypeId)}}</b-card-title>
            <b-card-text>teet a afdsf dsf</b-card-text>
          </b-card-body>
          <b-card-footer style="text-align:center;font-weight: bold; font-size: 25px;">
            <a :href="goToRooms(hotel.id)" class="card-link">Go to rooms</a>
          </b-card-footer>
        </b-card>
      </div>
      <!-- Page navigation -->
      <div class="overflow-auto" v-if="!loading" style="justify-content:center; display:flex;">
        <div>
          <b-pagination-nav
            v-model="currentPage"
            :number-of-pages="pages"
            base-url="#"
            first-number
            size="lg"
            class="nav-style"
          ></b-pagination-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import axios from "axios";
import Loader from "../Loader";
import NavBar from "../NavBar";

export default Vue.extend({
  components: {
    Loader,
    NavBar
  },
  data() {
    return {
      hotels: [],
      loading: true,
      nutritions: [],
      pages: 4,
      currentPage: 1
    };
  },
  created() {
    axios
      .get("https://localhost:5001/api/hotels/")
      .then(response => {
        setTimeout(() => {
          this.hotels = response.data;
          this.loading = false;
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("https://localhost:5001/api/nutritionTypes/")
      .then(response => {
        this.nutritions = response.data;
      })
      .catch(error => {
        console.log(error);
      });    
  },
  methods: {
    getNutritionByHotelId(nutritionTypeId) {
      return this.nutritions[nutritionTypeId - 1].name;
    },
    goToAdd() {
      this.$router.push("/hotels/add");
    },
    gotToDelete() {
      this.$router.push("/delete");
    },
    goToUpdate() {
      this.$router.push("/update");
    },
    goToRooms(hotelId) {
      return `hotel/${hotelId}/rooms`;
    },
    ratingColor(rating) {
      if (rating < 3) {
        return "color:red;";
      } else if (rating >= 3 && rating < 5) {
        return "color:#F5C60E;";
      }

      return "color:#00A51B;";
    }
  }
});
</script>

<style>
.hotelCard {
  font-weight: bold;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  display: flex;
}
span {
  padding-left: 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.rating-style {
  font-weight: bold;
  font-size: 22px;
}
.nav-style {
  border: 1px solid lightgray;
  background-color: white;
}
.nav-style li {
  border: 1px solid lightgray;
}
.title-design {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin: 50px auto 20px auto;
  font-weight: bold;
}
.filer {
  width: 250px;
  height: auto;
  display: flex;
  position: absolute;
  left: 20%;
}
.img-fluid {
    max-width: 100%;
    height: 255px;
}
</style>