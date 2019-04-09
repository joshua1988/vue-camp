import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { MainView, LoginView } from './views';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: MainView,
    },
    {
      path: '/login',
      component: LoginView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // TODO: 이전 페이지의 스크롤 정보를 받아오고 싶은 경우 사용
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    // TODO: 페이지 이동시 특정 태그의 ID 위치로 이동하고 싶은 경우 사용
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
