<template>
  <input 
    class="form-input" 
    id="datepicker" 
    type="text"
    ref="datePicker"
    placeholder="YYYY-MM-DD"
    v-bind:value="value">
</template>

<script>
import Pikaday from 'Pikaday';

export default {
  // props: ['value', 'format'],
  props: {
    value: {
      required: true,
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    options: {
      type: Object,
      default: {},
    },
  }, 
  // TODO #4 : field 속성에 직접 DOM 접근 방식이 아닌 Vue.js의 DOM 접근 방식을 적용해보세요.
  // TODO #5 : App.vue에서 입력 받을 날짜를 뷰에서 인식할 수 있게 props 속성과 event emit을 구현해보세요.
  // TODO #6 : App.vue에서 지정한 format 필드를 props 속성으로 받아서 지정해보세요.
  // TODO #3 : 날짜 선택기 영역을 별도의 컴포넌트로 분리해보세요. 컴포넌트 명은 DatePicker 사용
  mounted() {
    // var vm = this;
    const picker = new Pikaday({
      // field: document.querySelector('#datepicker'),
      field: this.$refs.datePicker,
      format: this.format,
      // TODO #2 : 인풋 태그에서 선택한 날짜를 뷰 data 속성에서 관리할 수 있게 구현하세요.
      onSelect: () => {
        // this.date = picker.toString();
        // this.$emit('select', picker.toString());
        // this.value = picker.toString();
        this.$emit('input', picker.toString());
      },
      ...this.options,
    });
  }
}
</script>

<style>

</style>
