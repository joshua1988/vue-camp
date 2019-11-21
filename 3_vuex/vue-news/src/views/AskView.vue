<template>
  <div>
    <ul>
      <li 
        v-for="item in fetchedAsk" 
        v-bind:key="item.id"
        class="list-item">
        <div class="points">{{ item.points }}</div>
        <div>
					<!-- 쉬는 시간 9시 5분까지 -->
					<!-- TODO: 클릭했을 때 상세 질의글로 이동할 수 있게 구현 -->
					<!-- 절차 -->
					<!-- 1. 라우터 페이지 정보 생성 -->
					<!-- 3. 아래 타이틀을 클릭했을 때 이동할 수 있게 router-link 구현 -->
					<!-- 2. API 함수 생성 -->
					<!-- 4. 상세 질의 글 페이지에 진입하자마자 데이터 호출하여 화면에 표시 -->
          <!-- <p class="title">{{ item.title }}</p> -->
					<router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          <div>
            <span>{{ item.time_ago }}</span>, 
            <!-- <strong><span></span></strong> -->
            <router-link v-bind:to="'/user/' + item.user">
            <!-- <router-link v-bind:to="`/user/${item.user}`"> -->
              {{ item.user }} <!-- david -->
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template> 

<script>
import { fetchAsk } from '../api/index.js';

export default {
	data() {
		return {
			items: [],
		};
	},
	computed: {
		fetchedAsk() {
			return this.$store.state.ask;
		},
	},
	methods: {
		// response = {
		// 	headers: {},
		// 	config: {},
		// 	data: {},
		// 	// ..
		// }

		fetchItems() {
			fetchAsk()
				.then(({ data }) => {
					this.items = data;
				})
				.catch(error => {
					console.log(error);
				});
			// const url = 'https://api.hnpwa.com/v0/ask/1.json';
			// axios.get();
		},
	},
	// TODO: 스토어의 액션을 이용해서 화면에 ask 아이템 30개를 뿌려보세요.
	// 쉬는 시간 9시까지
	// TODO: 다하신 분들은 웹 사이트의
	// Vuex 섹션(Concept, state, getters, actions 등) 다시 읽어보세요.
	created() {
		// this.fetchItems();
		this.$store.dispatch('FETCH_ASK');
	},
};
</script>

<style></style>
