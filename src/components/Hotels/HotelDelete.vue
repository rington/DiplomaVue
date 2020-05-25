<template >
  <div>
    <NavBar user="testuser@cjm.com"/>
    <div align="center">
      <div>
        <h1>Delete products</h1>
        <input type="number" v-model="id" placeholder="Input product id" min="0" />
      </div>
      <br />
      <button class="button deleteButton" @click="deleteProduct">Delete product</button>
      <p>
        <button @click="goHome">View all products</button>
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
      id: undefined
    };
  },
  methods: {
    deleteProduct() {
      let id = this.id;
      if (id != 0) {
        axios
          .delete("https://localhost:44357/api/products/" + id, { id })
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
      this.$router.push("/");
    }
  }
});
</script>

<style>
.button {
  border-radius: 10px;
}
.deleteButton {
  background-color: red;
  padding: 15px 15px 15px 15px;
  border: 2px solid purple;
  border-radius: 10px;
}
</style>