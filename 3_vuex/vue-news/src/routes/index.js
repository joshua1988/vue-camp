// libs
import Vue from 'vue';
import VueRouter from 'vue-router';
// views
// import LoginView from '../views/LoginView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    // 로그인 페이지 내용
    // {
    //   // 로그인 페이지 url
    //   path: '/login',

    //   // 로그인 페이지 컴포넌트
    //   component: LoginView,
    // },
    {
      path: '/news',
      component: NewsView,
    },
    // TODO: 페이지 2개 추가
    // URL : jobs, ask
    // 컴포넌트 이름 : JobsView, AskView
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '*',
      component: NotFoundView,
      // component: () => import('../views/NotFoundView.vue'),
    },
  ],
});
