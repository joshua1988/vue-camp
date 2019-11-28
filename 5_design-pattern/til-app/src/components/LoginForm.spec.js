import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
	test('페이지가 뜨면 화면이 그려짐', () => {
		var vm = new Vue({
			render: h => h(LoginForm),
		}).$mount();

		expect(vm).not.toBeFalsy();
	});
});
