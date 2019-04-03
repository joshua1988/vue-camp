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
import { fetchAsk } from '../api/index.js';
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
  created() {
    // this.fetchData();
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
