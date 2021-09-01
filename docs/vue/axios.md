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

## 액시오스 응답 제어

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

<<<<<<< HEAD
위 코드에서 `error.response` 는 요청이 제대로 이루어지고 서버로부터 응답을 받았으나, 200번대가 아닌 다른 상태 코드로 응답을 받은 경우를 뜻합니다. 만약 `response`가 `undefined` 일 경우, 서버의 응답을 받기 전, 에러가 발생했다는 것을 뜻합니다. 

또한, `error.request`는 요청이 이루어졌으나, 응답을 받지 못한 경우를 뜻합니다. 즉, `request`는 `undefined` 상태로 이어지다, 서버에 성공적으로 요청이 이루어지면, 값이 설정됩니다. 만약 `request`가 `undefined` 라고 나타나면, 서버에 요청을 보내기도 전에 클라이언트 측에서 에러가 발생했다는 것을 뜻합니다.

## 액시오스 HTTP 요청 메소드 종류

액시오스에서 자주 사용되는 HTTP 요청 메소드를 알아보겠습니다.

### **axios.get(url[, config])**

서버에서 데이터를 가져올 때 사용하는 메소드입니다. 두번째 파라미터 `config` 객체에는 헤더 (header), 응답초과시간 (timeout), 인자값 (params) 등의 요청값을 같이 넘길 수 있습니다. 

```javascript
axios.get('users/1')
```

### axios.post(url[, data[, config]])

서버에 데이터를 새로 생성할 때 사용하는 메소드입니다. 두 번째 파라미터 `data`에 생성할 데이터를 넘깁니다. 

```javascript
axios.post('/books', { title: '1984' })
```

### **axios.put(url[, data[, config]])**

특정 데이터를 수정할 때 요청하는 메소드입니다. `put` 은 새로운 리소스를 생성하거나, 이미 존재하는 데이터를 대체할 때 사용됩니다. 멱등성 (idempotent)을 가져 `put`을 한 번 보내는 결괏값과 `put`을 여러 번 연속으로 보내는 결과값이 동일합니다. 

```javascript
axios.put('users/2', { name: 'Iron Man' })
```

### **axios.delete(url[, config])**

특정 데이터나 값을 삭제할 때 요청하는 메소드입니다. 

```javascript
axios.delete('books/3')
```

## 액시오스 HTTP 요청 Config 옵션 

액시오스 요청을 할 때는 config 설정이 가능합니다. 이 중 필수적인 설정은 url뿐입니다.

### url

`url`은 액시오스 요청에 사용될 서버의 URL을 말합니다. 

```javascript
url: '/books'
```

### method

`method`는 요청을 할 때 사용할 요청 메소드입니다. `method`의 기본값은 get 입니다.

```javascript
method: 'get'
```

### baseURL 

URL이 절대경로가 아닌 이상, URL 앞에 `baseURL`이 추가됩니다. 액시오스 인스턴스에 `baseURL`을 설정하여 상대경로(relative URL)를 전달하는 방법이 더 편리할 수 있습니다. 

```javascript
baseURL: `https://도메인.com/api/`
```

### headers

헤더를 수정해서 보내야 한다면 `headers`를 사용하면 됩니다.

```javascript
 headers: {'X-Requested-With': 'XMLHttpRequest'}
```

### params

`params`는 요청과 함께 보낼 URL 파라미터를 말하며 오브젝트 (object)나 [URLSearchParams 오브젝트](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams)로 이루어져야 합니다. `params`가 널(null)이거나 undefined인 경우, URL에 렌더링되지 않습니다.

```javascript
params: {
    ID: 13579
}
```

### data

`data`는 요청 본문(body)에 포함되어 보내질 데이터를 말합니다. `data`는 'PUT', 'POST', 'DELETE', 그리고 'PATCH' 액시오스 요청 메소드에 적용이 가능합니다. 

```javascript
data: {
    firstName: 'Christine'
},
  
// 아래의 data config 설정은 POST 메소드에서만 사용이 가능합니다.
data: 'Age=26&City=New York'
```

### timeout

`timeout`은 요청 시간이 초가되기까지의 시간을 밀리초(millisecond)로 지정합니다. 요청이 `timeout`에 지정된 시간보다 오래 걸리면 요청이 중단됩니다.

```javascript
timeout: 5000
```

### responseType

`responseType`은 서버로부터 어떠한 데이터 형식으로 응답받을지 지정하는 것입니다. 옵션으로는 'arraybuffer', 'document', 'json', 'text', 'stream'이 가능합니다. json이 기본값입니다.

```javascript
responseType: 'json'
```

### 기타 액시오스 요청 Config

Config 옵션은 메소드 별로 사용할 수 있는 옵션이 다르므로,  [액시오스 Request Config 문서](https://axios-http.com/docs/req_config)를 참고합니다.

## 기타 액시오스 API 

기타 액시오스 관련 예제와 API는 [액시오스 문서](https://github.com/axios/axios#example)를 참고합니다.
