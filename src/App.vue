<template>
  <div id="app">    
    <div>      
        <!-- <router-link :title="loginMessage" style="padding: 0 0 0 30px;color:white" to="/login">LogIn</router-link>
        <router-link :title="hotelsMessage" style="padding: 0 0 0 30px;color:white" to="/hotels"> Hotels</router-link>
        <router-link :title="hotelsAddMessage" style="padding: 0 0 0 30px;color:white" to="/hotels/add"> Add Hotels</router-link> -->
        <!-- <router-link :title="productsDeleteMessage" style="padding: 0 0 0 30px;color:white" to="/delete"> Delete Product</router-link>
        <router-link :title="productsUpdateMessage" style="padding: 0 0 0 30px;color:white" to="/update">Update Products</router-link>  -->      
    </div>
    <router-view></router-view>   
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      hotelsMessage:'Available hotels',
      loginMessage:'Log In',
      hotelsAddMessage:'Add hotels',
      // productsDeleteMessage:'Delete products',
      // productsUpdateMessage:'Update products',
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

.container{
  width: 70px;
  height: 30px;
  background-color: transparent;
  border: 1px solid gray; 
  border-left: none;
  position: absolute;
  top: 20px;
  right:-50px;  
  display: flex;
  justify-content: center;
  align-items: center;  
}
.arrow-right{
  width: 0px;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid gray;
  position: absolute;
  right: -16px;  
}

</style>
