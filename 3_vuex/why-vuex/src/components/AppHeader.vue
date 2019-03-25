<template>
  <div>
    <span><strong>{{ headerText }}</strong></span>
    <span>logged in as {{ this.$store.state.username }}</span>
  </div>
</template>

<script>
export default {
  props: ['username'],
  data() {
    return {
      text: "App"
    }
  },
  computed: {
    headerText() {
      return 'Simple' + this.text;
    }
  },
  created() {
    console.log(this);
  },
}
</script>

<style>

</style>
