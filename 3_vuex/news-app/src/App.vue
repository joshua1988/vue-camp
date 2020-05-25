<template>
  <div>
    <header>
      <router-link to="/news">News</router-link> |
      <!-- <a href="/news">News</a> -->
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </header>
    <router-view></router-view>

    <!-- <h1>뷰엑스 - 상태 관리</h1>
    <p>{{ msg }}</p>
    <button v-on:click="changeMsg">변경</button>
    <hr />
    <p>{{ $store.state.msg }}</p>
    <button v-on:click="$store.commit('changeMsg')">변경</button> -->
  </div>
</template>

<script>
import Child from '@/components/Child.vue';

export default {
  // computed: {},
  // watch: {},
  // beforeMount() {},
  // created() {

  // },
  components: {
    Child,
  },
  data() {
    return {
      msg: 'hello',
    };
  },
  methods: {
    changeMsg() {
      this.msg = this.msg + '!';
    },
  },
  created() {
    console.log(this);
    // 뮤테이션 호출하는 API
    // this.$store.commit('뮤테이션 명', 인자);
    // 액션 호출하는 API
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
