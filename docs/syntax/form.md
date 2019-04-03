---
title: Form Handling
---

# Form 다루기

폼(Form)은 웹 애플리케이션에서 가장 많이 사용되는 코드 형식입니다. 로그인이나 상품 결제 등 모든 곳에 사용자의 입력을 처리하는 폼이 필요합니다.

## Form 제작하기

그럼 뷰로 간단한 로그인 폼을 하나 만들어보겠습니다.

### 1. HTML 태그 구성

먼저 간단한 HTML 태그부터 아래와 같이 구성합니다.

```html
<form>
  <div>
    <label for="email">Email</label>
    <input id="email" type="text">
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password">
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
```

### 2. HTML 태그에 뷰 속성 추가

위에서 작성한 폼의 사용자 입력을 처리하려면 아래와 같이 구현합니다.

```html {1,4,8}
<form v-on:submit.prevent="loginUser">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" ref="email">
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" ref="password">
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>
```

각 인풋 박스의 입력 값을 가져오기 위해 `ref` 속성을 사용하였고, 로그인 버튼을 눌렀을 때의 처리를 위해 `v-on:submit` 디렉티브를 사용하였습니다. `.prevent`는 폼의 기본적인 동작을 막기 위한 modifier로써 흔히 사용하는 `event.preventDefault()` 코드와 같은 효과를 가집니다.

### 3. 로그인 버튼을 눌렀을 때의 처리

로그인 버튼을 클릭하면 `loginUser()` 메서드가 실행됩니다.

```js
new Vue({
  methods: {
    loginUser() {
      var email = this.$refs.email.value;
      var password = this.$refs.password.value;
      axios.post('/login', {
        email: email,
        password: password
      });
    }
  }
})
```

이메일과 비밀번호 값을 받아 HTTP POST 요청을 날려서 로그인 인증 과정을 거칩니다.

## Form Validation

폼에서 꼭 해줘야 하는 작업은 사용자의 입력이 유효한지 검사하는 작업입니다.
뷰에서는 [vee-validate](https://baianat.github.io/vee-validate/) [Vuelidate](https://monterail.github.io/vuelidate/)
등의 라이브러리로 폼의 유효성 검사를 할 수 있습니다.

라이브러리를 사용하는 것 이외에도 뷰의 기본 속성을 활용해서 아래와 같이 간단하게 유효성을 검사할 수 있습니다. 아래와 같은 간단한 인풋 박스가 있다고 합시다.

```html
<div>
  <label for="email">email</label>
  <input id="email" v-model="email" type="text">
</div>
```

```js
new Vue({
  data: {
    email: ''
  }
})
```

인풋 박스의 입력 값은 모두 v-model 디렉티브를 이용하여 `email` 이라는 뷰 인스턴스 데이터에 연결합니다.

만약 이 인풋 박스에 최소 10글자 이상 입력해야 한다면 어떻게 구현할 수 있을까요?

```html
<div>
  <label for="email">email</label>
  <input id="email" v-model="email" type="text">
  <small>{{ emailValidation }}</small>
</div>
```

```js
new Vue({
  data: {
    email: ''
  },
  computed: {
    emailValidation: function() {
      return this.email.length > 10 ? `` : `Length must be over 10`;
    }
  }
})
```

위와 같이 삼항 연산자를 이용해서 글자가 10개 이하면 게속 경고 표시가 뜨는 computed 속성을 구현하면 됩니다. 10글자 이하일 때는 계속 `<small>` 태그 안에 글자의 길이가 10 이상이어야 한다는 안내 문자가 표시됩니다.