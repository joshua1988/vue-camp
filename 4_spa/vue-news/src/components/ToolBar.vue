<template>
  <header>
    <!-- 특정 URL로 이동하는 태그 -->
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  padding: 10px 15px;
  background-color: #41b883;
  color: white;
}
a {
  text-decoration: none;
}
a:visited {
  color: white;
}
a:active {
  text-decoration: underline;
}
a:hover {
  color: #34495e;
  text-decoration: underline;
}
</style>
