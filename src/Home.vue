<template>
  <div class="container">
    <h1>Login</h1>

    <div class="alert alert-danger" v-for="error in errors">
      {{error}}
    </div>

    <form id="myform" @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Email</label>
        <input requried type="email" v-model="email" class="form-control" id="name">
      </div>

      <div class="form-group">
        <label for="name">Password</label>
        <input requried type="password" v-model="password" class="form-control" id="name">
      </div>

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      password: '',
      email: '',
    }
  },

  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.errors = [];

      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => this.$router.push('users'))
      .catch(function(error) {
        this.errors = [error.message]
      }.bind(this));
    }
  }
}
</script>
