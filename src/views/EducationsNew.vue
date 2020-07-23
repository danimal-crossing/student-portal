
<template>
  <div class="education-create">

      <h1>New Education</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul> 
      <form v-on:submit.prevent="newEducation()">
        <div class="form-group">
          <label>College/University:</label>
          <input type="text" class="form-control" v-model="education.university_name">
        </div>
        <div class="form-group">
          <label>Degree: </label>
          <input type="text" class="form-control" v-model="education.degree">
        </div>
        <div class="form-group">
          <label>Start Date: </label>
          <input type="date" class="form-control" v-model="education.start_date">
        </div>
        <div class="form-group">
          <label>End Date: </label>
          <input type="date" class="form-control" v-model="education.end_date">
        </div>
        <div class="form-group">
          <label>Details: </label>
          <input type="text" class="form-control" v-model="education.details">
        </div>
        <input type="submit" class="btn btn-primary" value="Create">
      </form>

    </div>
</template>


<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      student: {},
      education: {},
      student_id: localStorage.getItem("student_id"),
    };
  },
  created: function () {},
  methods: {
    newEducation: function () {
      var params = {
        university_name: this.education.university_name,
        degree: this.education.degree,
        start_date: this.education.start_date,
        end_date: this.education.end_date,
        details: this.education.details,
      };
      axios
        .post(`/api/educations`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/resume");
        })
        .catch((error) => {
          this.error = error.response.data.errors;
          console.log(this.error);
        });
    },
  },
};
</script>
