<template>
  <div>
    <app-header></app-header>

    <div class="container">
      
      <h1>Add Your Profile</h1>

      <div class="alert alert-danger" v-for="error in errors">
        {{error}}
      </div>

      <form id="myform" @submit="handleSubmit">
        <div class="form-group">
          <label for="name">Name (required)</label>
          <input requried type="text" v-model="name" class="form-control" id="name">
        </div>

        <div class="form-group">
          <label for="name">Email</label>
          <input type="text" v-model="email" class="form-control" id="email">
        </div>

        <div class="form-group">
          <label for="name">Location</label>
          <input type="text" v-model="location" class="form-control" id="location">
        </div>

        <div class="form-group">
          <label for="name">Twitter</label>
          <input type="text" v-model="twitter" class="form-control" id="twitter">
        </div>

        <div class="form-group">
          <label for="name">Instagram</label>
          <input type="text" v-model="instagram" class="form-control" id="instagram">
        </div>


        <div class="form-group">
          <label for="bio">About me</label>
          <textarea v-model="bio" class="form-control" id="bio" rows="5"></textarea>
        </div>

        <p>
          If are interested in collaborating with other Sci Comm Campers, fill out the 
          these two questions.
        </p>


        <div class="form-group">
          <label for="need_help">I need help with: </label>
          <textarea v-model="need_help" class="form-control" id="need_help" rows="5"></textarea>
        </div>


        <div class="form-group">
          <label for="offer_help">I'm can offer help with:</label>
          <textarea v-model="offer_help" class="form-control" id="offer_help" rows="5"></textarea>
        </div>

        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    'app-header': Header
  },
  name: 'userForm',
  data() {
    return {
      name: null,
      location: null,
      email: null,
      twitter: null,
      instagram: null,
      bio: null,
      need_help: null,
      offer_help: null,
      errors: []
    }
  },
  methods: {
    saveData() {      
      var newUser = firebase.database().ref('users').push();
      newUser.set({
        name: this.trim(this.name),
        location: this.trim(this.location),
        email: this.trim(this.email),
        twitter: this.trim(this.twitter),
        instagram: this.trim(this.instagram),
        bio: this.trim(this.bio),
        need_help: this.trim(this.need_help),
        offer_help: this.trim(this.offer_help)
      }, this.clearForm)
    },

    trim(field) {
      if(typeof field === 'string') {
        return field.trim()
      } else {
        return field
      }
    },

    clearForm() {
      this.name = null;
      this.location = null;
      this.email = null;
      this.twitter = null;
      this.instagram = null;
      this.bio = null;
      this.need_help = null;
      this.offer_help = null;
    },
    
    handleSubmit(event) {
      event.preventDefault();
      this.errors = [];
  

      if (!this.name || !this.name.trim()) {
        this.errors = ['Name is required']
      } 

      if(this.errors.length == 0) {
        this.saveData();
        this.$router.push('/users')
      }
    }
  },
}

</script>
