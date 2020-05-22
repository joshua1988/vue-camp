<template>
  <div>
    <h1>Slot 맛보기</h1>
    <Child>Hello World</Child>
    <Child>hi</Child>
    <Child>
      <h2>반갑습니다</h2>
    </Child>
    <Child>
      <blockquote>hahah</blockquote>
    </Child>
  </div>
</template>

<script>
import Child from '@/components/Child.vue';

export default {
  components: {
    Child
  }
}
</script>

<style>

</style>