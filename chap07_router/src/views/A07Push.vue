<!-- eslint-disable no-unused-vars -->
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

// const route = useRoute();       // 패스, 전달되는 값 등을 관리
const router = useRouter();     // 이동에 관련된 함수
// console.log(router)

const back = () => {
  router.back();
  // router.go(-1);
};
const forward = () => {
  router.forward();
  // router.go(1);
};
const goHome = () => {
  router.push('/')
};
const goURL = (url) => {
  if(typeof url === 'string') {
    router.push({path: url, replace: true});    // replace => catch에 저장 여부
  } else {
    router.push({...url, replace: true});    // replace => catch에 저장 여부
  }
};

// 컴포넌트 별 가드 설정
onBeforeRouteLeave((to, from) => {
  console.log('----- 컴포넌트 네비게이션 => onBeforeRouteLeave -----')
  const storage = window.localStorage;
  return storage.getItem('tel') ? true : false
})
// useRoute의 params나 query의 값이 변경되는 경우 실행
onBeforeRouteUpdate((to, from) => {
  console.log('----- 컴포넌트 네비게이션 => onBeforeRouteUpdate -----')
  const storage = window.localStorage;
  return storage.getItem('tel') ? true : false
})
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back()">BACK</button>
      <button   @click="forward()">FORWARD</button>
      <button   @click="goHome()">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button   @click="goURL({name: 'attr'})">A02Attr</button>
      <button   @click="goURL({name: 'param', params: {no: 1004, name: '춘향', sno: 14}})">Params</button>
      <button   @click="goURL({name: 'query', query: {no: 1006, name: 'Eve', sno: 16}, hash: '#BTM'})">Query</button>
    </div>
  </div>
</template>

<!--
<script>
export default {
  methods: {
    back: function(){
      // this.$router.back();
      this.$router.go(-1);
    },
    forward: function() {
      // this.$router.forward();
      this.$router.go(1);
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      this.$router.push(url);
      // this.$router.replace(url);   // history를 남기지 않는다
    },
  },
  created() {
    // console.log(this.$router)
  },
  beforeRouteEnter(to, from) {
    console.log('---------- 컴포넌트 beforeRouteEnter ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  },
  beforeRouteUpdate(to, from) {
    console.log('---------- 컴포넌트 beforeRouteUpdate ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  },
  beforeRouteLeave(to, from) {
    console.log('---------- 컴포넌트 beforeRouteLeave ----------')

    const session = window.sessionStorage;
    if (session.getItem('address')) return true;
    else return false;
  }
}
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <button @click="goURL({name: 'attr'})">A02Attr</button>
      <button @click="goURL({name: 'param', params: {id: '1002', name: 'ABC', no: 50}})">Params</button>
      <button @click="goURL({name: 'query', query: {id: '1003', name: 'DEF', no: 51}, hash: '#BTN'})">Query</button>
    </div>
  </div>
</template>
-->