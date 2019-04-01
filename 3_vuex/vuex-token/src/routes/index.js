import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import MainView from '../views/MainView';
import PostAddView from '../views/PostAddView';
import store from '../store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/signup',
      component: SignupView,
    },
    {
      path: '/main',
      component: MainView,
      beforeEnter: (to, from, next) => {
        store.getters['isLoggedIn'] ? next() : alert('should log in');
      }
    },
    {
      path: '/new',
      component: PostAddView,
    },
  ]
})