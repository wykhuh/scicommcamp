import Vue from 'vue'
import UserForm from './UserForm.vue'
import UserList from './UserList.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: UserList },
  { path: '/add_profile', component: UserForm }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')