<template>
  <div>
    <ul>
      <li v-for="item in this.askItems" 
        v-bind:key="item.id">
        <router-link :to="`/item/${item.id}`">
          {{ item.title }}
        </router-link>
        <span> by 
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAsk, fetchNews } from '../api/index.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems: 'getAsk'
    }), // this.$store.state.ask AND this.askItems
  },
  // data() {
  //   return {
  //     askItems: [],
  //   }
  // },
  // methods: {
    // fetchData() {
    //   fetchAsk()
    //     .then((response) => {
    //       console.log(response);
    //       this.askItems = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  // },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response);
      // return response;
    },
    async fetchAskItems() {
      return await fetchAsk();
    }
  },
  async created() {
    await this.$store.dispatch('FETCH_ASK');
    // await this.fetchNewsItems();
    // await this.fetchAskItems();

    // this.fetchData();
  },
  beforeDestroy() {
    this.$store.commit('clearAskItems');
  }
}
</script>

<style>

</style>
