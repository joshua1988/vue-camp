<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { fetchUser } from '../api/index.js';

export default {
  data() {
    return {
      user: {},
    }
  },
  created() {
    const username = this.$route.params.id;
    fetchUser(username)
      .then(response => this.user = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
