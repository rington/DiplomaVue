<template>
  <div>
    <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
      <NavBar />
      <div class="title-design">
        <h1 style="font-family:cursive">All hotels</h1>
      </div>
      <div class="filer">
        <b-card no-body style="min-width: 15rem;max-width:15rem">
          <template v-slot:header>
            <h4 style="text-align: center;font-weight:bold" class="mb-0">Filter by:</h4>
          </template>
          <b-card-body>
            <b-button
              style="justify-content: center;font-weight:bold;position: relative;left: 35px"
              squared
              variant="primary"
              @click="resetAll()"
            >Reset all</b-button>
            <b-card-text style="font-weight:bold;font-size:20px;color:black">Star rating</b-card-text>
            <b-list-group>
              <b-form-checkbox v-model="stars3" value="3" name="stars" id="s1">3 stars</b-form-checkbox>
              <b-form-checkbox v-model="stars4" value="4" name="stars" id="s2">4 stars</b-form-checkbox>
              <b-form-checkbox v-model="stars5" value="5" name="stars" id="s3">5 stars</b-form-checkbox>
            </b-list-group>
          </b-card-body>
          <b-card-body>
            <b-card-text style="font-weight:bold;font-size:20px;color:black">Nutrition</b-card-text>
            <b-list-group>
              <b-form-checkbox v-model="ro" value="1" name="nutrition" id="n1">RO(Room only)</b-form-checkbox>
              <b-form-checkbox v-model="bb" value="2" name="nutrition" id="n2">BB(Bed & breakfast)</b-form-checkbox>
              <b-form-checkbox v-model="hb" value="3" name="nutrition" id="n3">HB(Half board)</b-form-checkbox>
              <b-form-checkbox v-model="fb" value="4" name="nutrition" id="n4">FB(Full board)</b-form-checkbox>
              <b-form-checkbox v-model="ai" value="5" name="nutrition" id="n5">AI(All inclusive)</b-form-checkbox>
            </b-list-group>
          </b-card-body>
          <b-card-body>
            <b-card-text style="font-weight:bold;font-size:20px;color:black">Has room cleaning</b-card-text>
            <b-list-group>
              <b-form-radio v-model="hasRoomCleaning" name="radio1" value="true">Yes</b-form-radio>
              <b-form-radio v-model="hasRoomCleaning" name="radio2" value="false">No</b-form-radio>
            </b-list-group>
          </b-card-body>
          <b-card-body>
            <b-card-text style="font-weight:bold;font-size:20px;color:black">Has parking</b-card-text>
            <b-list-group>
              <b-form-radio v-model="hasParking" name="radio3" value="true">Yes</b-form-radio>
              <b-form-radio v-model="hasParking" name="radio4" value="false">No</b-form-radio>
            </b-list-group>
          </b-card-body>
          <b-card-body>
            <b-card-text style="font-weight:bold;font-size:20px;color:black">
              Distance to center
              <center></center>
            </b-card-text>
            <b-list-group>
              <b-form-checkbox v-model="distance1" value="1" name="distance" id="d1">&#60; 1 km</b-form-checkbox>
              <b-form-checkbox v-model="distance2" value="2" name="distance" id="d2">1-2 km</b-form-checkbox>
              <b-form-checkbox v-model="distance3" value="3" name="distance" id="d3">&#62; 2 km</b-form-checkbox>
            </b-list-group>
          </b-card-body>
          <b-button squared variant="primary" @click="filter">Filtered</b-button>
        </b-card>
      </div>
      <Loader v-if="loading" />
      <div v-else-if="hotels.length">
        <div
          v-for="hotel in hotels"
          v-bind:key="hotel.id"
          class="div hotelCard"
          style="font-family:cursive"
        >
          <b-card no-body style="min-width: 25rem;max-width:25rem">
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
                <b-carousel-slide
                  img-height="225px"
                  img-src="../../../public/images/hotel.jpg"
                  class="img-fluid"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-height="225px"
                  img-src="../../../public/images/hotel2.jpg"
                  class="img-fluid"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-height="225px"
                  img-src="../../../public/images/reception.png"
                  class="img-fluid"
                ></b-carousel-slide>
              </b-carousel>
            </div>

            <!-- Card body -->
            <template v-slot:header>
              <h4 style="text-align: center;font-weight:bold" class="mb-0">{{hotel.name}}</h4>
            </template>
            <b-list-group-item class="rating-style more-info" :style="ratingColor(hotel.rating)">
              Stars: {{hotel.rating}}
              <div>
                <b style="font-size:16px;color:black">More</b>
                <i
                  class="mdi mdi-arrow-bottom-left-thick"
                  style="color:#3d99f5;"
                  @click="detailsShow=!detailsShow"
                ></i>
              </div>
            </b-list-group-item>

            <div v-show="detailsShow">
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
              <b-list-group>
                <b-list-group-item>Room cleaning: {{hotel.hasRoomCleaning}}</b-list-group-item>
                <b-list-group-item>Parking: {{hotel.hasParking}}</b-list-group-item>
                <b-list-group-item>Distance to the city center: {{hotel.distanceToCityCenter}}</b-list-group-item>
              </b-list-group>
            </div>

            <b-card-footer style="text-align:center;font-weight: bold; font-size: 25px;">
              <a
                :href="goToRooms(hotel.id)"
                @click="setHotelId(hotel.id)"
                class="card-link"
              >Go to rooms</a>
            </b-card-footer>
          </b-card>
        </div>
        <!-- Page navigation -->
        <div
          class="overflow-auto"
          v-if="!loading"
          style="justify-content:center; display:flex;padding-bottom:40px;"
        >
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
  </div>
