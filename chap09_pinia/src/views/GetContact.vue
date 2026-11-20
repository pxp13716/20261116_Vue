<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2'

import { useContactStore } from '@/stores/contactStore'

const router = useRouter();           // 이동 관련 Hook
const props = defineProps(['no']);
const store = useContactStore();

const { contact, loading, errMessage } = storeToRefs(store);

// 삭제
const deleteContact = async () => {
  try {
    const resp = await store.deleteContact(props.no);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success'})
    } else if(resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '데이터 삭제 실패', icon: 'error'})
    }
    router.push({name: 'list'});
  } catch(err) {
    console.error(err);
    Swal.fire({title: 'FAIL', text: '네트워크에 문제가 발생했습니다', icon: 'error'})
  }
}

onMounted(() => {
  store.getContact(props.no)
})
</script>

<template>
  <div class="container-fluid">
    <h3>Get Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" disabled :value="contact.name" /> <br /> 
      Tel: <input type="text" class="form-control" disabled :value="contact.tel" /> <br />
      Address: <input type="text" class="form-control" disabled :value="contact.address" />
    </div>

    <div>
      <button class="btn btn-outline-primary" 
        @click="router.push({name: 'update', params: {no: contact.no}})">수정</button>
      <button class="btn btn-outline-primary" @click="deleteContact()">삭제</button>
    </div>
  </div>
</template>
