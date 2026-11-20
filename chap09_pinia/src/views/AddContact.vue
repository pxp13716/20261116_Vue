<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import Swal from 'sweetalert2'

import { useContactStore } from '@/stores/contactStore'

const router = useRouter();
const store = useContactStore();

const { contact } = storeToRefs(store);

const addContact = async () => {
  try {
    const data = { 
      name: contact.value.name, 
      tel: contact.value.tel, 
      address: contact.value.address 
    }
    
    const resp = await store.addContact(data);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success'})
    } else if(resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '데이터 입력 실패', icon: 'error'})
    }
    router.push({name: 'list'});
  } catch(err) {
    console.error(err);
    Swal.fire({title: 'FAIL', text: '네트워크에 문제가 발생했습니다', icon: 'error'})
  }
}

onBeforeMount(() => {
  store.clearContact();
})
</script>

<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name" :value="contact.name" @input="store.changeContact($event)" /> <br />
      Tel: <input type="text" class="form-control" name="tel" :value="contact.tel" @input="store.changeContact($event)" /> <br />
      Address: <input type="text" class="form-control" name="address" :value="contact.address" @input="store.changeContact($event)" />
    </div>

    <button class="btn btn-outline-primary" @click="addContact()">ADD</button>
  </div>
</template>
