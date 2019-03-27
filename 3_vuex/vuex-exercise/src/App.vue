<template>
  <div>
    <!-- <p>{{ msg }}</p> -->
    <p>{{ this.msg }}</p>
    <button @click="changeMessage">change msg</button>
    <!-- <p>{{ this.$store.getters.messages.exclaimMessage }}</p> -->
    <div>
      <button @click="fetchUser">get user</button>
      <div>
        {{ this.result }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  // data() {
  //   return {
  //     result: ''
  //   }
  // },
  // ES5
  computed: mapState(['msg', 'result']), 
  // computed: {
  //   msg() {
  //     return this.$store.state.msg;
  //   },
  //   exMessage() {
  //     return this.$store.getters.exclaimMessage;
  //   }
  // },
  // // computed: mapGetters(['exclaimMessage']),
  // computed: mapGetters({ 
  //   exMessage: 'exclaimMessage'
  // }),
  // // ES6
  // computed: {
  //   ...mapState(['msg']),
  //   ...mapGetters(['exclaimMessage']),
  // },

  // mapGetters(['exclaimMessage']),
  methods: {
    changeMessage() {
      this.$store.commit('changeMessage');
      // console.log(this.$store);
    },
    fetchUser() {
      // fetch('https://jsonplaceholder.typicode.com/users/1')
      //   .then(response => response.json())
      //   .then(json => this.result = json);
      this.$store.dispatch('FETCH_USER');
    }
  },
}
</script>

<style>

</style>
