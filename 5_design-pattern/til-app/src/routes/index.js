import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
// import SignupView from '../views/SignupView';

Vue.use(VueRouter);

const router = new VueRouter({
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
			meta: { auth: true },
			// beforeEnter(to, from, next) {
			// 	if (!store.getters.isLogin) {
			// 		console.log('로그인 하세요');
			// 		next('/login');
			// 		return;
			// 	}
			// 	next();
			// },
			// auth: 'required',
		},
		{
			path: '/add',
			component: () => import('../views/AddView.vue'),
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('../views/NotFoundView.vue'),
		},
	],
});
router.beforeEach((to, from, next) => {
	console.log(to.meta.auth);
	if (to.meta.auth) {
		!store.getters.isLogin ? next('/login') : next();
		// if (!store.getters.isLogin) {
		// 	console.log('로그인 하세요');
		// 	next('/login');
		// 	return;
		// }
		// next();
		return;
	}
	next();
});

export default router;

// TODO: 1. 로그인 페이지 구현
// TODO: 2. 로그인하고 나서 헤더의 오른쪽에 로그인한 사용자의 username을 표시
