<template>
  <div class="card mt-8">
    <h1 class="text-2xl font-bold mb-6">User Information</h1>
    <div>
      <div v-for="user in users" :key="user.id" class="flex items-center spaced-y-6">
        <div>
          <div class="font-bold">
            {{ user.name }}
          </div>
          <div class="text-grey-dark">
            {{ user.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
</script>