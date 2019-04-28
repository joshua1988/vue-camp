<template>
  <div>
    <div class="main list-container">
      <ul>
        <li v-for="item in postItems" :key="item._id">
          <div class="post-title">
            <router-link :to="`/post/${item._id}`">{{ item.title }}</router-link>
          </div>
          <div class="post-contents">
            {{ item.contents }}
          </div>
          <div class="post-time">
            {{ item.createdAt | formatDate }}
            <i class="icon ion-md-create" @click="editPost(item._id)"></i>
            <i class="icon ion-md-trash" @click="removePost(item._id)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts, deletePostById } from '../api/index.js';
import bus from '../utils/bus.js';

export default {
  data() {
    return {
      postItems: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const { data: { posts: postItems } } = await fetchPosts();
        this.postItems = postItems;
        return;
      } catch (error) {
        console.log(error);
      }
    },
    editPost(id) {
      this.$router.push(`/post/${id}`);
    },
    async removePost(id) {
      try {
        if (confirm('Delete it?')) {
          const response = await deletePostById(id);
          await this.fetchData();
          bus.$emit('show:toast', `${response.data.title} was deleted`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchData();
  },
}
</script>

<style scoped>
.list-container {
  margin-top: 1.5rem;
}
.list-container.sticky {
  margin-top: 76px;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul>li {
  width: 450px;
  height: 250px;
  border: 1px solid #dae1e7;
  border-radius: 35px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  margin: 1rem 0;
  padding: 1rem;
}
.post-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.post-contents {
  height: 73%;
}
.post-time {
  font-size: 1rem;
  text-align: right;
}
.icon {
  font-size: 1.3rem;
  cursor: pointer;
  color: #364f6b;
  padding-right: 0.4rem;
}
.icon:hover {
  color: #3fc1c9;
}
.icon:active {
  color: #fc5185;
}
.ion-md-create {
  padding-left: 0.1rem;
}
</style>
