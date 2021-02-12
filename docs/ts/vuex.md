---
title: Vuex Typing
---

# 뷰엑스 타입 정의 방법

:::danger
**⚠️ 주의!** 이 글은 Vuex와 타입스크립트의 기본 개념을 모두 아시는 분들이 읽으실 수 있는 글입니다. [인프런 Vue.js 학습 로드맵](https://www.inflearn.com/roadmaps/3/)을 모두 수강하신 분들께 적합합니다 :)
:::

`Vue.extend()` 방식을 이용하여 뷰엑스를 타이핑하려면 뷰엑스 라이브러리 내부적으로 제공하는 타입을 약간 변형해 주어야 합니다. 코드 작성 방식을 알아보기 위해 토큰을 설정하는 뷰엑스 코드를 작성해 보겠습니다.

## Vuex 기본 코드

먼저 `store/index.ts`에 아래와 같이 정의합니다.

```js
// store/index.ts
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  state: {
    token: ''
  }
};

export default new Vuex.Store(store);
```

## state 정의

위 기본 코드에서 `state`를 별도의 파일로 분리합니다. `store/state.ts`에 놓겠습니다.

```ts
// store/state.ts
export const state = {
  token: '',
}

export type RootState = typeof state;
```

`state`를 정의한 다음 해당 객체 구조의 타입을 `RootState`의 타입 변수로 선언합니다.

## mutations 정의

뮤테이션 코드도 `store/mutations.ts` 파일에 별도로 작성합니다.

```ts
// store/mutations.ts
import { RootState } from "./state";

// 뮤테이션 타입
export enum MutationTypes {
  SET_TOKEN = "SET_TOKEN",
}

// 뮤테이션 속성 함수
export const mutations = {
  [MutationTypes.SET_TOKEN](state: RootState, token: string) {
    state.token = token;
  },
};

export type Mutations = typeof mutations;
```

추후 뮤테이션 속성 함수의 타입 추론을 위해 뮤테이션 함수의 이름은 모두 `enum` 값으로 선언하고 해당 값을 함수의 이름으로 정의해 줍니다. 앞에서 정의한 `state`의 타입인 `RootState`를 들고 와서 뮤테이션 속성 함수의 첫 번째 파라미터 타입으로 연결해 줬습니다.

## 뷰 컴포넌트에서 활용할 수 있도록 뷰엑스 커스텀 타입 정의

글 서두에 언급한 것처럼 뷰엑스의 내부 타입 방식으로는 위에서 정의한 `state`와 `mutations`가 올바르게 추론되지 않습니다. 이 문제를 해결하기 위해 `store/types.ts`에 아래와 같이 작성합니다.

```ts
// store/types.ts
import { CommitOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export type MyStore = Omit<
  Store<RootState>,
  "commit"
> &
  MyMutations
```

위 코드는 뷰엑스 내부적으로 정의된 타입에 우리가 애플리케이션에서 사용하기 위해 작성한 `state`, `mutations` 타입 코드를 추가한 코드입니다. 새로 정의된 `MyStore` 타입을 이제 프로젝트에서 인식할 수 있게만 해주면 됩니다.

:::tip
뷰엑스 내부 타입이 궁금하신 분들은 `Store` 타입을 쫓아서 들어가보세요 :)
:::

## 프로젝트 타입 정의 확장하기

이제 위에서 정의한 `MyStore` 타입을 아래와 같이 컴포넌트 옵션 속성에서 추론될 수 있게 해보겠습니다.

![store-inference-error](./images/store-infer-error.png)

뷰 + 타입스크립트 프로젝트 루트 레벨에 `src/types/project.d.ts` 파일을 생성하고 아래 내용을 작성합니다.

```ts
// src/types/project.d.ts
import Vue from "vue";
import { MyStore } from "../store/types";

declare module "vue/types/vue" {
  interface Vue {
    $store: MyStore;
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
```

다음으로 프로젝트의 타입스크립트 설정 파일에 아래 옵션을 추가합니다.

```js{8}
// ...
"include": [
  "src/**/*.ts",
  "src/**/*.tsx",
  "src/**/*.vue",
  "tests/**/*.ts",
  "tests/**/*.tsx",
  "src/types/**.d.ts",
],
"exclude": [
  // ...
]
```

그리고 `node_modules/vuex/types/vue.d.ts` 파일을 삭제합니다. 이제 사용중인 개발 툴이나 코드 편집기를 종료하고 다시 실행하여 추론이 잘 되는지 확인합니다.

![store-infer](./images/store-infer.gif)

:::tip
Vue 2에서는 node_modules 밑의 타입 선언 파일을 지워줘야 하지만, Vue 3에서는 내부 라이브러리를 건들지 않고도 확장할 수 있게 다음과 같은 인터페이스가 제공됩니다 :) [Vuex 4 릴리즈 노트](https://github.com/vuejs/vuex/releases/tag/v4.0.0-beta.1)
:::

## actions 정의

`actions` 함수도 아래와 같이 정의할 수 있습니다.

```ts
// store/actions.ts
import { ActionContext } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";

export enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS"
}

interface News {
  title: string;
  id: number;
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

export const actions = {
  async [ActionTypes.FETCH_NEWS](context: MyActionContext, payload?: number) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user: News[] = await res.json();
    return user;
  }
};

export type Actions = typeof actions;
```

스토어 커스텀 타입 파일에 아래 내용을 추가합니다.

```ts{1,2,15-21,24,27}
// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export type MyStore = Omit<
  Store<RootState>,
  "commit" | "dispatch"
> &
  MyMutations &
  MyActions;
```

<!-- ```html
<script lang="ts">
import Vue from "vue";
import { MutationTypes } from "./store/mutations";

export default Vue.extend({
  methods: {
    setToken() {
      this.$store.commit(MutationTypes.SET_TOKEN, "a");
    }
  },
});
</script>
```
 -->

## getters 정의

`getters` 속성 함수는 다음과 같이 정의합니다.

```ts
// store/getters.ts
import { RootState } from "./state";

export const getters = {
  getToken(state: RootState) {
    return state.token + "!";
  }
};

export type Getters = typeof getters;
```

스토어 커스텀 파일에 아래와 같이 추가합니다.

```ts{3,23-27,31,35}
import { Action, CommitOptions, DispatchOptions, Store } from "vuex";
import { Actions } from "./actions";
import { Getters } from "./getters";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  "getters" | "commit" | "dispatch"
> &
  MyMutations &
  MyActions &
  MyGetters;
```