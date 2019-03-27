<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add="addTodoItem"></todo-input>
    <!-- <todo-list 
      v-bind:하위 컴포넌트의 프롭스 속성="상위 컴포넌트의 데이터 속성">
      </todo-list> -->
    <todo-list 
      v-bind:propsdata="todoItems"
      v-on:remove="removeTodoItem"></todo-list>
    <todo-footer v-on:clear="clearItems"></todo-footer>
  </div>
</template>

<script>
// import 가져올 뷰 파일 from '뷰 파일 경로'
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  // 인스턴스 & 컴포넌트 옵션 속성
  components: {
    // '컴포넌트 이름': 컴포넌트 내용,
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter,
  },
  data: function() {
    return {
      todoItems: [],
    }
  },
  methods: {
    // fetchData: function() {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //       var item = localStorage.key(i);
    //       this.todoItems.push(item);
    //     }
    //   }
    // },
    removeTodoItem: function(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    },
    addTodoItem: function(value) {
      this.todoItems.push(value);
      localStorage.setItem(value, value);
    },
    clearItems: function() {
      this.todoItems = [];
      localStorage.clear();
    },
  },
  created: function() {
    // this.fetchData();
    // this.$store.commit('fetchTodoItems');
  },
}
</script>

<style>

</style>
