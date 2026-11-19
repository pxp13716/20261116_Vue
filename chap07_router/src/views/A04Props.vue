<script setup>
import { computed, onBeforeUnmount, shallowRef, watch } from 'vue';
import axios from 'axios'

import contactlist from './data/ContactList';
import { useRoute } from 'vue-router';

// 패스 참조를 위해 정의
const route = useRoute();

// useRoute() 대신 패스 값 추출을 위해 정의
const props = defineProps(['no', 'name', 'sno']);

const contacts = contactlist.contacts;
const contact = shallowRef({ no: '', name: '', tel: '', address: '', photo: '' });

// 컴포넌트는 그대로인데 주소창의 파라미터만 바뀔 때 실행.
// route로 넘어오는 값도 감시 대상
const user = computed( () => contacts.find((item) => item.no === Number(props.no)) )

const getContact = async () => {
  try {
    const resp = await axios.get(`http://localhost:8000/contacts/${props.sno}`);
    contact.value = resp.data;
  } catch(err) {
    console.error(err);
  }
}

const stopWatch = watch(
  () => props.no,
  (newVal) => getContact(newVal),
  { immediate: true }
)

onBeforeUnmount(() => {
  stopWatch();        // 지정 안해도 삭제는 됨. 확실하게 하기 위함
})
</script>

<template>
  <div>
    <h3>A04 Props</h3>

    <div class="mb-3">
      PATH: {{ decodeURIComponent(route.path) }}<br />
      FULL: {{ decodeURIComponent(route.fullPath) }}<br />
      No: {{ route.params.no }} <br />
      Name: {{ route.params.name }} <br />
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
import axios from 'axios'
import contactlist from './data/ContactList';

export default {
  props: ['id', 'name', 'no'],
  data() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.id))
    },
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
    this.getContact(this.no);
  },
}
</script>

<template>
  <div>
    <h3>A04 Props</h3>

    <div>
      Name: {{ name }} <br>
      No: {{ no }} / {{ id }}<br>
      Person: {{ person.no }} / {{ person.name }}<br>
      Contact: {{ contact.no }} / {{ contact.name }} / {{ contact.tel }}<br />
    </div>
  </div>
</template>
-->