<template>
  <div>
    <button @click="login">Login</button>
    <!-- TODO: 버튼을 눌렀을 때 아래와 같은 동작을 구현해주세요. -->
    <!-- 1. `url1`을 이용해서 사용자 정보를 요청
    2. 호출 받은 사용자 정보의 id 값이 1인지 체크
    3. id가 맞으면 `url2`로 할 일 정보를 요청
    4. 할 일 정보는 콘솔에 출력 또는 화면에 표시 -->
  </div>
</template>

<script>
import axios from 'axios';

const url1 = 'https://jsonplaceholder.typicode.com/users/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/1';

export default {
	methods: {
		fetchUser() {
			axios
				.get(url1)
				.then(response => {
					// console.log(response.data.id);
					let id = response.data.id;
					if (id === 1) {
						axios
							.get(url2)
							.then(response => {
								console.log(response.data);
							})
							.catch(error => console.log(error));
					}
				})
				.catch(error => console.log(error));
		},
		fetchUser() {
			return axios.get(url1);
		},
		fetchTodo() {
			return axios.get(url2);
		},
		async login() {
			try {
				var { data } = await this.fetchUser();
				if (data.id === 1) {
					var response = await this.fetchTodo();
					console.log(response.data);
				}
				// console.log('complete');
			} catch (error) {
				// console.log('complete');
			} finally {
				console.log('complete');
			}
			// 1. 사용자 정보를 요청
			// 2. 사용자 정보의 id를 체크
			// 3. 할 일 정보를 요청
		},
	},
};
</script>

<style>
</style>
