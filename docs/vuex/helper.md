---
title: Helpers
---

# 헬퍼 함수

헬퍼 함수는 뷰엑스 기술 요소들을 컴포넌트에서 더 편하게 쓸 수 있도록 도와주는 API입니다. 얼마나 더 편해지는지 일반적인 사용 방식과 헬퍼 함수의 사용 방식을 비교해보겠습니다.

## 일반적인 getters 접근 방법

reverseMessage라는 getters 속성을 컴포넌트에서 접근하려면 아래와 같이 구현해야 합니다.

```html
<div>{{ this.$store.getters.reverseMessage }}</div>
```

```js
export default {
  computed: {
    reverseMessage() {
      return this.$store.getters.reverseMessage;
    }
  }
}
```

## 헬퍼 함수의 사용 방식

이를 좀 더 편하게 접근하려면 아래와 같이 구현할 수 있습니다.

```html
<div>{{ reverseMessage }}</div>
```

```js
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['reverseMessage'])
  }
}
```

위의 `...`는 ES6의 Spread Operator를 의미합니다. 헬퍼 함수를 사용할 때는 무조건 함께 사용하는 것이 좋습니다. `mapGetters()`는 스토어의 getters 속성을 `this.$store.getters....` 이런 식으로 접근하지 않
고 바로 접근할 수 있게 해줍니다.

## 헬퍼 함수의 종류

뷰엑스의 기술 요소 전부 헬퍼 함수를 갖고 있습니다. 사용법은 다음과 같습니다.

```js
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(),
    ...mapGetters()
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
  }
}
```

mapState와 mapGetters는 computed 속성에 주로 사용하고, mapMutations와 mapActions는 메서드에 주로 연결됩니다.