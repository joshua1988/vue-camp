<template>
  <my-app v-bind:myNumber></my-app>
</template>

<script>
var app-counter
var appCounter

var myNumber

new Vue({
  // 자바스크립트
  components: {
    "app-header": {
      props: ['appCounter']
    }
  }
});
</script>

<style>
</style>