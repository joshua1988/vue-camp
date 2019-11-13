<template>
  <div>
    <ul>
      <li v-for="item in fetchedAsk" v-bind:key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAsk } from "../api/index.js";

export default {
  data() {
    return {
      items: []
    };
  },
  computed: {
    fetchedAsk() {
      return this.$store.state.ask;
    }
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
    }
  },
  // TODO: 스토어의 액션을 이용해서 화면에 ask 아이템 30개를 뿌려보세요.
  // 쉬는 시간 9시까지
  // TODO: 다하신 분들은 웹 사이트의
  // Vuex 섹션(Concept, state, getters, actions 등) 다시 읽어보세요.
  created() {
    // this.fetchItems();
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style></style>
