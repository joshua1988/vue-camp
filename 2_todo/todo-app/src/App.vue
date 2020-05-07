<template>
  <div>
    <!-- <p>{{ msg }}</p>
    <main v-if="show">메인</main> -->
    
    <!-- TODO: TodoInput, TodoList 컴포넌트 등록 -->
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
// import 컴포넌트 이름 from '컴포넌트 파일 경로';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList
  },
  data() {
    return {
      msg: 'hi',
      show: false
    }
  },
}
</script>

<style>

</style>