<script setup>
import { onErrorCaptured, ref } from 'vue';
import A04ErrorChild from './children/A04ErrorChild.vue'
import ErrorComp from './children/ErrorComp.vue'

// 에러 상태 관리
const hasError = ref(true)

// 하위 컴포넌트의 에러만 잡아 처리한다
onErrorCaptured((err, comp, info) => {
  console.log('----- A04Component -----');
  console.log(err);     // Error 객체
  console.log(comp);    // Error가 발생한 컴포넌트
  console.log(info);    // Vue에서 제공하는 안내 문구

  hasError.value = false;

  // Error는 상위 컴포넌트로 전파 된다. 즉 App가 다시 잡아서 처리
  // return false;         // 상위 컴포넌트로 에러 전파 중지
  return true;             // 상위 컴포넌트로 에러 전파
})
</script>

<template>
  <h3>A04 ErrorCaptured</h3>

  <hr />

  <div v-if="hasError">
    <A04ErrorChild></A04ErrorChild>
  </div>
  <div v-else>
    <ErrorComp></ErrorComp>
  </div>

</template>

<!--
<script>
import A04ErrorChild from './children/A04ErrorChild.vue'

export default {
  components: { A04ErrorChild },
  // 자신의 컴포넌트 에러는 체크하지 못함.
  // 자식 컴포넌트의 에러만 체크해서 처리 할 목적으로 기술
  errorCaptured(err, vm, info) {
    console.log('----- A06ErrorCaputured -----')
    // console.log(err);
    // console.log(vm);
    // console.log(info);

    vm.isError = false;

    // 상위 컴포넌트로 에러 이벤트가 전파된다
    // A06Child(에러 발생) => A06ErrorCap..(에러 처리) => App => main
    // return false;      // 에러 전파 방지
  }
}
</script>

<template>
  <h3>A04 Error</h3>

  <hr>

  <div class="mb-5">
    <A04ErrorChild></A04ErrorChild>
  </div>
</template>
-->
