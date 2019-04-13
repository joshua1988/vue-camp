import Vue from 'vue';
import VueRouter from 'vue-router';
// import SignupView from '../views/SignupView.vue';
// import LoginView from '../views/LoginView.vue';
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/signup',
    },
    {
      path: '/signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/board',
      component: () => import('../views/BoardView.vue'),
      beforeEnter(to, from, next) {
        // console.log(store.state);
        // const isLoggedIn = false;
        if (!store.state.token) {
        // if (!store.getters['isLoggedIn'] && store.getters['isAdmin']) {
          alert('로그인 하세요.');
          next('login');
          // this.$router.push({
          //   name: 'login',
          //   query: {

          //   },
          //   params: {

          //   },
          //   path: {

          //   }
          // });
        } else {
          next();
        }
      }
    },
  ]
});