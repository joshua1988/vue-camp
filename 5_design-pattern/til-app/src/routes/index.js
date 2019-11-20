import Vue from "vue";
import VueRouter from "vue-router";
// import SignupView from '../views/SignupView';

Vue.use(VueRouter);

// 여기서부터 작성...
export default new VueRouter({
  routes: [
    {
      path: "/signup",
      component: () => import("../views/SignupView.vue")
    }
  ]
});
