<template>
  <div>
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
// import 가져올 뷰 파일 from '뷰 파일 경로'
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

// var TodoHeader = {
//   template: '<h1>todo app</h1>'
// }

// new Vue({
export default {
  // 인스턴스 & 컴포넌트 옵션 속성
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
  }
}
// })
</script>

<style>

</style>
