---
title: Wrapping External Library I
---

# 날짜 선택기 라이브러리 통합

실무의 레거시 프로젝트를 뷰로 바꾸는 경우 기존에 사용하던 라이브러리를 뷰로 래핑해야 하는 경우가 생깁니다. 일반적으로 기존 시스템에 적용된 라이브러리는 바닐라 자바스크립트 또는 jQuery 기반으로 되어 있는 경우가 많습니다. 따라서, 뷰 개발자는 이와 같은 라이브러리를 뷰의 동작 원리에 맞춰 통합할 줄 알아야 합니다.

라이브러리를 뷰로 래핑할 때 알아야 하는 뷰의 특징은 가상 돔(Virtual DOM) 기반으로 템플릿을 구현한다는 점입니다. 뷰 인스턴스가 화면에 부착되는 시점이 언제인지 잘 모르시는 분들은 [뷰 인스턴스 라이프 사이클](../vue/life-cycle.html)을 다시 살펴보세요.

## 실습 예제

뷰로 통합할 라이브러리는 날짜 선택기(DatePicker) 라이브러리입니다. 날짜 선택기 라이브러리는 jQuery 플러그인으로도 있고 독립 라이브러리로도 많이 있습니다. 여기서는 [Pickaday](https://github.com/dbushell/Pikaday)를 기준으로 실습하겠습니다.

## 실습 포인트

1. 컴포넌트 모듈화
2. 뷰 라이프 사이클에 대한 이해
3. 컴포넌트 통신 방식에 대한 이해
4. v-model 내부 동작 방식에 대한 이해

## 실습 코드

- [연습 코드는 여기서](https://github.com/joshua1988/vue-camp/tree/master/2_todo/external-library/exercise)
- [답안 코드는 여기서](https://github.com/joshua1988/vue-camp/tree/master/2_todo/external-library/answer)

