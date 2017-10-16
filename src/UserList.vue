<template>
  <div class="container">

    <h1>Sci Comm Campers 2017</h1>

    <div class="card" v-for="user in users">
      <div class="card-body">
        <h4 class="card-title">{{user.name}}</h4>
        <dl v-if="user.location">
          <dt>Location:</dt>
          <dd>{{user.location}}</dd>
        </dl>

        <dl v-if="user.email">
          <dt>Email:</dt>
          <dd>{{user.email}}</dd>
        </dl>

        <dl v-if="user.twitter">
          <dt>Twitter:</dt>
          <dd>{{user.twitter}}</dd>
        </dl>

        <dl v-if="user.instagram">
          <dt>Instagram:</dt>
          <dd>{{user.instagram}}</dd>
        </dl>

        <dl v-if="user.bio">
          <dt>About me:</dt>
          <dd>{{user.bio}}</dd>
        </dl>

        <dl v-if="user.need_help">
          <dt>I need help with:</dt>
          <dd>{{user.need_help}}</dd>
        </dl>  

        <dl v-if="user.offer_help">
          <dt>I'm can offer help with:</dt>
          <dd>{{user.offer_help}}</dd>
        </dl>       
      </div>
    </div>
  </div>
  
</template>

<script>
var usersRef = firebase.database().ref('users')

export default {
  name: 'userList',
  firebase: {
    users: usersRef
  },
}

</script>
