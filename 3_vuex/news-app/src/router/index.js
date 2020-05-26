// 라이브러리 로딩
import Vue from 'vue';
import VueRouter from 'vue-router';
// 페이지 컴포넌트(views 폴더 밑 컴포넌트)
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import AskDetailView from '../views/AskDetailView.vue';
import UserDetailView from '../views/UserDetailView.vue';
import NotFoundView from '../views/NotFoundView.vue';

// 라이브러리 초기화
Vue.use(VueRouter);

// 라이브러리 사용
// export const router = new VueRouter({
// const router = new VueRouter({
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
      // NOTE: 쉬는 시간 9시 10분까지
      // TODO: 아래 주소를 이용하여 jobs 페이지에 구직 정보를 표시
      // https://api.hnpwa.com/v0/jobs/1.json
    },
    {
      path: '/ask/:id',
      // 'ask/1234'
      // 'ask/abc'
      component: AskDetailView,
    },
    {
      path: '/user/:userId',
      // 'ask/1234'
      // 'ask/abc'
      component: UserDetailView,
    },
    {
      path: '*',
      component: NotFoundView
    }
  ],
});

// export default router;