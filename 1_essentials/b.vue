<template>
  <div>
    <p class="primary">Blue Text</p>
    <p v-bind:id="uuid" v-bind:class="primary">Blue Text</p>
    <p id="10" class="abc">Blue Text</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primary: 'abc',
      uuid: 10
    }
  },
}
</script>

<style>

</style>