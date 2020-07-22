
<template>
  <div class="resumes-edit">

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
<!-- 
     <form v-on:submit.prevent="editExperiences()">
      <h1>Update Experiences</h1>
       <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Employer:</label>
        <input type="text" class="form-control" v-model="experiences.company_name">
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
        <input type="text" class="form-control" v-model="student.phone">
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


     <form v-on:submit.prevent="editSkills()">
      <h1>Update Skills</h1>
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
        <input type="text" class="form-control" v-model="student.phone">
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


     <form v-on:submit.prevent="editEducation()">
      <h1>Update Education</h1>
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
        <input type="text" class="form-control" v-model="student.phone">
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
    </form> -->

  </div>
</template>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      student: {
        id: 1,
        first_name: "Phil",
        last_name: "Pondo",
        email: "phil@gmail.com",
        password_digest: "jhgkjh13g4k1h34gafadf",
        phone_number: "2001110101",
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
  created: function() {
    // axios.get(`/api/movies/${this.$route.params.id}`).then(response => {
    //   this.movie = response.data;
    //   console.log(this.movie);
    // });
  },
  methods: {
    editStudent: function() {
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
        photo_url: this.student.photo_url
      };
      axios
        .patch(`/api/resumes/1`, params)
        .then(response => {
          this.$router.push(`/resumes/1`);
        })
        .catch(error => {
          this.error = error.response.data.errors;
        });
    }
  }
};
</script>
