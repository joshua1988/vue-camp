<template>
  <input :value="value" class="form-input" ref="input" id="datepicker" type="text" placeholder="YYYY-MM-DD">
</template>

<script>
import Pikaday from 'Pikaday';

export default {
  // props: ['value'],
  props: {
    value: {
      required: true
    },
    format: {
      default: 'YYYY-MM-DD'
    },
    options: {
      default: {}
    },
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit('input', picker.toString());
        // this.date = picker.toString();
      },
      ...this.options
    });
  }
}
</script>

<style>

</style>
