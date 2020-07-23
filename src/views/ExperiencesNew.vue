
<template>
  <div class="experiences-new">

    <form v-on:submit.prevent="createExperience()">
      <h1>Add experience</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>start date:</label>
        <input type="text" class="form-control" v-model="experience.start_date">
      </div>
       <div class="form-group">
        <label>end date:</label>
        <input type="text" class="form-control" v-model="experience.end_date">
      </div>
       <div class="form-group">
        <label>job title:</label>
        <input type="text" class="form-control" v-model="experience.job_title">
      </div>
       <div class="form-group">
        <label>company name:</label>
        <input type="text" class="form-control" v-model="experience.company_name">
      </div>
       <div class="form-group">
        <label>details:</label>
        <input type="text" class="form-control" v-model="experience.details">
      </div>
      <input type="submit" class="btn btn-primary" value="create">
    </form>

  </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      experience: {}
    };
  },
  methods: {
    createExperience: function() {
      var params = {
        start_date: this.experience.start_date,
        end_date: this.experience.end_date,
        job_title: this.experience.job_title,
        company_name: this.experience.company_name,
        details: this.experience.details
      };
      axios
        .post("/api/experiences", params)
        .then(response => {
          this.$router.push(`/resumes`);
          console.log(response.data);
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    }
  }
};
</script>
