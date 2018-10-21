<template>
  <input 
    :value="value"
    ref="datepicker" class="form-input" id="datepicker" type="text" placeholder="YYYY-MM-DD">
</template>

<script>
export default {
  // TODO #6 : App.vue에서 지정한 format 필드를 props 속성으로 받아서 지정해보세요.
  props: ['value', 'format', 'options'],
  mounted() {
    // var vm = this (컴포넌트를 의미);

    const picker = new this.$_Pikaday({
      field: this.$refs.datepicker,
      format: this.format,
      onSelect: () => {
        // console.log(this);
        // this(Pikaday 라이브러리)
        // this.date = picker.toString();
        this.$emit('input', picker.toString());
      },
      ...options,
      // firstDay : 1,
      // minDate: 100

      // { firstDay : 1, minDate: 100 }
    });
  }
}
</script>

<style>

</style>
