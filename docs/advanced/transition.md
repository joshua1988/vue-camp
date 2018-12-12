---
title: Transition & Animation
---

# Transition & Animation

뷰는 라이브러리 내부적으로 트랜지션, 애니메이션 기능을 갖고 있습니다. 그래서 간단한 규칙과 속성들만 알면 쉽게 멋진 애니메이션 효과를 추가할 수 있습니다.

## 트랜지션 예시

뷰 트랜지션 코드를 간단히 살펴보겠습니다.

```html
<div>
  <button @click="showComment">show</button>
  <transiton name="fade">
    <p v-if="status">This is a comment</p>
  </transiton>
</div>
```

```js
new Vue({
  ...
  data: {
    status: false
  },
  methods: {
    showComment() {
      this.status = true;
    }
  }
})
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

위 코드에서 show 버튼을 클릭하면 This is a comment 라는 텍스트가 부드럽게 살며시 표시됩니다. 여기서 주목할 코드는 `<transition>`이라는 태그입니다.

`<transition>` 태그는 `name` 속성을 갖고 있고, 해당 `name` 속성과 연관된 CSS 코드가 위에 정의되어 있습니다. CSS 코드에 따라서 텍스트가 표시될 때 opacity의 값이 변화되고, 이에 따라 살며시 나타나는 효과를 볼 수가 있습니다.

## 트랜지션 클래스

앞의 코드에서 트랜지션 효과가 나타날 수 있었던 것은 바로 트랜지션 태그의 `name` 속성 덕택입니다. `name` 속성에 맞춰 아래와 같이 CSS 코드를 구현했었습니다.

```html {1}
<transition name="fade">
</transition>
```

```css {1,4}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
```

`fade-enter-active`, `fade-leave-active` 등에서 볼 수 있듯이 뷰의 트랜지션 CSS 코드는 일정한 규칙을 
갖습니다. 여기서 사용하는 CSS 클래스는 아래와 같이 6개가 있습니다.

![콘솔에서 확인한 인스턴스 내용](../.vuepress/public/images/transition-flow.png)

일반적으로 `v-enter`, `v-leave-to`를 함께 사용하고, `v-enter-to`, `v-leave`를 함께 사용합니다. 그림의 색깔을 보면 짝 지어져서 잘 구분되어 있습니다.