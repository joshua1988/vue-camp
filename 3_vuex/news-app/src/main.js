import Vue from 'vue';
import App from './App.vue';
// 라이브러리 로딩
import VueRouter from 'vue-router';
import NewsView from './views/NewsView.vue';

Vue.config.productionTip = false;

// 라이브러리 초기화
Vue.use(VueRouter);

// 라이브러리 사용
const router = new VueRouter({
  routes: [
    {
      path: '/news',
      component: NewsView,
    },
    {
      // TODO: 'ask' 페이지 라우터 정보를 입력하세요
      // url: /ask
      // 컴포넌트 이름: views 폴더의 AskView.vue
      // API 호출 주소: https://api.hnpwa.com/v0/ask/1.json
      // TODO: AskView 페이지 이동하면 데이터 화면에 표시(타이틀 목록)
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
