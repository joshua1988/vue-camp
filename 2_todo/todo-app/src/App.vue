<template>
  <div>
    <todo-header></todo-header>
    <todo-input v-on:add="addTodoItem"></todo-input>
    <todo-list 
      v-bind:todoItems="todoItems"
      v-on:remove="removeTodoItem"
    ></todo-list>
    <todo-footer v-on:clear="clearTodoItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
  components: {
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter
  },
  data() {
    return {
      todoItems: [],
    }
  },
  methods: {
    fetchItems: function() {
      for (var i = 0; i < localStorage.length; i++) {
        var value = localStorage.key(i);
        this.todoItems.push(value); 
      }
    },
    addTodoItem: function(item) {
      this.todoItems.push(item);
      localStorage.setItem(item, item);
    },
    removeTodoItem: function(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem);
    },
    clearTodoItems: function() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
  created: function() {
    this.fetchItems();
  }
}
</script>

<style>

</style>