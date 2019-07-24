<template>
  <div>
    <user-form 
      v-on:pass:id="passEvent">
    </user-form>
      <!-- v-on:pass:id="$emit('pass2:id')"> -->
  </div>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
	components: {
		UserForm,
	},
	methods: {
		passEvent(value) {
			// console.log(value);
			this.$emit('pass2:id', value);
		},
	},
};
</script>

<style>
</style>
