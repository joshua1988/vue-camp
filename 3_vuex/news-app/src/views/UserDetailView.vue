<template>
  <div>
    <h1>사용자 정보 상세 페이지</h1>
    <div>
      {{ userInfo }}
    </div>
  </div>
</template>

<script>
import { fetchUserByName } from '../api/index'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  beforeMount() {
    const name 
      = this.$route.params.userId;
    fetchUserByName(name)
      .then(({ data }) => {
        this.userInfo = data;
      })
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>