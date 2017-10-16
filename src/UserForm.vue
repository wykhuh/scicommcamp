<template>
    <div class="container">
      
      <h1>Add Your Profile</h1>

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
          <label for="help_with">I need help with: </label>
          <textarea v-model="help_with" class="form-control" id="help_with" rows="5"></textarea>
        </div>


        <div class="form-group">
          <label for="help_for">I'm can offer help with:</label>
          <textarea v-model="help_for" class="form-control" id="help_for" rows="5"></textarea>
        </div>

        <input type="submit">
      </form>
    </div>
</template>

<script>

export default {
  name: 'userForm',
  data() {
    return {
      name: '',
      location: '',
      email: '',
      twitter: '',
      instagram: '',
      bio: '',
      help_with: '',
      help_for: ''
    }
  },
  methods: {
    saveData() {
      var newUser = firebase.database().ref('users').push()
      newUser.set({
        name: this.name,
        location: this.location,
        email: this.email,
        twitter: this.twitter,
        instagram: this.instagram,
        bio: this.bio,
        help_with: this.help_with,
        help_for: this.help_for
      }, this.clearForm)
    },

    clearForm() {
      this.name = ''
      this.location = ''
      this.email = ''
      this.twitter = ''
      this.instagram = ''
      this.bio = ''
      this.help_with = ''
      this.help_for = ''
    },
    
    handleSubmit(event) {
      event.preventDefault();

      this.saveData();


    }
  }
}

</script>