</template>
<script >
import Vue from "vue";
import axios from "axios";
import Loader from "../Loader";
import NavBar from "../NavBar";
// import Footer from "../Footer";

export default Vue.extend({
  components: {
    Loader,
    NavBar
    //Footer
  },
  data() {
    return {
      hotels: [],
      loading: true,
      nutritions: [],
      pages: 4,
      currentPage: 1,
      detailsShow: false,
      hasRoomCleaning: undefined,
      hasParking: undefined,
      stars3: null,
      stars4: null,
      stars5: null,
      distance1: null,
      distance2: null,
      distance3: null,
      ro: null,
      bb: null,
      hb: null,
      fb: null,
      ai: null
    };
  },
  mounted() {
    axios
      .get("https://localhost:5001/api/hotels/")
      .then(response => {
        setTimeout(() => {
          this.hotels = response.data;
          this.hotels.sort(function(a, b) {
            return b.id - a.id;
          });
          this.loading = false;
        }, 600);
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
    // goToAdd() {
    //   this.$router.push("/hotels/add");
    // },
    // gotToDelete() {
    //   this.$router.push("/delete");
    // },
    // goToUpdate() {
    //   this.$router.push("/update");
    // },
    goToRooms(hotelId) {
      return `hotels/${hotelId}/rooms`;
    },
    ratingColor(rating) {
      if (rating < 3) {
        return "color:red;";
      } else if (rating >= 3 && rating < 5) {
        return "color:#F5C60E;";
      }

      return "color:#00A51B;";
    },
    setHotelId(hotelId) {
      localStorage.setItem("hotelId", hotelId);
    },
    filter() {
      let hasParking = this.hasParking;
      let hasRoomCleaning = this.hasRoomCleaning;
      let hotelsTmp = this.hotels;
      if (this.stars3 != 0 || this.stars4 != 0 || this.stars5 != 0) {
        axios
          .get(
            "https://localhost:5001/api/hotels/ratingArray/" +
              this.stars3 +
              "/" +
              this.stars4 +
              "/" +
              this.stars5
          )
          .then(response => {
            setTimeout(() => {
              this.hotels = response.data;
              this.loading = false;
            }, 600);
            hotelsTmp = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.hotels = this.hotels.filter(function(x) {
        if (hotelsTmp.indexOf(x) != -1) return true;
        return false;
      });
      hotelsTmp = this.hotels;
      if (
        this.ro != null ||
        this.bb != null ||
        this.hb != null ||
        this.fb != null ||
        this.ai != null
      ) {
        axios
          .get(
            "https://localhost:5001/api/hotels/nutritionArray/" +
              this.ro +
              "/" +
              this.bb +
              "/" +
              this.hb +
              "/" +
              this.fb +
              "/" +
              this.ai
          )
          .then(response => {
            setTimeout(() => {
              this.hotels = response.data;
              this.loading = false;
            }, 600);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.hotels = this.hotels.filter(function(x) {
        if (hotelsTmp.indexOf(x) != -1) return true;
        return false;
      });
      hotelsTmp = this.hotels;
      if (hasRoomCleaning != undefined) {
        axios
          .get(
            "https://localhost:5001/api/hotels/roomCleaning/" + hasRoomCleaning
          )
          .then(response => {
            setTimeout(() => {
              this.hotels = response.data;
              this.loading = false;
            }, 600);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.hotels = this.hotels.filter(function(x) {
        if (hotelsTmp.indexOf(x) != -1) return true;
        return false;
      });
      hotelsTmp = this.hotels;
      if (hasParking != undefined) {
        axios
          .get("https://localhost:5001/api/hotels/parking/" + hasParking)
          .then(response => {
            setTimeout(() => {
              this.hotels = response.data;
              this.loading = false;
            }, 600);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.hotels = this.hotels.filter(function(x) {
        if (hotelsTmp.indexOf(x) != -1) return true;
        return false;
      });
      hotelsTmp = this.hotels;
      if (
        this.distance1 != null ||
        this.distance2 != null ||
        this.distance3 != null
      ) {
        axios
          .get(
            "https://localhost:5001/api/hotels/distance/" +
              this.distance1 +
              "/" +
              this.distance2 +
              "/" +
              this.distance3
          )
          .then(response => {
            setTimeout(() => {
              this.hotels = response.data;
              console.log(this.hotels);
              this.loading = false;
            }, 600);
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.hotels = this.hotels.filter(function(x) {
        if (hotelsTmp.indexOf(x) != -1) return true;
        return false;
      });
    },
    resetAll() {
      var radio1 = document.getElementsByName("radio1");
      var radio2 = document.getElementsByName("radio2");
      var radio3 = document.getElementsByName("radio3");
      var radio4 = document.getElementsByName("radio4");
      radio1[0].checked = false;
      radio2[0].checked = false;
      radio3[0].checked = false;
      radio4[0].checked = false;
      var nutritionCBs = document.getElementsByName("nutrition");
      for (let i = 0; i < nutritionCBs.length; i++) {
        nutritionCBs[i].checked = false;
      }
      var distanceCBs = document.getElementsByName("distance");
      for (let i = 0; i < distanceCBs.length; i++) {
        distanceCBs[i].checked = false;
      }
      var starsCBs = document.getElementsByName("stars");
      for (let i = 0; i < starsCBs.length; i++) {
        starsCBs[i].checked = false;
      }
      this.stars3 = undefined;
      this.stars4 = undefined;
      this.stars5 = undefined;
      this.hasParking = undefined;
      this.hasRoomCleaning = undefined;
      this.distance1 = null;
      this.distance2 = null;
      this.distance3 = null;
      axios
        .get("https://localhost:5001/api/hotels/")
        .then(response => {
          setTimeout(() => {
            this.hotels = response.data;
            this.hotels.sort(function(a, b) {
              return b.id - a.id;
            });
            this.loading = false;
          }, 600);
        })
        .catch(error => {
          console.log(error);
        });
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
.more-info {
  display: flex;
  justify-content: space-between;
  font-size: x-large;
  cursor: pointer;
}
</style>