---
title: Mixins
---

# 믹스인

믹스인(Mixins)은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법입니다. 믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션입니다.

## 믹스인 코드 형식

믹스인 문법은 아래와 같습니다.

```js
var HelloMixins = {
  // 컴포넌트 옵션 (data, methods, created 등)
};

new Vue({
  mixins: [HelloMixins]
})
```

위와 같이 믹스인을 주입할 컴포넌트에 `mixins` 속성을 선언하고 배열 `[]` 안에 주입할 믹스인들을 추가합니다.

## 믹스인 사용 예시

그럼 실제로 있을 법한 믹스인 코드 예시를 보겠습니다. 웹 애플리케이션을 구현할 때 많이 사용되는 다이얼로그(모달 혹은 팝업 창)의 열기, 닫기 로직을 믹스인에 정의했습니다.

```js
var DialogMixin = {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
```

`DialogMixin`에는 다이얼로그의 표시 상태를 나타내는 `dialog` 데이터와 다이얼로그를 열거나 닫는 메서드 `showDialog()`, `closeDialog()`가 정의되어 있습니다. 이제 이 믹스인을 컴포넌트에 어떻게 주입할까요? 아래 코드를 보겠습니다.

```html
<!-- LoginForm.vue -->
<script>
import { DialogMixin } from './mixins.js';

export default {
  // ..
  mixins: [ DialogMixin ]
  methods: {
    submitForm() {
      axios.post('login', {
        id: this.id,
        pw: this.pw
      })
      .then(() => this.closeDialog())
      .catch((error) => new Error(error));
    }
  }
}
</script>
```

믹스인을 사용할 수준이 되면 보통은 싱글 파일 컴포넌트 체계에서 ES6를 능숙하게 사용하고 있을겁니다. 위의 코드는 ES6의 모듈화 문법을 이용해 믹스인을 다른 파일에서 가져와서 주입하는 코드입니다. `submitForm()` 메서드에서 HTTP POST 요청을 보내고 나면 `this.closeDialog()`로 메서드를 호출하는데 이 메서드는 믹스인에 의해 주입된 메서드입니다. 따라서 LoginForm 컴포넌트에 없더라도 사용할 수 있습니다.