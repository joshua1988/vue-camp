import { posts } from './';

export function fetchPosts() {
	return posts.get('/posts');
	// return axios.get('http://localhost:3000/posts')
}
