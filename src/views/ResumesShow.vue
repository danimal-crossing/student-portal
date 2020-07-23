<template>
  <div class="resumes-show">
    <div>
      <h3>Personal Info</h3>
      <p><img :src="student.photo_url" :alt="student.first_name"/></p>
      <p>First Name: {{ student.first_name }}</p>
      <p>Last Name: {{ student.last_name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Phone: {{ student.phone_numer }}</p>
      <p>Bio: {{ student.bio }}</p>
      <p>LinkedIn: {{ student.linkedin_url }}</p>
      <p>Twitter: {{ student.twitter_handle }}</p>
      <p>Personal Website: {{ student.website_url }}</p>
      <p>GitHub: {{ student.github_url }}</p>

      <h2>Experiences</h2>
      <div v-for="experience in student.experiences">
        <h4>Employer: {{ experience.company_name }}</h4>
        <p>{{ experience.job_title }}</p>
        <p>Start Date: {{ experience.start_date }}</p>
        <p>End Date: {{ experience.end_date }}</p>
        <p>Details: {{ experience.details }}</p>
      </div>

      <h2>Skills</h2>
      <div v-for="skill in student.skills">
        <p>{{ skill.name }}</p>
      </div>

      <h2>Education</h2>
      <div v-for="education in educations">
        <p>College/University: {{ education.university_name }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Start Date: {{ education.start_date }}</p>
        <p>End Date: {{ education.end_date }}</p>
        <p>Details: {{ education.details }}</p>
      </div>
      <router-link :to="`/resumes/${this.student.id}/edit`"> Edit  </router-link>
    </div>
  </div>
</template>

<style>
img {
  width: 200px;
}
</style>

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
    };
  },
  created: function () {
    axios.get(`/api/students/${this.student_id}`).then((response) => {
      this.student = response.data;
      this.skills = response.data.skills;
      this.experiences = response.data.experiences;
      this.educations = response.data.educations;
      console.log(response.data);
    });
  },
  methods: {},
};
</script>