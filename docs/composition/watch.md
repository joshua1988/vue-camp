---
title: Watch API
---

# watch API

watch API는 컴포지션(Composition API) 안에서 사용된 [watch 속성](/syntax/watch.html)을 의미합니다. 이 페이지에서는 컴포지션에서 
watch 속성을 어떻게 사용할 수 있는지 살펴보겠습니다.

:::tip
watch 속성은 data, computed, state 등 반응성이 주입된 값이 변했을 때 특정 로직을 실행하게 해주는 속성입니다.
:::

<!-- computed API와 유사하게 작성 -->

## watch API 소개

watch API를 이해하기 위해 먼저 watch 속성을 살펴보겠습니다. 아래는 인스턴스 옵션 속성 방식으로 작성된 watch 속성 코드입니다.

```html
<script>
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log(newValue);
    }
  }
}
</script>
```

위 코드는 `message` 값을 변경할 때마다 브라우저 콘솔에 변경된 값이 출력되는 코드입니다.

이번엔 위 코드를 컴포지션 스타일의 watch API로 변경해 보겠습니다.

```html
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    // data
    const message = ref('');

    // watch
    watch(message, (newValue, oldValue) => {
      console.log(newValue);
    });
  }
} 
</script>
```

앞에서 살펴본 코드와 동일하게 변화를 감지할 데이터를 watch API의 첫 번째 인자로 선언하고, 두 번째 인자에 실행될 로직을 적었습니다.
