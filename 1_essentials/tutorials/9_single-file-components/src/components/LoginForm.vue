<template lang="html">
  <form method="post">
    <h6>This is a Local Component in App.vue</h6>
    <div class="">
      <label for="account">Email : </label>
      <input type="text" name="account" value="">
    </div>
    <div class="">
      <label for="password">Password : </label>
      <input type="password" name="password" value="">
    </div>
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">
input {
  border-style: groove;
}
h6 {
  margin: 0;
}
</style>
