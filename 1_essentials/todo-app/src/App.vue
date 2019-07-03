<template>
  <div>
    <!-- <TodoHeader></TodoHeader>
    <TodoHeader/> -->
    <todo-header></todo-header>
    <todo-input
      v-on:add="addTodoItem"
    ></todo-input>
    <todo-list
      v-bind:items="todoItems"
    ></todo-list>
    <todo-footer></todo-footer>
  </div>
  </template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
	// 인스턴스 옵션 속성
	components: {
		// '컴포넌트 이름': 컴포넌트 내용,
		'todo-header': TodoHeader,
		'todo-input': TodoInput,
		'todo-list': TodoList,
		'todo-footer': TodoFooter,
	},
	data() {
		return {
			todoItems: [],
		};
	},
	methods: {
		fetchItems: function() {
			// var arr = [];
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.key(i);
				// arr.push(item);
				this.todoItems.push(item);
			}
			// return arr;
		},
		addTodoItem: function(value) {
			// 배열에 추가
			this.todoItems.push(value);
			// 저장소에 저장
			localStorage.setItem(value, value);
		},
		removeTodoItem: function() {
			// TODO: 구현해보세요...
		},
		removeAllItems: function() {
			// TODO: 모든 아이템을 삭제하는 로직 구현...
		},
	},
	created: function() {
		this.fetchItems();
	},
};
</script>

<style>
</style>
