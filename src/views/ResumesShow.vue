<template>
  <div class="resumes-show">
    <div>
      <h3>Personal Info</h3>
      <p>First Name: {{ student.first_name }}</p>
      <p>Last Name: {{ student.last_name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Phone: {{ student.phone_numer }}</p>
      <p>Bio: {{ student.bio }}</p>
      <p>LinkedIn: {{ student.linkedin_url }}</p>
      <p>Twitter: {{ student.twitter_handle }}</p>
      <p>Personal Website: {{ student.website_url }}</p>
      <p>GitHub: {{ student.github_url }}</p>
      <p>Photo: {{ student.photo_url }}</p>

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
      <div v-for="education in student.educations">
        <p>College/University: {{ education.university_name }}</p>
        <p>Degree: {{ education.degree }}</p>
        <p>Start Date: {{ education.start_date }}</p>
        <p>End Date: {{ education.end_date }}</p>
        <p>Details: {{ education.details }}</p>
      </div>
      <router-link :to="`/resumes/1/edit`"> Edit  </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
        id: 1,
        first_name: "Phil",
        last_name: "Pondo",
        email: "phil@gmail.com",
        password_digest: "jhgkjh13g4k1h34gafadf",
        phone_number: "200-111-0101",
        bio: "There once was a cat in a hat",
        linkedin_url: "www.linkedin.com/in/phillippondo",
        twitter_handle: "@philpondo",
        website_url: "www.philpondo.com",
        resume_url: "wwww.philpondoresume.com",
        github_url: "www.github.com/philpondo",
        photo_url:
          "https://vignette.wikia.nocookie.net/yugioh/images/c/c0/ExodiatheForbiddenOne-TF04-JP-VG.jpg/revision/latest?cb=20120420185052",
        educations: [
          {
            start_date: "2016-09-23",
            end_date: "2020-05-14",
            degree: "something",
            university_name: "Blaaahh U",
            details: "Whaddya wanna know?!"
          },
          {
            start_date: "2016-09-23",
            end_date: "2020-05-14",
            degree: "something",
            university_name: "Blaaahh U",
            details: "Whaddya wanna know?!"
          }
        ],
        skills: [
          {
            name: "Twerking"
          },
          {
            name: "Fish gutting"
          },
          {
            name: "Underwater basket weaving"
          }
        ],
        experiences: [
          {
            start_date: "2018-10-23",
            end_date: "2019-05-14",
            job_title: "professional couch surfer",
            company_name: "La-Z-Boiiii",
            details: "Hated it."
          },
          {
            start_date: "2019-06-23",
            end_date: "2020-07-14",
            job_title: "moved to ma's basement",
            company_name: "Home Depot",
            details:
              "Honestly still enjoying it.Haven't gained many skills, though."
          }
        ]
      }
    };
  },
  // created: function() {
  //   axios.get(`/api/students/1}`).then(response => {
  //     this.student = response.data;
  //     console.log(response.data);
  //   });
  // },
  methods: {}
};
</script>