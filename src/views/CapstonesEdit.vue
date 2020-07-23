<template>
  <div class="capstones-edit">

    <form v-on:submit.prevent="editCapstone()">
      <h1>Edit Capstone</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="capstone.name">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="capstone.description">
      </div>
      <div class="form-group">
        <label>Capstone Url:</label>
        <input type="text" class="form-control" v-model="capstone.url">
      </div>
      <div class="form-group">
        <label>Screenshot Url:</label>
        <input type="text" class="form-control" v-model="capstone.screenshot_url">
      </div>
      <input type="submit" class="btn btn-primary" value="Update">
    </form>
  </div>
  <router-link 
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      capstone: {},

      errors: [],
    };
  },
  created: function () {
    axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
      this.capstone = response.data;
      console.log(this.capstone);
    });
  },
  methods: {
    editCapstone: function () {
      var params = {
        name: this.capstone.name,
        description: this.capstone.description,
        url: this.capstone.url,
        screenshot_url: this.capstone.screenshot_url,
      };
      axios
        .patch(`api/capstones/${this.capstone.id}`, params)
        .then((response) => {
          this.$router.push(`/capstones/${response.data.id}`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>