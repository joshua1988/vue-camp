---
title: Getting Started
isDeploy: false
---

# Vue.js에서 타입스크립트를 시작하는 방법


## shims-vue.d.ts

```js
declare module "*.vue" {
  import Vue from 'vue';
  export default Vue;
}
```

Which basically means, "every time you import a module with the name *.vue (wildcards are supported), then don't actually do it - instead treat it as if it had these contents".