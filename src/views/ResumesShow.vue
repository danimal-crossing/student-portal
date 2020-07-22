<template>
  <div class="resumes-show">
    <div>
      <h3>Personal Info:</h3>
      <p>First Name: {{ student.first_name }}</p>
      <p>Last Name: {{ student.last_name }}</p>
      <p>Email: {{ student.email }}</p>
      <p>Phone: {{ student.phone_numer }}</p>
      <p>Bio: {{ student.bio }}</p>
      <p>LinkedIn: {{ student.linkedin_url }}</p>
      <p>Twitter: {{ student.twitter }}</p>
      <p>Personal Website: {{ student.website_url }}</p>
      <p>GitHub: {{ student.github_url }}</p>
      <p>Photo: {{ student.photo_url }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
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
          "https://vignette.wikia.nocookie.net/yugioh/images/c/c0/ExodiatheForbiddenOne-TF04-JP-VG.jpg/revision/latest?cb=20120420185052"
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