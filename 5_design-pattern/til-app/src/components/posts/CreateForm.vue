<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="post-title">제목:</label>
			<input id="post-title" type="text" v-model="title" />
		</div>
		<div>
			<label for="post-contents">내용:</label>
			<textarea id="post-contents" type="text" v-model="contents" />
		</div>
		<button type="submit">생성</button>
	</form>
</template>

<script>
import { createPost } from '../../api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
