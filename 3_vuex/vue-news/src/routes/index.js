// 1. 라우터 라이브러리 로딩
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes.js';

// 2. 라우터 라이브러리 준비(초기화)
Vue.use(VueRouter);

// 3. 라우터 인스턴스 생성
export let router = new VueRouter({
  // 페이지의 정보를 저장하는 배열
  routes,
});
