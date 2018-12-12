<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearAllItems">Clear all</span>
  </div>
</template>

<script>
// import { bus } from '../utils/bus.js';

export default {
  methods: {
    clearAllItems: function() {
      this.$emit('clear');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>
