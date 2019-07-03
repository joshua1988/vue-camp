<template>
  <div>
    <!-- {{ todoItems }} -->
    <!-- TODO: 쉬는 시간에 todoItems의 내용을 아래의 v-for 디렉티브로 표현 -->
    <ul>
      <li v-for="(todoItem, index) in items" 
        v-bind:key="index">
        <span>{{ todoItem + '(' + index + ')' }}</span>
        <button 
          v-on:click="removeItem(todoItem, index)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
	props: ['items'],
	// data() {
	// 	return {
	// 		todoItems: [],
	// 	};
	// },
	methods: {
		// fetchItems: function() {
		// 	// var arr = [];
		// 	for (var i = 0; i < localStorage.length; i++) {
		// 		var item = localStorage.key(i);
		// 		// arr.push(item);
		// 		this.todoItems.push(item);
		// 	}
		// 	// return arr;
		// },
		removeItem: function(text, index) {
			// 목록에서 1개씩 삭제
			this.todoItems.splice(index, 1);
			// 브라우저 저장소에서 삭제
			localStorage.removeItem(text);
			// 서버에 데이터 삭제 요청
			// axios.delete();
		},
	},
	// beforeCreate: function() {
	// 	console.log('1 beforeCreate');
	// },
	// created: function() {
	// 	// 컴포넌트가 생성되자마자 실행되는 로직
	// 	this.fetchItems();
	// 	// console.log('created this', this);
	// 	var vm = this;
	// 	bus.$on('clear', function() {
	// 		// console.log('bus 콜백', this);
	// 		vm.todoItems = [];
	// 	});
	// 	// console.log('2 created');
	// },
	// beforeMount: function() {
	// 	console.log('3 beforeMount');
	// },
	// mounted: function() {
	// 	console.log('4 mounted');
	// },
};
</script>

<style>
</style>
