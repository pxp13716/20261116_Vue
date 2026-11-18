<script setup>
import { onMounted, ref } from 'vue';

const message = ref('Good Morning');

// DOM 요소 참조를 위한 ref. 연결하고자 하는 요소 속성으로 ref="inputElem" 지정
// 컴포넌트 별로 유효한 변수가 된다. 다른 컴포넌트에서 동일 이름이 있어도 별개 동작한다
const inputElem = ref(null);
const btnElem = ref(null);

const sendData = () => {
  // console.log(inputElem.value);
  // document.querySelector('input[name="message"]')은 elem.value과 동일

  // const elem = document.querySelector('input[name="message"]');
  // message.value = elem.value.trim();

  message.value = (inputElem.value).value.trim();
}

onMounted(() => {
  (btnElem.value).style.backgroundColor = 'lightgreen';
})
</script>

<template>
  <h3>A11 Element 참조</h3>

  <form class="mb-3" @submit.prevent="sendData()">
    <div class="input-group">
      <input type="text" class="form-control" name="message" ref="inputElem">
      <button type="submit" class="btn btn-danger" ref="btnElem">ADD</button>
    </div>
  </form>

  <div class="mb-5">
    Message: {{message}}
  </div>  
</template>

<!--
<script>
export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
  methods: {
    changeMessage() {
      // const elem = document.querySelector('input[name="msg"]');
      // console.log(elem);
      // console.log(elem.name, elem.className, elem.type);

      // 1. 참조하려는 요소에 ref="참조명"
      // 2. 참조는 "this.$refs.참조명"로 참조"

      // console.log(this.$refs);
      const elem = this.$refs.inputRef; // document.querySelector('input[name="msg"]');
      this.message = elem.value;

      this.$refs.btnRef.style.backgroundColor = 'orange';
    },
  },
};
</script>

<template>
  <h3>A11 Refs</h3>

  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="msg" ref="inputRef" />
      <button type="submit" class="btn btn-danger" ref="btnRef" @click.prevent="changeMessage">ADD</button>
    </div>
  </form>

  <div class="mb-5">Message: {{ message }}</div>
</template>
-->