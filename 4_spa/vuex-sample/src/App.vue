<template>
  <div>
    <h1>App 컴포넌트</h1>
    <p>{{ str }}</p>
    <button v-on:click="changeStr">change</button>
    <hr>
    <h1>Vuex 스토어</h1>
    <p>{{ this.$store.state.str }}</p>
    <button @click="changeState">change</button>
  </div>
</template>

<script>
export default {
	data() {
		return {
			str: 'hello',
		};
	},
	methods: {
		changeStr() {
			this.str = 'hello store';
		},
		// 버튼의 클릭 이벤트를 처리하는 메서드
		changeState() {
      console.log('clicked');
      this.$store.commit('changeString');
    },
	},
	created() {
		console.log(this.$store);
	},
};
</script>

<style>
</style>
