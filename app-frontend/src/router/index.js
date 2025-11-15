import {createRouter, createWebHashHistory } from 'vue-router'


import homeView from '@/views/homeView.vue'
import loginView from '@/views/loginView.vue'
import signupView from '@/views/signupView.vue'

const routes = [

  {
    path: "/",
    name: "home",
    component: homeView,

  },
  {
    path: "/user/login",
    name: 'login',
    component: loginView
  },
  {
    path: "/user/signup",
    name: "signup",
    component: signupView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,


})

export default router;