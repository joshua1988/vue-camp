---
title: Introduction 🆕
---

# Pinia란?

피니아(Pinia)란 Compositoin API 기반에서 사용할 수 있는 상태 관리 라이브러리를 의미합니다. Vuex의 최신 버전인 5를 의미하는 라이브러리이기도 합니다.

## Vuex랑 뭐가 다를까?

[뷰엑스(Vuex)](/vuex/concept)는 Vue.js의 상태 관리 패턴이자 라이브러리를 의미합니다. 뷰엑스가 state, getters, mutations, actions를 기반으로 상태를 다뤘다면 피니아는 state, getters, actions로 상태를 관리합니다. 그래서 뷰엑스의 다소 복잡하게 보인 문법들이 단순해 지는 효과가 있습니다.

하지만 장점만 있지는 않습니다. 피니아를 사용하려면 컴포지션 API 기반 프로젝트를 사용해야 하며 뷰엑스가 아닌 다른 상태 관리 라이브러리 사용법을 익혀야 하는 번거로움이 있습니다. 따라서, 프로젝트 성격에 맞는 라이브러리를 사용하는 것을 추천합니다.

:::tip
👉 이미 운영 중인 Vue 2,3 프로젝트는 Vuex v4.x를 사용 <br>
👉 신규 프로젝트 중 **Composition API만** 사용하는 프로젝트는 Pinia를 사용
:::

## Pinia 설치

피니아는 앞서 설명한 것처럼 Composition API로만 작성된 프로젝트에서 사용할 수 있습니다. Vue 2에서 사용하려면 [Composition API 플러그인](https://github.com/vuejs/composition-api)을 별도로 설치해야 하고, Vue 3에서는 컴포지션 API 스타일 코드만 작성해야 합니다.

컴포지션 API를 사용하는 뷰 프로젝트에서 아래 명령어로 피니아 라이브러리를 설치합니다.

```sh
# npm
npm install pinia
# yarn
yarn add pinia
```

## Pinia 기본

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