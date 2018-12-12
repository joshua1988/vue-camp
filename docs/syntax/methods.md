---
title: Methods
---

# 뷰 메서드

뷰의 메서드는 특정 기능 별로 묶을 수 있는 자바스크립트 함수를 의미합니다. 메서드는 흔히 뷰 템플릿의 버튼 이벤트 처리부터 HTTP 통신까지 다양한 성격의 코드로 구성됩니다.

## 메서드 코드 형식

메서드를 선언하는 방법은 아래와 같습니다.

```js
new Vue({
  methods: {
    // ..
  }
})
```

## 메서드 예시 1 - 기본

메서드를 이용해서 버튼 클릭 이벤트를 처리해보겠습니다.

```html
<button v-bind:click="clickButton">click me</button>
```

```js
new Vue({
  methods: {
    clickButton() {
      alert('clicked');
    }
  }
})
```

위의 click me 버튼을 클릭하면 경고창이 뜨면서 clicked 라는 메시지가 표시됩니다.

## 메서드 예시 2 - 응용

메서드의 내용에는 단순히 화면 조작을 위한 기능 뿐만 아니라 특정 로직을 담아놓는 장소로도 활용할 수 있습니다.

```html
<button v-bind:click="displayProducts">Refresh</button>
```

위처럼 Refresh 라는 버튼을 하나 만들고 클릭 했을 때 `displayProducts()` 메서드가 수행될 수 있게 디렉티브로 연결합니다.

```js
new Vue({
  data: {
    products: []
  },
  methods: {
    displayProducts() {
      this.fetchData();
      // ..
    },
    fetchData() {
      axios.get('/products').then(function(response) {
        this.products = response.data;
      }).catch(function(error) {
        alert(error);
      });
    }
  }
})
```

Refresh 버튼을 클릭하고 나면 `displayProducts()` 메서드가 `fetchData()`를 호출합니다. 이런 식으로 메서드를 연결해서 사용할 수도 있으며 이렇게 하면 특정 기능 별로 메서드를 분리할 수 있어 코드를 중복해서 작성하지 않고 재활용하기가 수월합니다.