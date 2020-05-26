<template>
  <div style="background-color:#D3DBE1;min-height:100vh">
    <NavBar />
    <div v-if="collapsed" class="banner">
      <div>
        <i class="mdi mdi-information-outline info-button" style="color: #FF0000"></i>
        Coronavirus(COVID-19): info
      </div>
      <div class="info-eye">
        <i class="mdi mdi-eye" @click="collapsed = !collapsed"></i>
      </div>
    </div>
    <div v-else class="banner-expanded">
      <div>
        <i class="mdi mdi-information-outline info-button" style="color: #FF0000"></i>
        Coronavirus(COVID-19): info
        <p>
          Booking unavailable during pandemic.
          Please, stay at home. Together we will stop it!
        </p>
      </div>
      <div class="info-eye">
        <i class="mdi mdi-eye" @click="collapsed = !collapsed"></i>
      </div>
    </div>
    <p class="calendar-title">Choose date for you trip</p>
    <div style="display:flex;justify-content:center;">
      <div style="margin-top:30px">
        <b-row>
          <b-col md="auto" class="no-padding">
            <b-calendar
              v-model="value1"
              @context="onContextFrom"
              locale="en-US"
              style="border: 2px solid #3d99f5;"
            ></b-calendar>
          </b-col>
        </b-row>
      </div>
      <div style="margin-top:30px; padding-left:100px">
        <b-row>
          <b-col md="auto" class="no-padding">
            <b-calendar
              v-model="value2"
              @context="onContextTo"
              locale="en-US"
              style="border: 2px solid #3d99f5;"
            ></b-calendar>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="calendar">
      <div>
        <b>From:</b>
        {{contextFrom}}
        <i
          class="mdi mdi-arrow-right-bold-outline"
          style="padding: 0 10px 0 10px;font-size:x-large;"
        ></i>
        <b>To:</b>
        {{contextTo}}
      </div>
    </div>
    <b-button href="/hotels" variant="primary" class="btn-hotels">To hotels</b-button>
    <div class="cities-title">The most popular cities</div>
    <div
      style="display:flex; margin-top: 30px; justify-content:center;padding-bottom:50px;font-family:cursive;"
    >
      <b-card
        title="Chernigiv"
        img-src="../../public/images/che.jpg"
        img-alt="Image"
        img-top
        img-height="212px"
        tag="article"
        style="max-width: 20rem; margin-right:30px;cursor:pointer"
        class="mb-2 card-image-top"
      >
        <b-card-text>Beautiful city with lots of ancient architecture and places for entertainment. You have passibility to...</b-card-text>
      </b-card>
      <b-card
        title="Kyiv"
        img-src="../../public/images/kyiv.jpg"
        img-alt="Image"
        img-top
        img-height="212px"
        tag="article"
        style="max-width: 20rem; margin-right:30px;cursor:pointer"
        class="mb-2 card-image-top"
      >
        <b-card-text>Beautiful city with lots of ancient architecture and places for entertainment. You have passibility to...</b-card-text>
      </b-card>
      <b-card
        title="Kharkiv"
        img-src="../../public/images/kharkiv.jpg"
        img-alt="Image"
        img-top
        img-height="212px"
        tag="article"
        style="max-width: 20rem;  margin-right:30px;cursor:pointer"
        class="mb-2 card-image-top"
      >
        <b-card-text>Beautiful city with lots of ancient architecture and places for entertainment. You have passibility to...</b-card-text>
      </b-card>
      <b-card
        title="Lviv"
        img-src="../../public/images/lviv.jpg"
        img-alt="Image"
        img-top
        img-height="212px"
        tag="article"
        style="max-width: 20rem; margin-right:30px;cursor:pointer"
        class="mb-2 card-image-top"
      >
        <b-card-text>Beautiful city with lots of ancient architecture and places for entertainment. You have passibility to...</b-card-text>
      </b-card>
    </div>
    <footer class="footer">
      &copy;Copyright 2020 - All rights reserved. Zaiets Booking
    </footer>    
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "./NavBar";
export default Vue.extend({
  data() {
    return {
      value1: "",
      value2: "",
      contextFrom: null,
      contextTo: null,
      collapsed: true
    };
  },
  components: {
    NavBar
  },
  methods: {
    onContextFrom(ctx) {
      this.contextFrom = ctx.selectedFormatted;
    },
    onContextTo(ctx1) {
      this.contextTo = ctx1.selectedFormatted;
    }
  }
});
</script>

<style>
.banner {
  width: 100%;
  height: 50px;
  background-color: #fff8e1;
  padding-left: 100px;
  align-items: center;
  display: flex;
  font-weight: bold;
  font-family: cursive;
  justify-content: space-between;
}
.banner-expanded {
  width: 100%;
  height: 100px;
  background-color: #fff8e1;
  padding-left: 100px;
  align-items: center;
  display: flex;
  font-weight: bold;
  font-family: cursive;
  justify-content: space-between;
}
.info-button {
  padding-right: 10px;
  font-size: x-large;
}
.info-eye {
  padding-right: 50px;
  cursor: pointer;
  font-size: x-large;
}
.no-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.calendar {
  border: 2px solid #3d99f5;
  background-color: white;
  width: 25%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 34%;
  margin-top: 20px;
  position: relative;
}
.calendar-title {
  position: relative;
  justify-content: center;
  display: flex;
  margin-top: 25px;
  font-family: cursive;
  color: black;
  font-weight: bold;
  font-size: 30px;
}
.cities-title {
  position: relative;
  display: flex;
  margin-top: 25px;
  font-family: cursive;
  color: black;
  font-weight: bold;
  font-size: 30px;
  padding-left: 13%;
}
.btn-hotels {
  position: relative;
  left: 60%;
  top: -51px;
}

.footer {
    position: absolute;
    width: 100%;
    white-space: nowrap;
    line-height: 60px; /* Vertically center the text there */
    background-color: #3d99f5;
    color: white;
    text-align:center;
}

</style>