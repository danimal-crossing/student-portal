<template>
  <div class="capstones-show">
    <h1>Your Capstone:</h1>
    <h2>Plant Swapp</h2>
    <h2>A place to share plants with other plant lovers!</h2>
    <img v-bind:src="capstone.screenshot_url" v-bind:all="capstone.name" />
    <h2>{{capstone.name}}</h2>
    <h2>{{capstone.description}}</h2>
    <h2>{{capstone.url}}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      description: "Plant Swapp App",
      url: "http:capstone.com",
      name: "Plant Swapp",
      screenshot_url: "screenshot",
      // student_id: "",
      errors: [],
    };
  },
  created: function () {
    axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
      console.log("capstones show", response);
      this.capstone = response.data;
    });
  },
  methods: {},
};
</script>