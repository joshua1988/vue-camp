<template>
  <div>
    <button @click="addCounter">add</button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    }
  },
  methods: {
    addCounter() {
      this.num += 1;
    }
  }
}
</script>

<style>

</style>
