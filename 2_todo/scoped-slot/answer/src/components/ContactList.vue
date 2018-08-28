<template>
  <div class="card">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <div>
      <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
        <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
        <div>
          <div class="font-bold">
            <slot :contact="contact"></slot>
          </div>
          <div class="text-grey-dark">
            <!-- {{ contact.email }} -->
            <slot name="info" :contact="contact"></slot>
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
      contacts: []
    }
  },
  created() {
    var vm = this;
    fetch("./contacts.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(contacts) {
        return vm.contacts = contacts;
      });
  }
}
</script>