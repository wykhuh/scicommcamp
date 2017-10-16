import Vue from 'vue'
import UserForm from './UserForm.vue'
import UserList from './UserList.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(UserList)
})
