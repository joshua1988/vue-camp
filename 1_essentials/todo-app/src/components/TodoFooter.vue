<template>
  <div>
    <!-- TODO: 아래 버튼 클릭했을 때 브라우저 저장소 초기화 -->
    <!-- 다 구현하신 분들은 TodoList.vue의 todoItems를 
    어떻게 비울 수 있을지 고민해보세요. -->
    <button @click="clearItems">clear all</button>
  </div>
</template>

<script>
import { bus } from '../utils/bus.js';

export default {
	methods: {
		clearItems() {
			localStorage.clear();
			// this.$emit('clear:event');
			bus.$emit('clear');
		},
	},
};
</script>

<style>
</style>
