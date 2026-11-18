<script setup>
import { onMounted, ref } from 'vue';
import A04ContactForm from './children/A04ContactForm.vue';
import A04ContactTable from './children/A04ContactTable.vue';

// const baseURL = 'https://sample.bmaster.kro.kr';
const baseURL = 'http://localhost:8000';

const contactList = ref([]);
const getContactList = (key) => {
  fetch(`${baseURL}/contacts/search/${key}`)
    .then((resp) => resp.json())
    .then((data) => contactList.value = data)
    .catch((err) => console.error(err))
}

onMounted(() => {
  // getContactList('ab');
})
</script>

<template>
  <h3>A04 ContactList</h3>

  <div class="mb-5">
    <A04ContactForm @searchEvent="getContactList($event)"></A04ContactForm>
    <A04ContactTable v-bind:contactList="contactList"></A04ContactTable>
  </div>
</template>

<!-- 
<script>
import A05ContactForm from './childcomps/A05ContactForm.vue'
import A05ContactList from './childcomps/A05ContactList.vue'

const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/'

export default {
  components: {A05ContactForm, A05ContactList},
  data() {
    return {
      searchData: [],
      isLoading: false,
    }
  },
  methods: {
    getSearch(evt) {
      this.isLoading = true;

      fetch(baseURL + evt)
        .then(resp => resp.json())
        .then(data => {
          this.searchData = data;
          this.isLoading = false;
        })
        .catch(err => console.error(err))
    }
  }
}
</script>
-->
