---
title: Plugins 🆕
---

# 플러그인

플러그인은 애플리케이션에서 자주 사용될만한 속성, 함수, 라이브러리 등의 사용성을 높여주는 기능입니다. 뷰 라우터, 뷰엑스 등의 코어 라이브러리가 이미 뷰 플러그인 형태로 제공되고 있습니다.

## 플러그인 사용 방법

뷰로 개발하기 위한 외부 라이브러리들을 검색하다 보면 아래와 같은 코드를 마주친 적이 있을 겁니다.

<code-group>
<code-block title="Vue 2">
```js
Vue.use(VueRouter);
Vue.use(Vuex);
```
</code-block>

<code-block title="Vue 3">
```js
const app = Vue.createApp();

app.use(VueRouter);
app.use(Vuex);
```
</code-block>
</code-group>

여기서 `Vue.use()` 코드가 바로 플러그인을 설치하여 사용하는 코드입니다. 플러그인을 한번 설치하고 나면 뷰 인스턴스의 내부에 플러그인에 정의한 기능이 추가됩니다. 그러고 나면 컴포넌트 내부에서 this로 해당 기능을 편하게 접근할 수 있습니다. 이런 이유로 자주 사용되는 라이브러리나 기능들은 플러그인으로 정의하여 사용하는 것이 좋습니다.

## 플러그인 구현 방법

그럼 플러그인을 어떻게 구현할 수 있는지 살펴보겠습니다. 아래는 간단한 플러그인 제작 코드입니다.

```js
// ChartPlugin.js
import Chart from 'chartjs';

export default {
  install(Vue, options) {
    Vue.prototype.ChartJS = Chart;
  }
}
```

위 코드는 chartjs라는 외부 라이브러리를 npm 방식으로 프로젝트에 설치한 후 해당 라이브러리를 플러그인으로 사용하는 코드입니다. 차트 라이브러리를 불러와 `Chart`라는 변수에 담았고 뷰 플러그인을 설치(install)할 때 뷰의 프로토타입 속성으로 해당 변수를 연결하는 코드입니다. 따라서 아래와 같이 뷰 인스턴스를 정의하기 전에 플러그인을 설치하면 컴포넌트에서 매번 차트 라이브러리를 불러오지 않고도 사용할 수 있습니다.

<code-group>
<code-block title="Vue 2">
```js
import ChartPlugin from './ChartPlugin.js';

Vue.use(ChartPlugin);

new Vue({
  // ...
});
```
</code-block>

<code-block title="Vue 3">
```js
import ChartPlugin from './ChartPlugin.js';

const app = Vue.createApp({
  // ...
});
app.use(ChartPlugin);
```
</code-block>
</code-group>

특정 컴포넌트에서 차트를 사용하고 싶을 때 아래와 같이 `this.ChartJS`로 차트를 호출합니다.

```html {5}
<!-- Home.vue -->
<script>
export default {
  mounted() {
    new this.ChartJS(this.$refs.myChart, {
      // ...
    })
  }
}
</script>
```

::: tip
플러그인 변수명은 `$_`가 좋습니다. 뷰 라이브러리 내부적으로 사용하는 private 변수는 `_`를 사용하고 있고, 사용자에게 노출시키는 인스턴스 관련 속성은 `$`를 사용하고 있기 때문입니다. 이 내용은 뷰 공식 문서의 스타일 가이드를 따랐습니다.
:::
