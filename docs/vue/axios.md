---
title: Axios
---

# 액시오스

뷰에서 권고하는 HTTP 통신 라이브러리는 액시오스(Axios)입니다. Promise 기반의 HTTP 통신 라이브러리이며 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양합니다.

## 액시오스 설치

프로젝트에 액시오스를 설치하는 방법은 CDN 방식과 NPM 방식 2가지가 있습니다.

### CDN 방식

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### NPM 방식

```bash
npm install axios
```

## 액시오스 사용방법

라이브러리를 설치하고 나면 `axios`라는 변수에 접근할 수 있게 됩니다. `axios` 변수를 이용하여 아래와 같이 HTTP GET 요청을 날리는 코드를 작성합니다.

```html
<div id="app">
  <button v-on:click="fetchData">get data</button>
</div>
```

```js
new Vue({
  el: '#app',
  methods: {
    fetchData: function() {
      axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
})
```

위 코드는 get data 버튼을 클릭했을 때 사용자 정보를 받아오는 코드입니다. 실행하면 사용자 정보가 브라우저 개발자 도구의 콘솔에 출력됩니다.

## 기타 액시오스 API 

기타 액시오스 관련 예제와 API는 [액시오스 문서](https://github.com/axios/axios#example)를 참고합니다.