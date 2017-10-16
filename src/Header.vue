<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">SciCommCamp</router-link>        
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/add_profile">Add your Profile</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" v-on:click="logout" to="/">Logout</router-link>
        </li>           
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  methods: {
    logout() {
      var context = this;
      firebase.auth().signOut()
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>
