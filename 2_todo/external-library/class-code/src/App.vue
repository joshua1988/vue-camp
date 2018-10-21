<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <date-picker 
            v-model="date"
            format="YYYY MM DD"
            v-bind:options="{ firstDay: 1 }"
            ></date-picker>
          <!-- value 값, 'input' 이벤트

          this.$emit('input', value);
          <div v-bind:value="value"></div> -->
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: '',
    }
  },
}
</script>

<style src="./assets/css/app.css"/>