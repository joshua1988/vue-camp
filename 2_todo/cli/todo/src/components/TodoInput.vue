<template>
  <div>
    <input type="text" v-model="inputText" v-on:keyup.enter="addItem">
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      inputText: '',
    }
  },
  methods: {
    addItem: function() {
      var value = this.inputText;
      this.$emit('add', value);
      // localStorage.setItem(value, value);
      this.initForm();
    },
    initForm: function() {
      this.inputText = '';
    }
  }
}
</script>

<style>

</style>
