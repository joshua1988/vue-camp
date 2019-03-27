<template>
  <div>
    watch
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hi',
    }
  },
  watch: {
    msg(value, oldValue) {
      console.log('changed value', value);
      console.log('old value', oldValue);
    }
  }
}
</script>

<style>

</style>
