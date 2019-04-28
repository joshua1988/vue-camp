<template>
  <div class="form-wrapper">
    <h1>Create Post</h1>
    <form @submit.prevent="submitForm" class="form">
      <div>
        <label for="title">Title :</label>
        <input id="title" type="text" v-model="title">
      </div>
      <div>
        <label for="contents">Contents :</label>
        <textarea name="contents" id="contents" cols="30" rows="5" v-model="contents"></textarea>
				<p class="validation-text" :class="{ 'reverse': isContentTooLong }">
					<span v-if="isContentTooLong" class="warning">Maximum Length is 50</span>
					<span>{{ contentsLength }} / 50</span>
				</p>
      </div>
      <button 
				type="submit" 
				class="btn" 
				:class="isButtonDisabled" 
				:disabled="isButtonDisabled">Create</button>
    </form>
		<p class="log">
      {{ resultMessage }}
    </p>
  </div>
</template>

<script>
import { createNewPost } from '../../api';
import bus from '../../utils/bus.js';

export default {
	data() {
		return {
			title: '',
			contents: '',
			resultMessage: '',
		};
	},
	computed: {
		contentsLength() {
			return this.contents.length;
		},
		isContentTooLong() {
			return this.contents.length > 50;
		},
		isButtonDisabled() {
			return (!this.title || !this.contents || this.contents.length > 50) ? 'disabled' : null;
		},
	},
	methods: {
		async submitForm() {
			try {
				const response = await createNewPost({
					title: this.title,
					contents: this.contents,
				});
				bus.$emit('show:toast', `${response.data.title} was created`);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
				this.resultMessage = error.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form {
	width: 420px;
	height: 100%;
}
.form textarea {
	margin-bottom: 0;
}
.form .validation-text {
	margin-bottom: 1rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}
.form .validation-text.reverse {
	flex-direction: row;
}
.btn {
	background-color: #3fc1c9;
	color: white;
}
.log {
  width: 420px;
}
</style>