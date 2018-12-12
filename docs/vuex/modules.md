---
title: Modules
---

# 스토어 모듈화

애플리케이션에 스토어를 적용해서 사용하다가 보면 금방 스토어의 덩어리가 커집니다. 그럴때 데이터(상태)의 성격별로 스토어를 모듈화 해주면 훨씬 관리하기가 수월합니다.

## 스토어 모듈화 코드 형식

스토어를 모듈화 하는 코드는 다음과 같습니다.

```js
new Vuex.Store({
  modules: {
    모듈 명: 모듈의 내용
  }
})
```

## 스토어 모듈화 예시

어느 애플리케이션이든지 인증은 거의 필수로 존재합니다. 그러면 사용자의 인증 정보(auth)와 상품 정보(product)를 각각 모듈로 분할해보겠습니다. 스토어의 코드는 다음과 같습니다.

```js
// store.js
import auth from './modules/auth/index.js';
import product from './modules/product/index.js';

new Vuex.Store({
  modules: {
    auth: auth,
    product: product
  }
})
```

위에서 임포트하는 auth와 product 모듈의 내용은 아래와 같습니다.

```js
// auth.js, product.js
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
```

뷰엑스 모듈화의 핵심은 ES6의 modules 구문을 잘 이해하는 것입니다. 그리고 각 모듈들의 속성명이 유일하도록 `namespaced: true`를 꼭 추가해줘야 합니다.