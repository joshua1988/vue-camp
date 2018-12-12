---
title: Concept
---

# 상태 관리 소개

상태 관리란 현대 프런트엔드 프레임워크에서 모두 사용하는 개발 패턴입니다. 뷰에서는 뷰엑스(Vuex)라는 상태 관리 패턴을 사용합니다. 상태 관리가 필요한 이유는 컴포넌트의 숫자가 많아졌을 때 컴포넌트 간의 데이터 전달이나 관리가 어렵기 때문입니다. 데이터 전달을 더 명시적이고 효율적으로 하기 위한 방법이 상태 관리입니다.

## 뷰엑스 소개

뷰엑스란 뷰의 상태 관리 패턴이자 라이브러리입니다. 아래는 뷰엑스의 개념을 단순하게 도식화한 그림입니다.

![뷰엑스 컨셉](../.vuepress/public/images/vuex-concept.png)

화면(View) -> 화면에서의 이벤트 발생(Actions) -> 데이터 변경(State)의 단방향 데이터 흐름이 특징입니다.

## 뷰엑스 기술 요소

뷰엑스의 주요 기술 요소는 다음과 같습니다.

- state
- getters
- mutations
- actions

각 속성에 대한 자세한 설명은 해당 챕터에서 확인하겠습니다.

## 뷰엑스 설치

뷰엑서를 프로젝트에 설치하기 위해서 아래의 방법을 따릅니다.

### CDN 방식

```html
<script src="https://unpkg.com/vuex"></script>
```

### NPM 방식

```bash
npm install vuex --save
```

## 뷰엑스 등록

뷰엑스를 등록하기 위해서는 뷰 라우터와 마찬가지로 뷰 스토어를 하나 생성해야 합니다.

```js
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // ..
});
```

뷰 스토어를 하나 생성하고 나서 ES6 import/export 문법으로 main.js 파일의 인스턴스에 주입합니다.

```js
// main.js
import Vue from 'vue';
import { store } from './store.js';

new Vue({
  store: store
})
```

## 뷰엑스 구조도

뷰엑스의 전체 흐름을 나타낸 그림입니다.

![뷰엑스 컨셉](../.vuepress/public/images/vuex-flow.png)

데이터의 흐름은 Actions -> Mutations -> State 순서임을 알 수 있습니다.