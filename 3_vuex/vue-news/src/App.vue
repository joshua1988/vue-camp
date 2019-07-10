<template>
  <div>
    <header>
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </header>
    <!-- 컴포넌트가 뿌려지는 영역 -->
    <router-view></router-view>
  </div>
</template>

<style>
@import './assets/css/common.css';
</style>
