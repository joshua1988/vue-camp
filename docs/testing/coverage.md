---
title: Coverage
---

# 테스트 커버리지(범위)

## 테스팅의 목적

1. 코드를 변경할 때 두려워하지 않기 위해
2. 코드 품질 보장
3. 도큐먼트로써의 역할

> Confidence to change / Removal of Fear + High Code Quality + Well-documented Code = Developer Happiness

## 뷰 컴포넌트 테스트

![뷰 컴포넌트 테스팅 지점들](../.vuepress/public/images/vue-component-testing.png)

뷰 컴포넌트 테스트 코드를 작성할 때 고민할 지점들은 다음과 같습니다.

- 컴포넌트의 입력 값 : props, user interaction, lifecycle methods
- 컴포넌트의 출력 값 : events, rendered output, connection with children

테스트 할 필요가 없는 지점들

- 컴포넌트의 구체적인 로직 (비즈니스 로직)
- 프레임워크 자체의 기능들 (prop rendering, prop validation 등)

## 뷰 컴포넌트 테스팅 기법

- Integration 테스트 : 특정 컴포넌트에 종속된 하위 컴포넌트까지 모두 컴포넌트의 테스트 범위로 간주. `mount()` API 사용. 특정 기능의 전체 흐름을 모두 테스트 케이스로 작성.
- Shallow 테스트 : 특정 컴포넌트에 등록된 하위 컴포넌트는 신경쓰지 않고 해당 컴포넌트의 기능만 테스트. `shallowMount()` API 사용. 특정 기능의 흐름을 잘게 분할해서 테스트 케이스로 작성.

## 참고 사이트

가이드 작성 후 링크 제거. 제거할 때 가이드 꼼꼼히 확인

- [프로처럼 테스팅 하기](https://vueschool.io/articles/series/testing-like-a-pro-in-javascript/)
- [뷰 컴포넌트 테스트하기](https://vueschool.io/articles/vuejs-tutorials/5-testing-a-vue-component/)
- [에드의 뷰 테스팅 발표](https://www.meetupfeed.com/talk/unit-testing-vue-components-why-test-what-to-test-and-how-to-test-vue-components)
- [스냅샷 테스팅 링크](https://vue-test-utils.vuejs.org/guides/#testing-single-file-components-with-jest)
