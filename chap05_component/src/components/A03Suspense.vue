<!-- eslint-disable no-unused-vars -->
<script setup>
// npm i vue3-spinners p-min-delay
// https://leonsilicon.github.io/vue3-spinners/
import ErrorComp from './children/ErrorComp.vue'
import LoadComp from './children/LoadComp.vue'
// import A01BannerAbout from './children/A01BannerAbout.vue';

import { VueSpinnerDot } from 'vue3-spinners'
import pMinDelay from 'p-min-delay'
import { defineAsyncComponent } from 'vue'

// 비동기로 용량이 큰 컴포넌트를 불러오는 경우 사용
/*
const A01About = defineAsyncComponent(() => {
  return pMinDelay(import('./children/A01BannerAbout.vue'), 1500);    // 1.5초후에 로드
});
*/
const A01About = defineAsyncComponent({
  loader() {
    // return pMinDelay(import('./children/A01BannerAbout.vue'), 1500);
    return new Promise((resolve, reject) => {
      setTimeout((check) => {
        if(check) resolve(import('./children/A01BannerAbout.vue'))
        else reject(new Error('파일을 로드할 수 없습니다'))
      }, 1500, true);
    })
  },
  onError(err, retry, fail, attempts) {
    if(err && attempts < 3) {
      console.log(attempts)
      retry();            // 로드 재 시도
    } else {
      fail();             // 최종 에러 처리
    }
  },
  loadingComponent: LoadComp,
  errorComponent: ErrorComp,
  timeout: 3000,                    // 3초 후에도 로드되지 않으면 에러 처리
  delay: 500,                       // loadingComponent를 사용하는 경우 loadingComponent가 표시될 지연 시간
  suspensible: true,                // true => fallback 사용, false => errorComponent 사용
});

</script>

<template>
  <h3>A03 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default><A01About /></template>
      <template #fallback><VueSpinnerDot color="orange" size="50" /></template>
    </Suspense>
  </div>
</template>

<style scoped>
.dialog {
  position: fixed;
  top: 50px;
  left: 30%;
  width: 600px;
  height: 200px;
  z-index: 99999;
  border: 1px solid gray;
  background-color: white;
  padding: 10px;
}
</style>

<!--
<script>
// npm i p-min-delay
// npm i vue-spinner
import { defineAsyncComponent } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import pMinDelay from 'p-min-delay';

const A01About = defineAsyncComponent(() => {
  return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);
});

export default {
  components: { A01About, PulseLoader },
};
</script>

<template>
  <h3>A03 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default>
        <A01About></A01About>
      </template>
      <template #fallback>
        <PulseLoader></PulseLoader>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
-->
