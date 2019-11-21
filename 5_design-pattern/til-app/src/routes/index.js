import Vue from 'vue';
import VueRouter from 'vue-router';
// import SignupView from '../views/SignupView';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/signup',
			component: () => import('../views/SignupView.vue'),
		},
		{
			path: '/login',
			component: () => import('../views/LoginView.vue'),
		},
	],
});

// TODO: 1. 로그인 페이지 구현
// TODO: 2. 로그인하고 나서 헤더의 오른쪽에 로그인한 사용자의 username을 표시
