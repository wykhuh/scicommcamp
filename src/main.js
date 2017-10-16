import Vue from 'vue'
import VueFire from 'vuefire'

import UserForm from './UserForm.vue'
import UserList from './UserList.vue'
import Login from './Login.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueFire)

const routes = [
  { path: '/', component: Login },
  { path: '/users', component: UserList },
  { path: '/add_profile', component: UserForm },  
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.auth)) {
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (!user) {
//         next({
//             path: '/login'
//         })
//       } else {
//         next()
//       }
//     })
//   } else {
//     next()
//   }
// })

new Vue({
  router
}).$mount('#app')