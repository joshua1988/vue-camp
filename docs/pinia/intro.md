---
title: Introduction 🆕
---

# Pinia란?

[피니아(Pinia)](https://pinia.vuejs.org/)란 [Composition API](../reuse/composition) 기반에서 사용할 수 있는 상태 관리 라이브러리를 의미합니다. Vuex의 최신 버전인 5를 의미하는 라이브러리이기도 합니다.

## Vuex랑 뭐가 다를까?

[뷰엑스(Vuex)](../vuex/concept)는 Vue.js의 상태 관리 패턴이자 라이브러리를 의미합니다. 뷰엑스가 state, getters, mutations, actions를 기반으로 상태를 다뤘다면 피니아는 state, getters, actions로 상태를 관리합니다. 그래서 뷰엑스의 다소 복잡하게 보인 문법들이 단순해 지는 효과가 있습니다.

하지만 장점만 있지는 않습니다. 피니아를 사용하려면 컴포지션 API 기반 프로젝트를 사용해야 하며 뷰엑스가 아닌 다른 상태 관리 라이브러리 사용법을 익혀야 하는 번거로움이 있습니다. 따라서, 프로젝트 성격에 맞는 라이브러리를 사용하는 것을 추천합니다.

:::tip
👉 이미 운영 중인 Vue 2,3 프로젝트는 Vuex v4.x를 사용 <br>
👉 신규 프로젝트 중 **Composition API만** 사용하는 프로젝트는 Pinia를 사용
:::

## Pinia의 주요 속성

피니아는 뷰엑스의 최신 버전이기 때문에 뷰엑스와 같은 역할을 합니다. 그리고 기존 뷰엑스의 주요 속성 4개 중 3개를 제공합니다.

- state
- getters
- actions

뷰엑스의 상태를 변경하기 위해 사용했던 mutations가 사라지고 actions 하나로 상태 변경과 비동기 처리를 모두 할 수 있게 되었습니다. 사용하는 입장에서는 다소 번거롭게 느껴졌던 문법이 간소화 되었죠. 뷰엑스와 표로 비교해 보면 다음과 같습니다.

| Vue      | Vuex      | Pinia   |
|----------|-----------|---------|
| data     | state     | state   |
| computed | getters   | getters |
| methods  | mutations | actions |
| methods  | actions   | actions |

뷰 인스턴스의 data와 state는 같은 역할을 합니다. data는 해당 컴포넌트의 상태이고 state는 모든 컴포넌트에 공유되는 data(전역 상태)를 의미합니다. computed 속성과 getters 속성 역시 마찬가지로 해당 인스턴스에서만 사용할 것이냐 모든 컴포넌트에서 사용할 것이냐 라는 차이만 있을 뿐 역할은 같습니다. 마지막으로 methods 속성은 mutations + actions과 같은 역할을 했었는데 피니아에서는 actions만 유지하여 문법을 간소화했습니다.

## Pinia 설치

피니아는 앞서 설명한 것처럼 Composition API로만 작성된 프로젝트에서 사용할 수 있습니다. Vue 2에서 사용하려면 [Composition API 플러그인](https://github.com/vuejs/composition-api)을 별도로 설치해야 하고, Vue 3에서는 컴포지션 API 스타일 코드만 작성해야 합니다.

컴포지션 API를 사용하는 뷰 프로젝트에서 아래 명령어로 피니아 라이브러리를 설치합니다.

```sh
# npm
npm install pinia
# yarn
yarn add pinia
```

## Pinia 등록

피니아를 애플리케이션에서 사용하기 위해서는 main.js 파일에 다음 코드를 추가해야 합니다.

<code-group>
<code-block title="Vue 2">
```js
// main.js
import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  render: h => h(App),
  pinia,
}).$mount('#app');
```
</code-block>

<code-block title="Vue 3">
```js
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```
</code-block>
</code-group>

