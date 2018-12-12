---
title: Filters
---

# 뷰 필터

뷰의 필터는 화면에 표시되는 텍스트의 형식을 쉽게 변환해주는 기능입니다. 가장 간단하게는 단어의 대문자화부터 다국어, 국제 통화 표시 등 다양하게 사용할 수 있습니다.

## 필터 사용 방법

필터틀 사용하는 방법은 아래와 같습니다.

```html
<div id="app">
  {{ message | capitalize }}
</div>
```

```js
new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```

위의 코드를 실행하면 Hello 텍스트가 화면에 출력됩니다. 필터를 쓰지 않았다면 hello가 출력되었겠죠.

## 필터 등록 패턴

위와 같이 `filters` 속성을 이용하여 각 컴포넌트에 필터를 등록하는 방법도 있지만, 실제로는 대부분 filters.js 파일을 별도로 분리하여 사용합니다. 아래와 같이 말이죠.

```js
// filters.js
export function capitalize() {
  // ..
}

export function translate() {
  // ..
}
```

```js
// main.js
import Vue from 'vue';
import * as filters from 'filters.js';

Object.keys(filters).forEach(function(key) {
  Vue.filter(key, filters[key]);
});

new Vue({
  // ..
})
```