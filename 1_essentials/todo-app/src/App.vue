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
		TodoHeader,
		TodoInput,
		TodoList,
		// 'todo-footer': TodoFooter,
		// 'TodoFooter': TodoFooter,
		TodoFooter,
	},
	data() {
		return {
			todoItems: [],
		};
	},
	methods: {
		fetchItems() {
			// var arr = [];
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.key(i);
				// arr.push(item);
				this.todoItems.push(item);
			}
			// return arr;
		},
		addTodoItem(value) {
			// 배열에 추가
			this.todoItems.push(value);
			// 저장소에 저장
			localStorage.setItem(value, value);
		},
		removeTodoItem() {
			console.log(this);
			// TODO: 구현해보세요...
		},
		removeAllItems() {
			// TODO: 모든 아이템을 삭제하는 로직 구현...
		},
	},
	created() {
		this.fetchItems();
	},
};
</script>

<style>
</style>
