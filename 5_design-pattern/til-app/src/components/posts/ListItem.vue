<!-- <template functional> -->
<template>
	<li>
		<!-- 일반 컴포넌트 코드 -->
		<h4>{{ post.title }}</h4>
		<p>{{ post.contents }}</p>
		<!-- TODO: 아래 날짜 표기 방법을 좀 더 알아볼 수 있게 바꿔주세요. -->
		<!-- TODO: 10시 13분까지 휴식 -->
		<span>{{ post.createdAt }}</span>

		<!-- functional(데이터가 없는, 그냥 함수 같은) 컴포넌트 코드 -->
		<!-- <h4>{{ props.post.title }}</h4>
		<p>{{ props.post.contents }}</p>
		<span>{{ props.post.createdAt }}</span> -->
	</li>
</template>

<script>
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
};
</script>

<style></style>
