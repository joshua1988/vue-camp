<template>
  <div>
    <h1>구직 정보 페이지</h1>
    <div>
      <!-- 
        TODO: 뷰엑스를 이용해서 화면에 구직 정보를 표시해보세요. 
        - fetchJobs API를 store/index.js 에서 임포트 필요
        - actions, mutations, state 선언 필요
        - 10시 20분까지 해보세요..!
      -->
      <ul>
        <li v-for="in $store.state.newsItems"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
