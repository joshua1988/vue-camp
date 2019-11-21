<template>
  <div>
    <h1>News</h1>
    <div>
      <!-- {{ this.$store.state.jobs }} -->
      <ul>
        <!-- <li v-for="item in items" :key="item.id"> -->
				<li v-for="item in listItems" :key="item.id">
          <span>{{ item.title }}</span>
          <!-- TODO: 클릭했을 때 사용자 상세 페이지로 넘어가게 구현 -->
          <!-- <router-link>{{ item.user }}</router-link> -->
        </li>
      </ul>
    </div>
    <!-- <div v-if="!isLoading">
      {{ items }}
    </div>
    <div v-else>
      데이터 로딩 중입니다...
    </div> -->
  </div>
</template>

<script>
// ask url
// https://api.hnpwa.com/v0/ask/1.json
import axios from 'axios';
import { fetchNews } from '../api/index';
import DataFetchingMixin from '../mixins/DataFetchingMixin';

export default {
	mixins: [DataFetchingMixin],
	// vda
	data() {
		return {
			items: [],
			isLoading: true,
		};
	},
	// methods: {
	// 	fetchItems() {
	// 		const url = 'https://api.hnpwa.com/v0/news/1.json';
	// 		console.log('요청 시작');
	// 		this.isLoading = true;
	// 		axios
	// 			.get(url)
	// 			.then(response => {
	// 				console.log('요청 완료');
	// 				// console.log(response.data);
	// 				this.items = response.data;
	// 				this.isLoading = false;
	// 			})
	// 			.catch(error => {
	// 				console.log(error);
	// 			});
	// 	},
	// },
	// async created() {
	// 	// 프로미스 처리
	// 	// fetchNews()
	// 	// 	.then(response => {
	// 	// 		this.items = response.data;
	// 	// 	})
	// 	// 	.catch(error => {
	// 	// 		console.log(error);
	// 	// 	});

	// 	// async await 처리
	// 	const response = await fetchNews();
	// 	this.items = response.data;
	// },
};
</script>

<style></style>
