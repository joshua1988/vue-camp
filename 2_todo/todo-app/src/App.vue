<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input 
      v-on:add="addItem"></todo-input>
    <!-- <todo-list v-bind:프롭스 속성 명="상위 컴포넌트의 데이터 속성 이름"></todo-list> -->
    <todo-list 
      v-bind:todolist="todoItems"
      v-on:delete="deleteItem"></todo-list>
    <todo-footer v-on:clear="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter,
  },
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    logText: function() {
      console.log('received');
    },
    deleteItem: function(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    },
    addItem: function(value) {
      this.todoItems.push(value);
      localStorage.setItem(value, value);
    },
    clearAllItems: function() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
  created: function() {
    for (var i = 0; i < localStorage.length; i++) {
      this.todoItems.push(localStorage.key(i));
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
