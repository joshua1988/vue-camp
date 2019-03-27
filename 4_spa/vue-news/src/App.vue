<template>
  <div>
    <header>
      <!-- 특정 URL로 이동하는 태그 -->
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link>
    </header>
    <!-- URL에 따라 컴포넌트가 표시되는 영역 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    // this.$router.push('/news');
    // console.log(this.$router);
  }
}
</script>

<style>

</style>
