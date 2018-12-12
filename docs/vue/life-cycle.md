---
title: Instance Lifecycle
---

# 인스턴스 라이프 사이클

인스턴스 라이프 사이클이란 뷰의 인스턴스가 생성되어 소멸되기까지 거치는 과정을 의미합니다. 인스턴스가 생성되고 나면 라이브러리 내부적으로 다음과 같은 과정이 진행됩니다.

- data 속성의 초기화 및 관찰 (Reactivity 주입)
- 뷰 템플릿 코드 컴파일 (Virtual DOM -> DOM 변환)
- 인스턴스를 DOM에 부착

## 라이프 사이클 다이어그램

인스턴스의 라이프 사이클 흐름을 그림으로 나타내어 보면 다음과 같습니다.

![콘솔에서 확인한 인스턴스 내용](../.vuepress/public/images/lifecycle.png)

## 라이프 사이클 훅

뷰의 라이프 사이클을 이해해야 하는 이유는 바로 라이프 사이클 훅 때문입니다. 라이프 사이클 훅으로 인스턴스의 특정 시점에 원하는 로직을 구현할 수 있습니다.

예를 들어, 컴포넌트가 생성되자마자 데이터를 서버에서 받아오고 싶으면 created나 beforeMount 라이프 사이클 훅을 사용할 수 있습니다. 아래 코드는 인스턴스가 생성되자마자 액시오스로 HTTP GET 요청을 보내 데이터를 받아오는 코드입니다.

```js
new Vue({
  methods: {
    fetchData() {
      axios.get(url);
    }
  },
  created: function() {
    this.fetchData();
  }
})
```

### 자주 사용되는 라이프 사이클 훅 목록

구현할 때 주로 사용하는 라이프 사이클 훅은 아래와 같습니다.

- [created](https://vuejs.org/v2/api/#created)
- [beforeMount](https://vuejs.org/v2/api/#beforeMount)
- [mounted](https://vuejs.org/v2/api/#mounted)
- [destroyed](https://vuejs.org/v2/api/#destroyed)

다른 라이프 사이클 훅을 알고 싶다면 [여기](https://vuejs.org/v2/api/#Options-Lifecycle-Hooks)를 참고하세요.