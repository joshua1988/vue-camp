import Vue from 'vue';
import VueRouter from 'vue-router';
// import SignupView from '../views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import PostAddView from '../views/PostAddView.vue';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/signup',
      // component: SignupView
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/login',
      component: LoginView
    },
    // TODO: 코드 스플리팅을 아래에 적용해보세요.
    // 9시 14분까지 휴식
    {
      path: '/home',
      component: HomeView,
      async beforeEnter(to, from, next) {
        console.log('메인 화면 진입 전');
        await fetchPosts();
        next();
        // const login = false;
        // if (login) {
        // if (store.state.token) {
        //   next();
        // } else {
        //   next('/signup');
        // }
        next();
      }
    },
    {
      path: '/add',
      component: PostAddView
    }
  ]
});

// 모든 라우터에 대해서 가드 처리(공통 로직 등)
// router.beforeEach((to, from, next) => {});

export default router;

// main.js
// import router from './main.js';
