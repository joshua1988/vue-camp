<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto mb-8">
      <contact-list>
        <div slot-scope="temporaryArgument">
          {{ temporaryArgument.contact.name.first }}
        </div>
        <template slot="info" slot-scope="{ contact }">
          {{ contact.email }}
        </template>
      </contact-list>
    </div>
    <div class="max-w-sm mx-auto mb-8">
      <contact-list>
        <div slot-scope="{ contact }">
          {{ contact.name.first + ' ' + contact.name.last }}
        </div>
        <template slot="info" slot-scope="{ contact }">
          {{ contact.phone }}
        </template>
      </contact-list>
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';

export default {
  components: {
    ContactList
  },
}
</script>

<style src="./assets/css/app.css"/>