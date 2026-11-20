<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import { useContactStore } from '@/stores/contactStore'

const router = useRouter();
const store = useContactStore();
const props = defineProps(['no'])

const { contact } = storeToRefs(store);
const elem = ref(null);       // photo field와 연결

const updatePhoto = async () => {
  const file = (elem.value)?.files?.[0] ?? null;

  try {    
    const resp = await store.updatePhoto(props.no, file);
    if(resp.status === 'success') {
      Swal.fire({title: 'SUCCESS', text: '이미지 수정 성공', icon: 'success'})
    } else if(resp.status === 'fail') {
      Swal.fire({title: 'FAIL', text: '이미지 수정 실패', icon: 'error'})
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
  <div class="card" style="width: 50rem">
    <div class="card-body">
      <h3 class="heading">사진 변경</h3>
      <p class="card-text">변경 할 사진을 선택해 주세요</p>

      <form method="post" enctype="multipart/form-data">
        <div>
          현재 사진: {{ contact.photo }}<br />
          <img class="thumb" width="100" :src="contact.photo" />
        </div>
        <br />

        <div>
          사진 파일 선택: <br />
          <input type="file" name="photo" class="form-control" ref="elem" />
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-danger" value="변경" @click="updatePhoto()" />
          <input type="button" class="btn btn-primary" value="취소" @click="router.push('/list')"/>
        </div>
      </form>
    </div>
  </div>
</template>
