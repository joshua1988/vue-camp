<template>
  <li v-bind:style="textStyle">
    <!-- #1 -->
    {{ item }}
    <!-- #2 -->
    <p>{{ item }}</p>
    <img src="" alt="">
  </li>
</template>

<script>
export default {
	props: ['item', 'textStyle'],
};
</script>

<style>
</style>
