<template>
  <!-- <button v-on:click="clearTodoItems">clear</button> -->
  <button v-on:click="$emit('clear')">clear</button>
</template>

<script>
// [쉬는 시간 할 일 - 9시 10분까지]
// 1. 버튼 하나 생성
// 2. 버튼 클릭했을 때 할 일 목록을 전부 삭제
//   - (필수) 브라우저 저장소의 값 모두 삭제
//   - (선택) TodoList의 값 모두 삭제
export default {
  // methods: {
  //   clearTodoItems: function() {
  //     this.$emit('clear');
  //   }
  // }
}
</script>

<style>

</style>