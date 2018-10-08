<template>
  <div>
    <p>{{ message }}</p>
    <child @test:event="message = 'a message from Child'"></child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child
  },
  data() {
    return {
      message: 'a message from Parent'
    }
  }
}
</script>