<template>
  <div>
    <button v-on:click="clearItems">clear all</button>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
  methods: {
    clearItems: function() {
      // localStorage.clear();
      // bus.$emit('clear');
      this.$emit('clear');
    }
  }
}
</script>

<style>
.blue-text {
  color: blue;
}
</style>
