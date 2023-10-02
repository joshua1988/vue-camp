---
title: Event Emit - setup() 🆕
---

# 이벤트 발생 - setup() <Badge text="Vue 3" />

이벤트 발생(event emit)은 하위 컴포넌트에서 상위 컴포넌트로 신호를 보내는 컴포넌트 통신 방식입니다. 컴포지션에서는 어떻게 컴포넌트 이벤트를 발생시킬 수 있는지 알아보겠습니다.

## 컴포넌트 이벤트 발생 

기존에 컴포넌트에서 이벤트를 발생시키는 방법은 [$emit() API](/vue/event-emit)였습니다.

```html
<script>
export default {
  methods: {
    changeTitle() {
      this.$emit('change');
    }
  }
}
</script>
```

위 코드는 하위 컴포넌트에서 상위 컴포넌트로 `change` 이벤트를 보내는 코드입니다. 이처럼 `$emit()` API를 이용하여 이벤트를 발생시킬 수 있습니다.

## setup()에서 이벤트 발생

이번엔 `setup()` 함수에서 이벤트를 발생시키는 방법을 알아보겠습니다.

```html
<script>
export default {
  setup(props, context) {
    context.emit('change');
  }
}
</script>
```

위 코드는 `setup()` 함수의 두 번째 파라미터 `context`를 이용하여 이벤트를 발생시킨 코드입니다. `setup()` 함수의 첫 번째 파라미터는 프롭스 속성을 의미하고 두 번째 파라미터는 이벤트를 발생시킬 수 있는 `emit`을 비롯하여 attrs, slots, expose 등을 가진 [컨텍스트 객체(Context Object)](https://vuejs.org/api/composition-api-setup.html#setup-context)를 의미합니다.

이 `context.emit()`은 기존 `$emit()`와 사용법이 동일합니다. 단순히 이벤트를 보낼 수도 있고 아래와 같이 이벤트의 인자를 넘길 수도 있습니다.

```js
context.emit('change'); // change 이벤트만 발생
context.emit('change', 100); // change 이벤트를 발생시키고 인자 100을 같이 넘김
```

## 이벤트 발생의 디스트럭처링 문법

`context.emit()`은 다음과 같이 디스트럭처링 문법을 사용해도 됩니다.

```html
<script>
export default {
  setup(props, { emit }) {
    emit('change');
  }
}
</script>
```

첫 번째 파라미터 `props`는 디스트럭처링을 썼을 때 [반응성이 사라지기 때문에 주의해야 했지만](/composition/props.html#디스트럭처링을-쓰고-싶다면), `emit`은 반응성이 주입된 값이 아니라 단순히 호출만 하는 API이기 때문에 반응성이 제거되는 부분을 걱정하지 않아도 됩니다.