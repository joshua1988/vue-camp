<!-- <template functional> -->
<template>
	<li>
		<!-- 일반 컴포넌트 코드 -->
		<h4>{{ post.title }}</h4>
		<p>{{ post.contents }}</p>
		<!-- 메서드를 이용한 날짜 포맷팅 -->
		<p>{{ formatDate(post.createdAt) }}</p>
		<!-- 필터를 이용한 날짜 포맷팅 -->
		<p>{{ post.createdAt | formatDate }}</p>
		<!-- <span>{{ '메서드 실행 결과 - ' + formatDate('2019-11-25') }}</span> -->
		<!-- <button @click="formatDate">날짜 형식 바꾸기</button> -->

		<!-- functional(데이터가 없는, 그냥 함수 같은) 컴포넌트 코드 -->
		<!-- <h4>{{ props.post.title }}</h4>
		<p>{{ props.post.contents }}</p>
		<span>{{ props.post.createdAt }}</span> -->
	</li>
</template>

<script>
// Vue.filter('formatDate', function() {
// 	return new Date(date).toLocaleString();
// })

export default {
	props: {
		post: {
			type: Object,
			required: true,
			// default: () => ({
			// 	title: '',
			// 	contents: '',
			// 	createdAt: '',
			// }),
		},
	},
	// filters: {
	// 	formatDate(date) {
	// 		// console.log(date);
	// 		return new Date(date).toLocaleString();
	// 	},
	// },
	methods: {
		// crud
		// format
		formatDate(date) {
			// console.log(date);
			return new Date(date).toLocaleString();
		},
	},
	// created() {},
	// data() {},
	// watch: {},
	// methods: {},
};

// new Vue({
// 	el: '#app',
// 	render: h => h(App),
// 	components: {
// 		'app-header': {
// 			template: 'sss',
// 			functional: true,
// 		}
// 	}
// });

// created, -> Object.defineProperty(); ReactiveGetter, ReactiveSetter
// beforeMount, -> template -> render function
// mounted,
// beforeDestroy
</script>

<style></style>
