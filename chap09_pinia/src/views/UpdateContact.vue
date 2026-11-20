<!-- eslint-disable no-unused-vars -->
<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2'

import { useContactStore } from '@/stores/contactStore'
import { onMounted } from 'vue';

const router = useRouter();
const store = useContactStore();

const { contact, loading, errMessage } = storeToRefs(store);
const props = defineProps(['no']);

const updateContact = async () => {
  try {
    const data = { 
      no: contact.value.no, 
      name: contact.value.name, 
      tel: contact.value.tel, 
      address: contact.value.address 
    }
    
    const resp = await store.updateContact(data);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success'})
    } else if(resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '데이터 수정 실패', icon: 'error'})
    }
    router.push({name: 'list'});
  } catch(err) {
    console.error(err);
    Swal.fire({title: 'FAIL', text: '네트워크에 문제가 발생했습니다', icon: 'error'})
  }
}

// reload(F5)를 누르면 데이터 삭제되는 문제
onMounted(() => {
  // store.getContact(props.no);
})
</script>

<template>
  <div class="container-fluid">
    <h3>Update Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name" 
        :value="contact.name" @input="store.changeContact($event)" /> <br />
      Tel: <input type="text" class="form-control" name="tel"
        :value="contact.tel" @input="store.changeContact($event)" /> <br />
      Address: <input type="text" class="form-control" name="address"
        :value="contact.address" @input="store.changeContact($event)" />
    </div>

    <button class="btn btn-outline-primary" @click="updateContact()">UPDATE</button>
  </div>
</template>
