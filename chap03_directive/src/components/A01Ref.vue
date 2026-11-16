<script setup>
import { ref } from 'vue';

// 변수의 값이 변경되면 변경된 값을 기반으로 화면을 재 갱신하는 변수 => 상태변수
// 이 상태변수는 값이 변경되면 즉각 변경된 값 기반으로 화면을 재 구성한다
// template에서는 "변수명"으로 참조
// setup에서는 "변수명.value"로 참조

// 일반변수 => 값은 변경된 값을 유지. 다만 변경된 값 기반으로 화면 갱신작업은 하지 않는다
let nickname = 'Adam';
const changeNickName = function(x) {
  nickname = x;
}

// 상태 변수 => ref(), reactive() 두 형태가 존재한다
// const name = ref(초기값) => const name = { value: 초기값 } 객체를 반환 
const name = ref('놀부');
const changeName = (x) => name.value = x;

const age = ref(10);
const check = ref(true);
const changeAge = (x) => age.value = x;
const changeCheck = () => check.value = !check.value;

// 불변성
const arr = ref([10, 11]);
const user = ref({ name: '춘향', age: 20});

</script>

<template>
  <h3>A01 상태변수 - Ref</h3>

  <div class="mb-3">
    <div class="mb-2">
      <!-- 
        {{ => 자바스크립트 시작, 
        }} => 자바스크립트 종료. 
        {{  }} 내부에는 자바스크립트 표현식만 올수 있다 
        
        표현식
        {{ 10 }} => 값 숫자 10,           {{ '10' }} => 값 문자 "10"
        {{ true }} => 값 boolean true,    {{ 'true' }} => 값 문자 'true'
        {{ nickname }} => 변수 호출,      {{ 'nickname' }} => 값 문자 'nickname'
      -->
      Nickname: {{ nickname }}
    </div>

    <p>
      Name: {{ name }}<br />
      Age: {{ age + 1 }}<br />
      Check: {{ check ? '동의' : '동의 안함' }}<br />
      Array: <br />
      User: <br />
    </p>
  </div>

  <div class="mb-5">
    <!-- v-on과 v-로 시작하는 지시자(Directive)는 " => JavaScript 시작, " => JavaScript 종료 -->
    <button v-on:click="changeNickName('Eve')">NICKNAME</button>
    <button v-on:click="changeName('향단')">NAME</button>
    <button @click="changeAge(20)">AGE</button>
    <button @click="changeCheck()">CHECK</button>

    <button>ADD ARRAY</button>
    <button>UPDATE ARRAY</button>
    <button>DELETE ARRAY</button>

    <button>ADD USER</button>
    <button>UPDATE USER</button>
    <button>DELETE USER</button>
  </div>
</template>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>
