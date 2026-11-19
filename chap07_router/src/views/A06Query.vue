<script setup>
import { useRoute } from 'vue-router';
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import axios from 'axios';

import contactlist from './data/ContactList';
const contacts = contactlist.contacts;

const route = useRoute();       // 넘어오는 값은 항상 문자열이다
// console.log(route);

// route로 넘어오는 값도 감시 대상
const user = computed( () => contacts.find((item) => item.no === Number(route.query.no)) )

const contact = ref({no: '', name: '', tel: '', address: '', photo: ''});
const getContact = async () => {
  try {
    const resp = await axios.get(`http://localhost:8000/contacts/${route.query.sno}`);
    contact.value = resp.data;
  } catch(err) {
    console.error(err);
  }
}

const stopWatch = watch(
  () => route.query.no,
  (newVal) => getContact(newVal),
  { immediate: true }
)

onBeforeUnmount(() => {
  stopWatch();        // 지정 안해도 삭제는 됨. 확실하게 하기 위함
})
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div class="mb-3">
      PATH: {{ decodeURIComponent(route.path) }}<br />
      FULL: {{ decodeURIComponent(route.fullPath) }}<br />
      HASH: {{ decodeURIComponent(route.hash) }}<br />
      No: {{ route.query.no }} <br />
      Name: {{ route.query.name }} <br />
      Person: {{ user.no }} / {{ user.name }}<br />
    </div>

    <div class="mb-3">
      NO: {{ contact.no }}<br />
      NAME: {{ contact.name }}<br />
      TEL: {{ contact.tel }}<br />
      ADDRESS: {{ contact.address }}<br />
    </div>
  </div>
</template>

<!--
<script>
import axios from 'axios';
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.$route.query.id))
    },
    // query로 넘어오는 값을 형변환 후 내부 읽기 전용 변수로 변환
    no() {
      return Number(this.$route.query.no)
    },
    id() {
      return Number(this.$route.query.id)
    }
  },
  watch: {
    no(newVal) {
      this.getContact(newVal)
    }
  },
  methods: {
    async getContact(no) {
      try {
        const resp = await axios.get('http://localhost:8000/contacts/' + no);
        this.contact = resp.data;
      }catch(err) {
        console.error(err)
      }
    }
  },
  created: function(){
    // console.log(this.$route);
    this.getContact(this.no);
  },
}
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: {{ $route.query.name }}<br>
      ID: {{ $route.query.id }}<br>
      HASH: {{ $route.hash }}<br />
      <br />

      Person: {{ person.no }} / {{ person.name }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.tel }}<br />
    </div>
  </div>
</template>
-->