import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('화면이 정상적으로 표시된다', () => {
    const wrapper = shallowMount(SignupForm);
    const button = wrapper.find('button');
    // console.log(button.html());
    const buttonText = button.element.textContent;
    expect(buttonText).toBe('가입');
  });

  test('회원 가입 버튼을 누르려면 이름, 비번, 닉네임을 넣어야 한다', () => {});
});

// TODO: 10시 23분까지 휴식
// 쉬는 시간에 아까 말씀 드린 내용들 확인해보세요.
// 네비게이션 가드 + 토큰 관련 처리 등
