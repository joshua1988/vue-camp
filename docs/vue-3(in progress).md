---
sidebar: auto
---

# Vue 3.0

새로 등장한 Vue.js Composition API(뷰 3.0)에 대해 알아보겠습니다.

## 기존의 문제점

- 복잡한 앱에서 코드 재사용 방법의 한계
  - HOC
  - 믹스인

## 가고자 하는 방향

- 인스턴스 **옵션 단위**가 아니라 특정 **기능이나 논리의 단위**로 코드를 그룹화 하는 것. 그리고 그 그룹화된 로직을 여러 컴포넌트에서 재사용하기

> most of us opt to organize files by feature or responsibility

- 