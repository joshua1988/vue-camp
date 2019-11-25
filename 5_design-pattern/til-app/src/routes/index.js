import Vue from 'vue';
import VueRouter from 'vue-router';
// import SignupView from '../views/SignupView';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/signup',
			component: () => import('../views/SignupView.vue'),
		},
		{
			path: '/login',
			component: () => import('../views/LoginView.vue'),
		},
		{
			path: '/home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			// TODO: 학습 노트를 생성하는 페이지 제작 및 home 화면에 생성한 데이터 표시
			// 9시 6분까지 실습
			path: '/add',
			component: () => import('../views/AddView.vue'),
		},
		{
			path: '*',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
});

// TODO: 1. 로그인 페이지 구현
// TODO: 2. 로그인하고 나서 헤더의 오른쪽에 로그인한 사용자의 username을 표시
