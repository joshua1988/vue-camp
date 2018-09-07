<template>
  <input type="checkbox" :value="value" @click="toggle">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  }
}
</script>