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

`.catch()` 를 통해 오류를 처리합니다. `error` 객체에서는 오류에 대한 주요 정보를 확인할 수 있습니다. 

```javascript
axios.get('/hello')
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    }
```

위와 같이 `.catch`에서 받아오는 `error` 객체를 통해 `error.response.status`  응답 상태코드와 `error.response.headers` 응답 헤더 정보를 파악할 수 있습니다. 

기타 에러 처리 방법은 [axios 에러 처리 문서](https://axios-http.com/docs/handling_errors)를 참고합니다.


## 액시오스 HTTP 요청 메서드 종류

액시오스에서 자주 사용되는 HTTP 요청 메서드를 알아보겠습니다.

### **axios.get(url[, config])**

서버에서 데이터를 가져올 때 사용하는 메서드입니다. 두 번째 파라미터 `config` 객체에는 헤더(header), 응답 초과시간 (timeout), 인자 값(params) 등의 요청 값을 같이 넘길 수 있습니다. 

```javascript
axios.get('users/1')
```

### axios.post(url[, data[, config]])

서버에 데이터를 새로 생성할 때 사용하는 메서드입니다. 두 번째 파라미터 `data`에 생성할 데이터를 넘깁니다. 

```javascript
axios.post('/books', { title: '1984' })
```

### **axios.put(url[, data[, config]])**

특정 데이터를 수정할 때 요청하는 메서드입니다. `put` 은 새로운 리소스를 생성하거나, 이미 존재하는 데이터를 대체할 때 사용됩니다. `post`와의 다른 점은 `post`는 여러 번 호출할 경우, 새로운 데이터가 지속적으로 추가됩니다. 반면, `put`은 한 번 요청을 하거나 여러 번 지속적으로 요청해도 결괏값이 동일합니다. 예를 들어, 아래 예시처럼 2번 유저의 이름을 `Iron Man`으로 수정하기 위해 `axios.put` 요청을 보냅니다. 이때, `put`요청을 한 번 보내거나 여러 번 보내도 2번 유저의 이름은 `Iron Man`으로 동일하게 수정됩니다.

```javascript
axios.put('users/2', { name: 'Iron Man' })
```

### **axios.delete(url[, config])**

특정 데이터나 값을 삭제할 때 요청하는 메서드입니다. 

```javascript
axios.delete('books/3')
```

## 액시오스 HTTP 요청 Config 옵션 

액시오스 요청을 할 때는 config 설정이 가능합니다.

### method

`method`는 요청을 할 때 사용할 요청 메서드입니다. `method`의 기본값은 get입니다.

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

`baseURL`은 액시오스 인스턴스를 생성할 때, 인스턴스의 기본 URL 값을 정할 수 있는 속성입니다. 보통 `http://mysite.com/api/v1/`처럼 API 서버의 기본 도메인을 설정하고, 인스턴스 별로 URL을 뒤에 추가하여 사용합니다. 

```javascript
baseURL: 'https://도메인.com/api/'
```

### headers

헤더를 수정해서 보내야 한다면 `headers`를 사용하면 됩니다.

```javascript
 headers: {'X-Requested-With': 'XMLHttpRequest'}
```
### params

`params`는 HTTP 요청에 붙일 URL 파라미터를 의미합니다. 예를 들어, 아래 예시 코드는 `https://domain.com`이라는 URL로 HTTP 요청을 보냈을 때 `https://domain.com?id=123`으로 전달하는 것과 같은 효과를 가집니다. 여기서 `params`가 `null`이나 `undefined`인 경우에는 파라미터가 조합되지 않습니다.

```javascript
params: {
    id: 123
}
```

### data

`data`는 HTTP 요청 보디에 실어서 보낼 데이터를 의미합니다. 주로 데이터를 조작해야 하는 PUT, POST, DELETE, PATCH 등의 메서드에서 사용합니다. 

```javascript
data: {
    firstName: 'Christine'
},
  
// 아래의 data config 설정은 POST 메서드에서만 사용이 가능합니다.

data: 'Age=26&City=New York'
```

### timeout

`timeout`은 HTTP 요청을 보내고 응답을 받기까지의 제한 시간을 설정하는 속성입니다. 요청 시간이 지정된 값을 초과하면 에러가 발생합니다.

```javascript
// 단위(millisecond)
timeout: 5000
```

### responseType

`responseType`은 서버로부터 어떠한 데이터 형식으로 응답받을지 지정하는 것입니다. 옵션으로는 arraybuffer, document, json, text, stream이 가능합니다. 기본 값은 json입니다.

```javascript
responseType: 'json'
```

### 기타 액시오스 요청 Config

Config 옵션은 메서드 별로 사용할 수 있는 옵션이 다르므로,  [액시오스 Request Config 문서](https://axios-http.com/docs/req_config)를 참고합니다.


## 기타 액시오스 API 

기타 액시오스 관련 예제와 API는 [액시오스 문서](https://github.com/axios/axios#example)를 참고합니다.
