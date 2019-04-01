import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import NotFoundView from '../views/NotFoundView.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // url
      path: '/news',
      // 해당 url에서 표시될 페이지 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '*',
      component: NotFoundView,
    },
  ],
});