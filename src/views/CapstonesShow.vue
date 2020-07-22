<template>
  <div class="capstones-show">
    <h2>{{student.first_name}} {{student.last_name}}</h2>
    <div v-for="capstone in capstones">
      <h4>{{capstone.name}}</h4>
      <p>{{capstone.description}}</p>
      <p><a :href="capstone.description">Link to capstone</a></p>
      <p><img :src="capstone.screenshot_url"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {},
      capstones: [],
      errors: []
    };
  },
  created: function() {
    // Need to get ${current_student.id} logic to work (currently says "[Vue warn]: Error in created hook: "ReferenceError: current_student is not defined")
    axios.get(`/api/students/1`).then(response => {
      // console.log("students show", response);
      this.student = response.data;
      this.capstones = response.data.capstones;
    });
  },
  methods: {}
};
</script>
