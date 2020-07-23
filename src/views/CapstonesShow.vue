<template>
  <div class="capstones-show">
    <h2>{{student.first_name}} {{student.last_name}}</h2>
    <div v-for="capstone in capstones">
      <h4>{{capstone.name}}</h4>
      <p>{{capstone.description}}</p>
      <p><img :src="capstone.screenshot_url"></p>
      <p><a :href="capstone.description">View Capstone</a> 
      // <router-link :to="`/capstones/${capstone.id}/edit`">Edit Capstone Info</router-link>
       // <router-link :to="`/capstones/$capstone.id}`">Delete Capstone</router-link> </p>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
      capstones: [],
      errors: [],
      student_id: localStorage.getItem("student_id"),
    };
  },
  created: function () {
    // Need to get ${current_student.id} logic to work (currently says "[Vue warn]: Error in created hook: "ReferenceError: current_student is not defined")
    axios.get(`/api/students/${this.student_id}`).then((response) => {
      this.student = response.data;
      this.capstones = response.data.capstones;
    });
  },
  methods: {
    // destroyRecipe: function () {
    //   if (confirm("Are you sure you want to delete this capstone?")) {
    //     axios.delete(`/api/capstones/${this.capstone.id}`).then((response) => {
    //       console.log("Successfully destroyed", response.data);
    //       this.$router.push("/capstones");
    //     });
    //   }
    // },
  },
};
</script>