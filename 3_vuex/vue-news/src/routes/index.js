// libs
import Vue from "vue";
import VueRouter from "vue-router";
// views
// import LoginView from '../views/LoginView.vue';
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    // 로그인 페이지 내용
    // {
    //   // 로그인 페이지 url
    //   path: '/login',

    //   // 로그인 페이지 컴포넌트
    //   component: LoginView,
    // },
    {
      path: "/news",
      component: NewsView,
      beforeEnter(routeTo, routeFrom, next) {
        console.log("accessed");
        store
          .dispatch("FETCH_JOBS")
          .then(() => next())
          .catch(error => console.log(error));
        // next();
        // var response = fetchNews();
        // this.$store.commit('setNews', response.data);
        // var isAdmin = true;
        // if (!isAdmin) {
        //   next('/login');
        // }
      }
    },
    {
      path: "/ask",
      component: AskView
    },
    {
      path: "/jobs",
      component: JobsView
      // TODO: beforeEnter를 이용하여
      // 페이지 진입 전에 데이터를 요청해보세요.
      // TODO: 다 하신 분들은 NewView.vue 코드 수정
      // state -> news
      // mutations -> setNews
      // actions -> FETCH_NEWS
      // 위 속성 정의해서 구현
    },
    {
      path: "*",
      component: NotFoundView
      // component: () => import('../views/NotFoundView.vue'),
    }
  ]
});
