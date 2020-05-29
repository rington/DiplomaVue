<template>
  <div style="background-color:#D3DBE1;min-height:100vh">
      <div> 
        <NavBar />
        <div >
          <div class="title-rooms">
            <h1>Rooms</h1>
          </div>
          <div
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
      >
        <b-card-text>A room comprises of two or more bedroom, a living room and a dining area. Belong to the luxury category. Demanded by tourists, especially families. </b-card-text>
        <div class="room-card">
          <b-button squared variant="primary" >Reserve</b-button>
          <div>
            Price: $119.9
          </div>
        </div>
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
      >
        <b-card-text>Standard single rooms with minimum comfort. Has double beb facility.There is a TV, telephone, refrigerator, minimal furniture, a bathroom.</b-card-text>
        <div class="room-card">
          <b-button squared variant="primary" >Reserve</b-button>
          <div>
            Price: $149.2
          </div>
        </div>
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
      >
        <b-card-text>Superior rooms which mainly bigger than others. Have all necessary appliances with excellent quality. The deluxe rooms have all the necessary appliances.</b-card-text>
        <div class="room-card">
          <b-button squared variant="primary" >Reserve</b-button>
          <div>
            Price: $80.5
          </div>
        </div>
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
      >
        <b-card-text>A room which is been spread on two floars connected by an internal staircase. Have all necessary appliances with excellent quality.</b-card-text>
        <div class="room-card">
          <b-button squared variant="primary" >Reserve</b-button>
          <div>
            Price: $220
          </div>
        </div>
        
      </b-card>
    </div>
        </div>      
      </div>      
      <Footer style="bottom:0"/>
  </div>
</template>

<script>
import Vue from "vue";
// import axios from "axios";
// import Loader from "../Loader";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default Vue.extend({
    components: {
    // Loader,
    NavBar,
    Footer
  },
})
</script>

<style>
.title-rooms {
  text-align: center;
  margin: 50px auto 70px auto;
  font-weight: bold;
  font-family:cursive
}
.room-card{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-weight:bold;
  font-size:20px;
}
</style>