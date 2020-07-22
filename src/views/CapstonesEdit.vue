<template>
  <div class="capstones-edit">
    <h1>Edit Your Capstone:</h1>

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
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {
        capstone: {},
      },
      errors: [],
    };
  },
  // created: function () {
  //   axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
  //     this.student.capstone = response.data;
  //    console.log(this.student.capstone);
  //   });
  // },
  methods: {
    editCapstone: function () {
      var params = {
        name: this.student.capstone.name,
        description: this.student.capstone.description,
        url: this.student.capstone.url,
        screenshot_url: this.student.capstone.screenshot_url,
      };
      axios
        .patch(`api/capstones/${this.capstone.id}`, params)
        .then((response) => {
          this.$router.push(`/capstones/${response.data.id}`);
        });
    },
  },
};
</script>