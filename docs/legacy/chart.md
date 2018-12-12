---
title: Wrapping External Library II
---

# 차트 라이브러리 통합

외부 라이브러리를 뷰에 통합하는 실습 2번째는 차트 라이브러리입니다. 차트 라이브러리는 기업의 백오피스(Back office)나 모니터링 시스템에서 흔하게 사용됩니다. 뷰 프레임워크 용으로도 차트 라이브러리들이 나오고 있지만 아직은 뷰와 통합된 라이브러리들이 많지가 않아 직접 통합해서 사용할 줄 알아야 합니다.

## 실습 예제

통합할 차트 라이브러리는 [Chart.js](https://www.chartjs.org/)입니다. 이미 뷰로 통합된 라이브러리가 오픈소스로 나와 있지만 직접 통합해보면서 감각을 익혀보겠습니다. 그리고 이번에는 뷰 플러그인으로 변환하여 사용하는 방법들을 알아보겠습니다.

## 실습 포인트

1. 컴포넌트 모듈화
2. 뷰 라이프 사이클에 대한 이해
3. 컴포넌트 통신 방식에 대한 이해
4. 플러그인에 대한 이해

## 실습 코드

- [연습 코드는 여기서](https://github.com/joshua1988/vue-camp/tree/master/2_todo/chart-with-plugin/exercise)
- [답안 코드는 여기서](https://github.com/joshua1988/vue-camp/tree/master/2_todo/chart-with-plugin/answer)