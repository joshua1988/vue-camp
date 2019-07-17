<template>
  <div>
    <div class="w-full max-w-xs mx-auto pt-32">
			<!-- <h1>{{ title + '!!' }}</h1>
			<h1>{{ title | exclamate }}</h1>
			<h1>{{ exclamatedTitle }}</h1>
			<h1>{{ currentDate | YYYY }}</h1> -->
			<form 
				v-on:submit.prevent="submitForm"
				class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div class="mb-4">
					<label class="block text-grey-darker text-sm font-bold mb-2" for="username">
						Username
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
						id="username" type="text" placeholder="Username"
						v-model="username">
					<p 
						class="text-red text-xs italic">Please enter an email.</p>
				</div>
				<div class="mb-6">
					<label class="block text-grey-darker text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input 
						class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
						v-bind:class="passwordValidationClass"
						id="password" type="password" placeholder="******************"
						v-model="password">
					<p 
						v-if="password.length === 0"
						class="text-red text-xs italic">Please choose a password.</p>
				</div>
				<div class="flex items-center justify-between">
					<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Sign In
					</button>
					<a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
						Forgot Password?
					</a>
				</div>
			</form>
			<p class="text-center text-grey text-xs">
				©2018 Captain Pangyo. All rights reserved.
			</p>
		</div>
  </div>
</template>

<script>
import $ from 'jquery';
// import { validateEmail } from '';

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default {
	data() {
		return {
			username: '',
			password: '',
			title: 'Vue Form',
			currentDate: new Date(),
			borderRedClass: 'border-red',
			// 'MM-DD-YYYY'
			// 'YYYY-MM-DD HH:MM'
		};
	},
	computed: {
		exclamatedTitle() {
			return this.title + '!!';
		},
		passwordValidationClass() {
			return {
				'border-red': this.password.length === 0,
				// 'text-green': title.length > 0,
				// 'box-shadow': isShadowApplied,
			};
		},
	},
	methods: {
		submitForm() {
			// console.log(event);
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users/',
				method: 'POST',
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8',
				data: JSON.stringify({
					name: this.username,
					password: this.password,
				}),
			})
				.then(response => {
					console.log(response);
					this.initForm();
				})
				.catch(error => {
					console.log(error);
				});
			// .finally(() => {
			// 	console.log(this);
			// 	this.initForm()
			// });
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
	// mounted() {
	// 	$(document).ready(function() {
	// 		$('form').on('submit', function(event) {
	// 			event.preventDefault();
	// 			// var username = $(this).find('#username');
	// 			// var password = $(this).find('#password');
	// 			// username.val('');
	// 			// password.val('');
	// 		});
	// 	});
	// },
};
</script>

<style>
</style>
