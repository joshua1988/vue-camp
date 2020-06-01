import Vue from "vue";
import VueRouter from "vue-router";
import SignupView from "../views/SignupView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/signup",
      component: SignupView
    }
  ]
});

export default router;

// main.js
// import router from './main.js';
