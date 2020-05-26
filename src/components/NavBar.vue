<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#3D99F5">
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-navbar-brand href="/hotels">Hotels</b-navbar-brand>
      <b-navbar-brand href="/info">Info</b-navbar-brand>
      <div class="name">
        <img src="../../public/images/logo.png" alt="" style="width:50px;height:50px">
        Zaiets Booking
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>      
      <b-collapse id="nav-collapse" is-nav></b-collapse>
       <div>
           <div class="user">
               {{user}}
           </div>
           
            <b-button-group>
                <b-button variant="outline-primary" style="color: white !important; background-color: #007bff !important;"  @click="profile">
                    <i class="mdi mdi-account" style="width:30px;"></i> Account
                </b-button>
                <b-button variant="outline-primary" style="color: white !important; background-color: #007bff !important;" @click="logOut">
                    <i class="mdi mdi-logout" style="width:30px;"></i> Log Out
                </b-button>      
            </b-button-group>
        </div>
    </b-navbar>    
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
     data(){
       return{
         user: localStorage.getItem("userEmail"),
       }
         
     },
     methods:{
         logOut(){
            this.$router.push("/login");
         },
         profile(){
            this.$router.push("/profile");
         }
     }
});
</script>

<style>
.user{
    color: white;
    font-size: 22px;
    display: inline-block;
    margin-right: 10px;
}
.name {
  font-weight: bold;
  font-size: 40px;
  font-family: cursive;
  position: relative;
  left: 33%;
  color:white
}
</style>