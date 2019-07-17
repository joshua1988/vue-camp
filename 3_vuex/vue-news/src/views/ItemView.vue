<template>
  <div>
    {{item}}
  </div>
</template>

<script>
// TODO:
// 1. 질의 게시글 제목을 클릭했을 때 ItemView로 오게 해보세요.
// 2. 질의 게시글 데이터의 'id' 속성으로 아래 API를 호출하면 됩니다.
'https://api.hnpwa.com/v0/item/[아이템 id].json';
'https://api.hnpwa.com/v0/item/13831370.json';
import { fetchItem } from '../api/index.js';

export default {
	data() {
		return {
			item: {},
		};
	},
	methods: {
		fetchItemById(id) {
			fetchItem(id)
				.then(({ data }) => {
					// console.log(data);
					this.item = data;
				})
				.catch(error => console.log(error));
		},
	},
	created() {
		// 아이템 id로 데이터를 불러온다
		// console.log(this.$route.params.id);
		let id = this.$route.params.id;
		this.fetchItemById(id);
	},
};
</script>

<style>
</style>
