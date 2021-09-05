---
title: v-slot
---

# v-slot

Vue 2.6.0에서 `v-slot` 디렉티브가 새롭게 소개되었습니다. 기존의 스콥드 슬롯(Scoped Slot)은 Vue 3.0 에서 사라집니다.

## 스콥드 슬롯의 문제점

[스콥드 슬롯](/reuse/scoped-slot.html)은 슬롯을 사용할 때, 하위 컴포넌트의 값을 상위 컴포넌트에서 참조할 수 있게 합니다. 

처음 스콥드 슬롯이 소개되었을 때, `<template slot-scope>` 라는 장황한 문법을 사용해야했습니다.

```html {3,5}
<!-- 상위 컴포넌트 -->
<foo>
  <template slot-scope="fooProp">
    <div>{{ fooProp }}</div>
  </template>
</foo>
```

스콥드 슬롯을 사용하기 위해서 `<template>` 태그를 계속 사용해야했기 때문에 2.5 버전에서는 스콥드 슬롯을 `<template>` 태그 대신, 표현하고자 하는 태그에 직접 작성할 수 있도록 변경되었습니다.

```html {2}
<foo>
  <div slot-scope="fooProp">{{ fooProp }}</div>
</foo>
```

이 처럼 HTML의 태그 뿐 아니라 컴포넌트 태그에서도 스콥드 슬롯을 표현할 수 있습니다.

```html {2}
<foo>
  <bar slot-scope="fooProp">{{ fooProp }}</bar>
</foo>
```

하지만 위와 같이 사용했을 때, 어떤 컴포넌트의 `slot-scope` 변수를 사용하는지 명확하지 않다는 문제점이 발생합니다.

```html
<foo>
  <bar slot-scope="fooProp">
    <baz slot-scope="barProp">
      <div slot-scope="bazProp">
        {{ fooProp }} {{ barProp }} {{ bazProp }}
      </div>
    </baz>
  </bar>
</foo>
```

자식 컴포넌트인 `<foo>` 가 스콥드 슬롯을 사용하기 위해 `<bar>` 에 `slot-scope` 를 사용했고, 이어서 `<bar>` 는 이어서 `<baz>` 에 사용했습니다. 이렇게 중첩된 컴포넌트에서 스콥드 슬롯을 사용하게 되면 어떤 컴포넌트가 어떤 props을 올려주고 있는지 명확하지 않게 됩니다.

2.5 버전에서 스콥드 슬롯을 사용할 때, `slot-scope` 속성을 `<template>` 에만 사용하는 것이 아니라 기존 태그에 사용할 수 있도록 허용한 것이 문제가 되었습니다. 따라서, `v-slot` 디렉티브가 등장하게 되었습니다.
