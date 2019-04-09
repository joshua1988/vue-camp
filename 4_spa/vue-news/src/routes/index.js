import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import store from '../store/index.js';
import bus from '../utils/bus.js';

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
      async beforeEnter(to, from, next) {
        try {
          bus.$emit('on:progress');
          await store.dispatch('FETCH_NEWS');
          bus.$emit('off:progress');
          next();
        } catch (error) {
          console.log(error);
        }
      }
    },
    {
      path: '/ask',
      component: AskView,
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      } 
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '*',
      component: NotFoundView,
    },
  ],
});