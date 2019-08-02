import { shallowMount } from '@vue/test-utils';
import LoginView from './LoginView.vue';

function sum(a, b) {
	return a + b;
}

describe('LoginView.vue', () => {
	test('샘플', () => {
		expect(true).toBeTruthy();
	});

	test('sum 함수', () => {
		let result = sum(10, 20);
		expect(result).toBe(30);
	});

	test('testValue는 10', () => {
		const wrapper = shallowMount(LoginView);
		// console.log(wrapper.vm);
		let value = wrapper.vm.testValue;
		expect(value).toBe(10);
		// new Vue({
		// 	components: {
		// 		LoginView,
		// 	},
		// });
	});

	test('username이 이메일 형식이 아니면 유효성 검사 텍스트가 표시', () => {
		const wrapper = shallowMount(LoginView, {
			data() {
				return {
					username: 'test@abc.com',
				};
			},
		});
		let validationTextTag = wrapper.find('p');
		console.log(validationTextTag.element);
		expect(validationTextTag.element).toBeTruthy();
	});

	test('username이 이메일이 아니면 로그인 버튼 비활성화', () => {});
});
