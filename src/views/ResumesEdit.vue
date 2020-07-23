
<template>
  <div class="resumes-edit">
    <!-- edit student info -->
    <form v-on:submit.prevent="editStudent()">
      <h1>Update Student</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>first name:</label>
        <input type="text" class="form-control" v-model="student.first_name">
      </div>
      <div class="form-group">
        <label>last name:</label>
        <input type="text" class="form-control" v-model="student.last_name">
      </div>
      <div class="form-group">
        <label> email:</label>
        <input type="text" class="form-control" v-model="student.email">
      </div>
      <div class="form-group">
        <label> Phone:</label>
        <input type="text" class="form-control" v-model="student.phone_number">
      </div>
       <div class="form-group">
        <label> Bio:</label>
        <input type="text" class="form-control" v-model="student.bio">
      </div>
      <div class="form-group">
        <label> LinkedIn:</label>
        <input type="text" class="form-control" v-model="student.linkedin_url">
      </div>
      <div class="form-group">
        <label> twitter:</label>
        <input type="text" class="form-control" v-model="student.twitter_handle">
      </div>
      <div class="form-group">
        <label> Personal website:</label>
        <input type="text" class="form-control" v-model="student.website_url">
      </div>
       <div class="form-group">
        <label> GitHub:</label>
        <input type="text" class="form-control" v-model="student.github_url">
      </div>
       <div class="form-group">
        <label>  Photo:</label>
        <input type="text" class="form-control" v-model="student.photo_url">
      </div>
      <input type="submit" class="btn btn-primary" value="update">
    </form>

    <!-- edit experiences - backend API does not have this controller -->
    <!-- <form v-on:submit.prevent="editExperiences()">
      <h1>Update Experiences</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div v-for="experience in student.experiences">
        <div class="form-group">
          <label>Employer:</label>
          <input type="text" class="form-control" v-model="experience.company_name">
        </div>
        <div class="form-group">
          <label>Job Title: </label>
          <input type="text" class="form-control" v-model="experience.job_title">
        </div>
        <div class="form-group">
          <label>Start Date: </label>
          <input type="text" class="form-control" v-model="experience.start_date">
        </div>
        <div class="form-group">
          <label>End Date: </label>
          <input type="text" class="form-control" v-model="experience.end_date">
        </div>
        <div class="form-group">
          <label>Details: </label>
          <input type="text" class="form-control" v-model="experience.details">
        </div>
      </div>
      
      <input type="submit" class="btn btn-primary" value="update">
    </form> -->

    <!-- edit skills -->
    <form v-on:submit.prevent="editSkills()">
      <h1>Update Skills</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group" v-for="skill in skills">
        <label>Name: </label>
        <input type="text" class="form-control" v-model="skill.name">
      </div>
      <label>Add a skill: </label>
      <input type="text" class="form-control" v-model="this.skill.name">
      <input type="submit" class="btn btn-primary" value="update">
    </form>

    <!-- edit education -->
      <h1>Update Educations</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul> 
      <div v-for="education in educations">
        <form v-on:submit.prevent="editEducation(education)">
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
            <input type="text" class="form-control" v-model="education.start_date">
          </div>
          <div class="form-group">
            <label>End Date: </label>
            <input type="text" class="form-control" v-model="education.end_date">
          </div>
          <div class="form-group">
            <label>Details: </label>
            <input type="text" class="form-control" v-model="education.details">
          </div>
          <input type="submit" class="btn btn-primary" value="update">
        </form>
      </div>

    </div>
</template>


<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      student: {},
      skills: [],
      skill: "",
      experiences: [],
      educations: [],
      student_id: localStorage.getItem("student_id"),
      educationId: "",
    };
  },
  created: function () {
    axios.get(`/api/students/${this.student_id}`).then((response) => {
      this.student = response.data;
      this.skills = response.data.skills;
      this.experiences = response.data.experiences;
      this.educations = response.data.educations;
      console.log(this.student);
    });
  },
  methods: {
    editStudent: function () {
      var params = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        email: this.student.email,
        phone_number: this.student.phone_number,
        bio: this.student.bio,
        linkedin_url: this.student.linkedin_url,
        twitter_handle: this.student.twitter_handle,
        website_url: this.student.website_url,
        resume_url: this.student.resume_url,
        github_url: this.student.github_url,
        photo_url: this.student.photo_url,
      };
      axios
        .patch(`/api/students/1`, params)
        .then((response) => {
          this.$router.push(`/resumes/1/edit`);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    // !!!! backend API does not have experience edit currently - might need a "forEach" here
    // editExperience: function () {
    //   var params = {
    //     company_name: this.experience.first_name,
    //     job_title: this.experience.job_title,
    //     start_date: this.experience.start_date,
    //     end_date: this.experience.end_date,
    //     details: this.experience.details,
    //   };
    //   axios
    //     .patch(`/api/experiences/1`, params)
    //     .then((response) => {
    //       this.$router.push(`/expriences/1`);
    //     })
    //     .catch((error) => {
    //       this.error = error.response.data.errors;
    //     });
    // },

    // 7/23: broken currently due to no API route for skills -JCO
    // editSkills: function () {
    //   var params = [];
    //   this.skills.array.forEach((skill) => {
    //     params.push(skill);
    //   });
    //   params.push(this.skill);
    //   axios
    //     .patch(`/api/skills/1`, params)
    //     .then((response) => {
    //       this.$router.push(`/resumes/${this.student.id}/edit`);
    //     })
    //     .catch((error) => {
    //       this.error = error.response.data.errors;
    //     });
    // },
    getEducationId: function (id) {
      this.educationId = id;
    },
    editEducation: function (education) {
      var params = {
        university_name: education.university_name,
        degree: education.degree,
        start_date: education.start_date,
        end_date: education.end_date,
        details: education.details,
      };
      axios
        .patch(`/api/educations/${education.id}`, params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
