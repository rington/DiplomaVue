<template>
  <div>
    <NavBar user="testuser@cjm.com" />
    <div class="updateContent" align="center">
      <div>
        <h1>Update products</h1>
        <p>Choose product id</p>
        <input type="number" v-model="id" placeholder="Enter product id" min="0" />
        <p>Title</p>
        <input type="text" v-model="title" placeholder="Enter new title" />
        <p>Price</p>
        <input type="number" v-model="price" placeholder="Enter new price" min="0" />
        <p>Quantity</p>
        <input type="number" v-model="quantity" placeholder="Enter new quantity" min="0" />
      </div>
      <br />
      <button class="button updateButton" @click="updateProduct">Update product</button>
      <p>
        <button class="button" @click="goHome">View all products</button>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import NavBar from "../NavBar";

export default Vue.extend({
  components: {
    NavBar
  },
  data() {
    return {
      id: undefined,
      title: "",
      price: undefined,
      quantity: undefined
    };
  },
  methods: {
    updateProduct() {
      let id = this.id;
      let title = this.title;
      let price = this.price;
      let quantity = this.quantity;
      if (id != 0) {
        axios
          .put("https://localhost:44357/api/products/" + id, {
            id,
            title,
            price,
            quantity
          })
          .then(function(response) {
            console.log(response);
            alert("Success!");
          })
          .catch(function(error) {
            console.log(error);
            alert("Error!");
          });
      } else alert("Error!");
    },
    goHome() {
      this.$router.push("/");
    }
  }
});
</script>

<style scopeded>
.button {
  border-radius: 10px;
}
.updateContent {
  background-color: #03fc94;
}
.updateButton {
  background-color: red;
  padding: 15px 15px 15px 15px;
  border: 2px solid purple;
  border-radius: 10px;
}
</style>