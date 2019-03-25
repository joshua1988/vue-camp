---
title: TypeScript with Vue
---

# 뷰에 타입스크립트 적용하기

뷰 컴포넌트에 타입스크립트 코드를 작성하기 위해 필요한 지식을 알아봅니다.

## 프로젝트 생성

뷰 최신 CLI 도구(3.4 이상)를 사용하면 TypeScript가 적용된 프로젝트를 바로 구성할 수 있습니다. 프로젝트 생성을 위해 아래 명령어를 입력합니다.

```bash
vue create vue-ts
```

그리고 프로젝트 생성 옵션을 아래와 같이 선택합니다.

![타입스크립트 CLI 옵션](../.vuepress/public/images/ts-presets.png)

::: tip
CLI 2.x 버전 도구를 이용하여 타입스크립트를 구성하는 방법에 대해서는 [여기](https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter)를 참고하세요.
:::

## Vue.extend()를 활용한 타입스크립트 뷰 컴포넌트

생성한 프로젝트의 `App.vue` 파일을 아래와 같이 바꿉니다.

```html {7,10,17}
<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      result: '',
    }
  },
  methods: {
    sayHi(someone: string) {
      this.result = 'hello ' + someone;
    }
  },
  created() {
    this.sayHi(10);
  },
})
</script>
```

기존 뷰 컴포넌트와 달라진 점은 `<script lang="ts">` 부분입니다. 웹팩으로 빌드할 때 vue-loader가 타입스크립트 코드를 이해하고 해석하기 위해서는 이 속성을 추가해야합니다. 그리고 `Vue.extend()`를 선언해줘야 타입스크립트 코드가 뷰의 속성들과 함께 정상적으로 동작됩니다.

마지막으로 `npm run serve` 명령어를 이용하여 이 코드를 실행해보면 명령어 실행 창에서 아래와 같은 에러를 확인할 수 있습니다.

![extend()를 사용한 뷰 컴포넌트 에러](../.vuepress/public/images/ts-extend-error.png)

메서드 함수인 `sayHi()`의 인자에는 문자열만 들어올 수 있는데 숫자 `10`을 넘겨줬기 때문에 에러가 발생합니다.

## Decorator(@)를 활용한 타입스크립트 뷰 컴포넌트

앞에서 살펴본 방법 이외에도 데코레이터([Decorator, @](https://www.typescriptlang.org/docs/handbook/decorators.html))를 이용해 뷰에 타입스크립트 코드를 작성할 수 있습니다.

이 방법은 기존의 객체 스타일 작성 방식이 아닌 클래스 기반 작성 방식을 사용해야하므로 ES6의 [Class](https://babeljs.io/docs/en/learn#classes) 문법이 익숙하지 않은 분들에게는 다소 어려울 수 있습니다. [ES6의 Class]()을 참고하셔서 학습하세요.

데코레이터를 활용하기 위해 `App.vue` 파일의 내용을 아래와 같이 변환합니다.

```html {10,13,14}
<template>
  <div>
    <h1>TypeScript with Vue</h1>
    <button @click="sayHi">say hi</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// 데코레이터를 이용한 컴포넌트 정의
@Component
export default class App extends Vue {
  // data 속성
  message = 'hello';

  // methods 속성
  sayHi() {
    console.log(this.message);
  }
}
</script>
```

`@Component`라는 데코레이터를 활용하기 위해 [vue-class-component]() 라이브러리를 임포트하였습니다. 앞에서 살펴봤던 `Vue.extend()` 방식과는 다르게 `Vue` 라이브러리를 클래스에 상속하여 클래스 멤버 변수와 클래스 함수 형태로 정의하는 것을 볼 수 있습니다.

data 속성인 `message`는 클래스의 멤버 변수 형태로 작성하고, methods 속성인 `sayHi()`는 클래스 메서드 함수 형태로 작성하였습니다.

:::tip
데코레이터는 클래스 정의와 내용에 대해 메타 정보를 제공하기 위한 문법입니다. 어노테이션(@)을 사용하며 `@표현식` 형태로 작성합니다. 더 자세한 내용은 [타입스크립트 공식 문서](https://www.typescriptlang.org/docs/handbook/decorators.html)를 참고하세요.
:::