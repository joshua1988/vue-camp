<template>
  <div>
    <p>
      <router-link to="/main">Go to Main Page</router-link>
      <router-link to="/list">Go to List Page</router-link>
      <!-- 할일 #2 -->
      <!-- routes.js 에서 등록한 새로운 라우터로 이동할 수 있도록 아래에 router link 를 추가해보세요 -->

    </p>
    <!-- Router shows the pages below based on the chosen url -->
    <router-view></router-view>
  </div>
</template>
