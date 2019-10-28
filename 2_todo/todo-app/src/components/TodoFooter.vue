<template>
  <div>
    <button v-on:click="clearItems">clear all</button>
  </div>
</template>

<script>
// TODO: clear all 버튼을 눌렀을 때 아래 API를 호출해서 저장소의 값을 다 지워보세요.
// 로컬스토리지의 데이터를 모두 삭제하는 API
// TODO: 버튼 클릭했을 때 TodoList의 배열을 초기화 할 방법에 대해 고민해보세요.
import { bus } from '../utils/bus.js';

export default {
  methods: {
    clearItems: function() {
      // localStorage.clear();
      this.$emit('clear');
      // bus.$emit('clear');
    }
  }
}
</script>

<style>

</style>