<template>
	<div>
		<h1>Today I learned</h1>
		<button class="create" @click="routeAdd">+</button>
		<div>
			<!-- TODO: 9시 15분까지 실습 -->
			<!-- TODO: 1. 학습 노트 데이터 생성 후 HomeView에서 데이터 리스트 표시 -->
			<!-- TODO: 아래 마크업 구조를 컴포넌트화 해볼 것 -->
			<!-- TODO: 2. 로그인 한 상태에서 페이지 네비게이션이 가능하도록 헤더에 로고 이미지 추가 -->
			<!-- TODO: 이미지는 뷰 기본 로고를 쓰거나 별도 이미지 사용해도 됨-->
			<!-- TODO: 3. 로그인하고 새로 고침 했을 때 로그인 되어 있는 사용자의 username 표시 -->
			<!-- <ul>
				<li style="color:blue;">item 1</li>
				<li>item 2
					<span>dlfkjlfk</span>
				</li>
				<li>item 3</li>
			</ul> -->

			<ul>
				<ListItem v-for="post in posts" :key="post._id" :post="post">
				</ListItem>
				<!-- <li v-for="post in posts" :key="post._id">
					<h4>{{ post.title }}</h4>
					<p>{{ post.contents }}</p>
					<span>{{ post.createdAt }}</span>
				</li> -->
			</ul>

			<!-- 시나리오 1
			- PostList
				- PostListItem
			
			시나리오 2
			- ListItem -->
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '../api/posts';
import ListItem from '@/components/posts/ListItem.vue';

export default {
	components: {
		ListItem,
	},
	data() {
		return {
			posts: [],
		};
	},
	async created() {
		const { data } = await fetchPosts();
		this.posts = data.posts;
	},
	methods: {
		routeAdd() {
			this.$router.push('/add');
		},
	},
};

// 액시오스 응답
// {
// 	headers: {},
// 	data: {
// 		posts: []
// 	},
// 	status: {},
// 	config: {},
// }
// const response = 응답;
// const { data } = 응답;
// const { data: { posts } } = 응답;
// console.log(posts);
</script>

<style scoped>
.create {
	width: 60px;
	height: 60px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	background: skyblue;
	border: 3px solid white;
	outline: none;
}
</style>
