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

### .then

HTTP 통신이 성공했다는 뜻으로, `.then()`으로 결과값을 받아서 처리할 수 있습니다.

### .catch

`.catch()` 를 통해 오류를 처리합니다. 오류를 처리하는 방법에는 `response`와 `request`로 나뉩니다.

```javascript
axios.get('/hello') {
    catch(function (error) {
        if (error.response) {
            // 요청이 성공적으로 이루어졌지만, 서버가 200번대 이외의 다른 상태코드로 응답을 한 경우를 말합니다.
            console.log(error.response);	
        } else if (error.request) {
            // 요청이 성공적으로 이루어졌으나 응답을 받지 못한 경우를 뜻합니다.
            console.log(error.request);
        }
    });

}
```

위 코드에서 `error.response` 는 요청이 제대로 이루어지고 서버로부터 응답을 받았으나, 200번대가 아닌 다른 상태 코드로 응답을 받은 경우를 뜻합니다. 만약 `response`가 `undefined` 일 경우, 서버의 응답을 받기 전, 에러가 발생했다는 것을 뜻합니다. 

또한, `error.request`는 요청이 이루어졌으나, 응답을 받지 못한 경우를 뜻합니다. 즉, `request`는 `undefined` 상태로 이어지다, 서버에 성공적으로 요청이 이루어지면, 값이 설정됩니다. 만약 `request`가 `undefined` 라고 나타나면, 서버에 요청을 보내기도 전에 클라이언트 측에서 에러가 발생했다는 것을 뜻합니다.

## 액시오스 HTTP 요청 메소드 종류

액시오스를 통해 사용할 수 있는 요청 메소드는 다음과 같습니다. 

자주 쓰이는 메소드는 get, post, put, delete입니다. 

### **axios.get(url[, config])**

서버에서 데이터를 가져올 때 사용하는 메소드입니다. 두번째 인자인 config 객체에는 헤더 (header), 응답초과시간 (timeout), 인자값 (params) 등의 요청값을 같이 넘길 수 있습니다. 

```javascript
axios.get('통신할 서버주소')
  .then(res => {
    console.log(res); 
  })
  .catch(err) => {
    console.log(err);
  });
```

### **axios.post(url[, data[, config]])**

새로운 값이나 데이터를 추가할 때 사용하는 메소드입니다. 데이터와 함께 보내 새로운 값을 입력합니다.

```javascript
axios.post('통신할 서버주소', { 추가할 데이터 })
  .then(res => {
    console.log(res)
   })
```

### **axios.put(url[, data[, config]])**

특정 데이터를 수정할 때 요청하는 메소드입니다. `put` 은 데이터 전체를 교체할 경우에 사용됩니다.

```javascript
axios.put('통신할 서버주소', { 변경할 데이터 })
  .then(res => {
    console.log(res)
  })
```

### **axios.delete(url[, config])**

특정 데이터나 값을 삭제할 때 요청하는 메소드입니다. 

```javascript
axios.delete('통신할 서버주소')
  .then(res => {
    console.log(res)
  })
```

---

이외에도 아래와 같은 HTTP 요청 메소드를 사용할 수 있습니다.

**axios.request(config)**

**axios.head(url[, config])**

- `head` 는 `get` 방식과 동일하지만, 응답에 body가 없습니다. 이를 통해 웹 서버의 정보를 확인하거나 버전을 확인하는 등의 용도로 사용됩니다. 

**axios.options(url[, config])**

- `options` 를 통해 서버에서 지원하는 옵션들을 미리 확인하기 위해 사용됩니다.

**axios.patch(url[, data[, config]])** 

- `patch`의 경우, 데이터의 일부를 교체할 경우에 사용됩니다. 

## 기타 액시오스 API 

기타 액시오스 관련 예제와 API는 [액시오스 문서](https://github.com/axios/axios#example)를 참고합니다.