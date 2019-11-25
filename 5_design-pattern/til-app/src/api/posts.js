import { posts } from './index';

// Read
function fetchPosts() {
	return posts.get('/');
}

// Create
function createPost(postData) {
	return posts.post('/', postData);
}

export { fetchPosts, createPost };
