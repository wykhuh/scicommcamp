import Vue from 'vue'
import VueFire from 'vuefire'

import UserForm from './UserForm.vue'
import UserList from './UserList.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueFire)

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