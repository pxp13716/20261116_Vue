<!-- 
  터미널 에러 => Vue 문법 에러 => 수정 후 정상 출력
  브라우저 콘솔 에러 => JavaScript 변환 후 JavaScript 에러 
-->

<!-- 
  template에서 사용할 변수(상태 변수), 함수 등의 정의
  1. Options API: (2.X, 3.X) 모두 지원. 객체 형태로 묶어 사용
    <script>
      export default{
        data: { },
        methods: { }
      }
    </script>
  2. Composition API: (2.8, 3.X) 일반 JavaScript 방식 형태로 기술 (O) 
    <script setup>
      일반 자바스크립트 (Vue 문법)
    </script>
-->
<script setup>
  // import 구문
  // assets에 있는 image 파일 import. 방식은 default 방식
  // import three from './assets/images/three.png'
  // import vue from './assets/vue.svg';

  // View가 따로 분리된 파일 => 이 파일을 컴포넌트라 한다 (View 조각)
  // View에서 사용할때는 사용자 정의 태그 형태로 사용한다 (반드시 종료 태그가 있어야 함)
  import { ref } from 'vue';
  import ImgComp from './components/oneTeam/ImgComp.vue'
  import TwoComp from './components/twoTeam/TwoComp.vue';

  // 변수, 함수 선언
  const title = 'Chap02 Vue';
  // const age = 20;
  const onAdd = function(x, y) {
    return `${x} + ${y} = ${x + y}`;
  }

  // 일반변수
  let cnt = 0;
  // 상태변수 (Vue, React, Angular를 사용하는 이유)
  const count = ref(0);

  // 일반변수 변경
  const inCnt = function(num) {
    cnt = cnt + num;
  }
  const deCnt = function() {
    cnt--;
  }

  // 상태변수 변경
  const inCount = function(num) {
    count.value = count.value + num;
  }
  const deCount = function() {
    count.value--;
  }
</script>

<!-- 
  template tag는 필수 사항
  template tag 내부 View는 일반 HTML 문법으로 기술
  ${title} => {{ title }} 형식으로 사용한다
-->
<template>
  <div class="m-3">
    <h1 class="orange">{{title}} / {{ onAdd(10, 20) }}</h1>

    <p>
      count: {{ cnt }} / {{ count }} <br>

      <button v-on:click="inCnt(2)"> CNT + </button>
      <button @click="deCnt()"> CNT - </button>

      <button v-on:click="inCount(3)"> COUNT + </button>
      <button @click="deCount()"> COUNT - </button>
    </p>

    <ImgComp></ImgComp>

    <TwoComp></TwoComp>

    <p>
      이러한 문제를 해결하기 위해 에반 유는 Angular에서 가장 유용하다고 판단했던 View 레이어 중심의 데이터 바인딩 메커니즘만을 추출하여, 가볍고 직관적이며 접근하기 쉬운 도구를 직접 제작하기로 결심하였습니다. 이것이 Vue.js가 처음 탄생하게 된 계기입니다.
    </p>

    <ImgComp />
  </div>
</template>

<!-- 현재 View에서만 사용할 CSS 파일을 정의 -->
<style scoped>
  .orange { color: orange; }
</style>


<!-- export default App 가 생략된 형태 -->