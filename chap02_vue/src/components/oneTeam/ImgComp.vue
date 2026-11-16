<script setup>
  import three from './../../assets/images/three.png'
  import vue from './../../assets/vue.svg';
</script>

<template>
  <p>
    <!-- public 폴더의 리소스는 public을 생략한 절대패스로 지정 => 빌드시 복사됨 -->
    <img src="/images/one.png" width="100" alt="ONE">
    <img src="/favicon.svg" width="100" alt="favicon">

    <!-- assets 폴더의 리소스는 import 후 변수명으로 참조 -> 리소스로 관리됨 -->
    <img v-bind:src="three" width="100" alt="three">
    <img :src="vue" width="100" alt="vue">
  </p>
</template>
