// 테스트 관련 라이브러리 로딩
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import App from '../../src/App.vue';
// import App from '@/App.vue';

// 테스트 묶음의 이름
describe('HelloWorld.vue', () => {
	// 테스트 케이스 작성
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg },
		});
		// 기대 값과 결과 값 비교
		expect(wrapper.text()).toMatch(msg);
	});
});
