<template>
  <div>
    <h1>질문 상세 페이지</h1>
    <div>
      {{ result }}
    </div>
  </div>
</template>

<script>
import { fetchAskDetailById } from '../api/index';

export default {
  data() {
    return { result: {} }
  },
  created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    fetchAskDetailById(id)
      .then(response => this.result = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>