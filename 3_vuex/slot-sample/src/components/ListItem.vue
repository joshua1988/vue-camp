<template>
  <!-- <li v-bind:style="appStyle">{{ title }}</li> -->
  <li>
    <!-- <p>{{ title }}</p> -->
    <slot name="text"></slot>
    <slot name="image"></slot>
  </li>
</template>

<script>
export default {
  props: ['title', 'appStyle']
}
</script>

<style>

</style>