<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#3D99F5">
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-navbar-brand href="/hotels">Hotels</b-navbar-brand>
      <b-navbar-brand href="/info">Info</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>       

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right style="margin-right:25px">
            <template v-slot:button-content>
              <em v-if="user!= ''" style="font-weight:bold;font-size:20px">{{user}}</em>
              <em v-else style="font-weight:bold;font-size:20px"> User</em>
            </template>
            <b-dropdown-item href="/profile">Profile</b-dropdown-item>            
          </b-nav-item-dropdown>
          <b-button style="background-color:#0396F7 !important" class="mb-2" @click="logOut">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
            </b-button>
        </b-navbar-nav> -->       
      </b-collapse>
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
     props:{
         user: String,
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
</style>