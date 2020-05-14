<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add="addItem"></todo-input>
    <!-- <todo-list v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></todo-list> -->
    <todo-list 
      v-bind:propsdata="todoItems"
      v-on:remove="removeItem"
    ></todo-list>
    <!-- <todo-footer v-on:하위에서 발생한 이벤트 이름="상위에서 실행할 메서드 이름"></todo-footer> -->
    <todo-footer v-on:clear="clearItems"></todo-footer>
    <!-- <TodoFooter></TodoFooter> -->
  </div>
</template>

<script>
// import 컴포넌트 이름 from '컴포넌트 파일 경로';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    fetchTodoItems: () => {
      // var arr = [];
      for (var i = 0; i < localStorage.length; i++) {
        var value = localStorage.key(i);
        this.todoItems.push(value);
      }
      // return arr;
    },
    clearItems() {
      this.todoItems = [];
      localStorage.clear();
    },
    addItem(todoItem) {
      this.todoItems.push(todoItem);
      localStorage.setItem(todoItem, todoItem);
    },
    removeItem(todoItem, index) {
      // 배열 변경
      this.todoItems.splice(index, 1);
      // 브라우저 저장소(DB)에서 삭제
      localStorage.removeItem(todoItem);
    }
  },
  created() {
    this.fetchTodoItems();
  },
  // watch,
  // computed,
  // data,
  // methods.
}
</script>

<style>

</style>