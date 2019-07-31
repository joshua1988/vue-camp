<template>
  <div>
    <p>{{ msg }}</p>
    <span>{{ debugDom('hello') }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hi'
    }
  },
  methods: {
    debugDom() {
      debugger
    }
  }
}
</script>

<style>

</style>
