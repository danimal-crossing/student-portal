<template>
  <div class="capstones-show">
    <h1>Your Capstone:</h1>
    <h2>Plant Swapp</h2>
    <h2>A place to share plants with other plant lovers!</h2>
   
    <h2>{{student.capstone.name}}</h2>
    <h2>{{student.capstone.description}}</h2>
    <h2>{{student.capstone.url}}</h2>
    <img v-bind:src="student.capstone.screenshot_url" v-bind:all="student.capstone.name" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      // student: {},
      student: {
        capstone: {
          description: "Plant sharing for everyone!",
          url: "http://plants.com",
          name: "Plant Swapp",
          screenshot_url: "http://screenshot.com",
          // student_id: "",
        },
      },
      errors: [],
    };
  },
  // created: function () {
  //   axios.get(`/api/capstones/${this.$route.params.id}`).then((response) => {
  //     // console.log("students show", response);
  //     this.student.capstone = response.data;
  //   });
  // },
  methods: {},
};
</script>