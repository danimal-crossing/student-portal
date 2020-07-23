
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
    <h1>Update Experiences</h1>
    <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>
    <div v-for="experience in experiences">
      <form v-on:submit.prevent="editExperiences(experience)">
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
        <input type="submit" class="btn btn-primary" value="update">
      </form>
    </div>

    <!-- edit skills -->
    <h1>Update Skills</h1>
      <ul>
      <li class="text-danger" v-for="error in errors">{{ error }}</li>
    </ul>
    <div class="form-group" v-for="skill in skills">
      <form v-on:submit.prevent="editSkills(skill)">
        <label>Name: </label>
        <input type="text" class="form-control" v-model="skill.name">
        <input type="submit" class="btn btn-primary" value="update">
      </form>
    </div>
    <form v-on:submit.prevent="newSkill()">
        <label>Add a skill: </label>
        <input type="text" class="form-control" v-model="newSkillName">
        <input type="submit" class="btn btn-primary" value="Add Skill">
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
          <input type="submit" class="btn btn-primary" value="update">
        </form>
      </div>
      <router-link to="/educations/new">Create New Education</router-link>

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
      newSkillName: "",
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
        .patch(`/api/students/${this.student_id}`, params)
        .then((response) => {
          console.log("Updated Info:", response.data);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
    editExperience: function (experience) {
      var params = {
        company_name: experience.first_name,
        job_title: experience.job_title,
        start_date: experience.start_date,
        end_date: experience.end_date,
        details: experience.details,
      };
      axios
        .patch(`/api/experiences/${experience.id}`, params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },

    editSkills: function (skill) {
      var params = {
        name: skill,
      };
      axios
        .patch(`/api/skills/${skill.id}`, params)
        .then((response) => {
          console.log("Updated Info:", response.data);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
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
    newSkill: function () {
      var params = {
        name: this.newSkillName,
      };
      axios
        .post(`/api/skills`, params)
        .then((response) => {
          console.log(response.data);
          this.skills.push(response.data);
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },
  },
};
</script>
