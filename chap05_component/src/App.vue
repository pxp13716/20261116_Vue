<script setup>
import { onErrorCaptured } from 'vue';
import A01DynamicComp from './components/A01DynamicComp.vue';
import A02Teleport from './components/A02Teleport.vue';
import A03Suspense from './components/A03Suspense.vue';
import A04ErrorCaptured from './components/A04ErrorCaptured.vue';
import A05WarnHandler from './components/A05WarnHandler.vue';

// 하위 컴포넌트의 에러만 잡아 처리한다
onErrorCaptured((err, comp, info) => {
  console.log('----- App -----');
  console.log(err);     // Error 객체
  console.log(comp);    // Error가 발생한 컴포넌트
  console.log(info);    // Vue에서 제공하는 안내 문구

  // Error는 상위 컴포넌트로 전파 된다. 즉 main.js가 다시 잡아서 처리
  return true;             // 상위 컴포넌트로 에러 전파
})
</script>

<template>
  <div class="m-3">
    <h1>Chap05 Component</h1>

    <A05WarnHandler></A05WarnHandler>
    <A04ErrorCaptured></A04ErrorCaptured>
    <A03Suspense></A03Suspense>
    <A02Teleport></A02Teleport>
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>

<style scoped></style>
