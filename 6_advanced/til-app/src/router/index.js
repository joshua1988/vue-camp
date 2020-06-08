import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupView from '../views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/signup',
      component: SignupView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/home',
      component: HomeView
    }
  ]
});

export default router;

// main.js
// import router from './main.js';
