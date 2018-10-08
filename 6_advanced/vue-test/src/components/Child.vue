<template>
  <div>
    <button @click="testEvent">test event</button>
  </div>
</template>

<script>
export default {
  methods: {
    testEvent() {
      this.$emit('test:event');
    }
  }
}
</script>