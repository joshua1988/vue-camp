import Vue from 'vue';
import VueRouter from 'vue-router';

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
		// TODO: 게시글 조회 페이지, 게시글 생성 페이지 제작
	],
});
