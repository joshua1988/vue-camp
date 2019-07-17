// 페이지 컴포넌트
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import NotFound from '../views/NotFound.vue';

export let routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    // 페이지의 URL
    path: '/news',
    // 해당 URL에서 표시될 컴포넌트(페이지 컴포넌트)
    component: NewsView,
  },
  {
    path: '/ask',
    component: AskView,
  },
  {
    path: '/jobs',
    component: JobsView,
  },
  {
    path: '/user/:userName',
    component: UserView,
  },
  {
    path: '*',
    component: NotFound,
  },
];
