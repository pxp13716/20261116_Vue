<script setup>
import { onBeforeUnmount, ref, watch } from 'vue';

const num = ref(10);
const name = ref('NolBu');
const arr = ref([10, 20]);
const user = ref({ name: 'HungBu', age: 20 });

const changeNum = () => (num.value = 20);
const changeUser = () => (user.value.name = '흥부');

// 하위 컴포넌트가 자신을 포함한 상위 컴포넌트에 값 전달. 이벤트를 이용한다
const emit = defineEmits(['numEvent', 'objEvent']); // 사용자 이벤트 이름 기술
const sendNumber = () => {
  // 전달하는 값은 상태가 아닌 실질적인 값으로 전달하자..
  // numEvent라는 이름의 이벤트가 발생하면서 event 객체에 지정한 값이 넘어간다
  emit('numEvent', num.value);
};
const sendObject = () => {
  emit('objEvent', {
    num: num.value, // 상태를 해제한 값을 전달
    name: name.value,
    arr: [...arr.value], // 새로운 객체 (변수명만 전달하면 자식, 부모가 같은 값을 참조)
    user: { ...user.value },
    changeNum,
    changeUser,
  });
};

// 상태 변수 값이 변경된 경우 변경을 감지하고 변경된 값 기반으로 이벤트 발생
const numWatch = watch(num, (newVal) => {
  emit('numEvent', newVal);
}, {
  immediate: true
});
const objWatch = watch(
  () => [user.value.name, user.value.age], 
  () => {
  sendObject()
});

onBeforeUnmount(() => {
  numWatch();
  objWatch();
})

</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div class="mb-3">
    Num: {{ num }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }}<br />
  </div>

  <div class="mb-5">
    <button @click="changeNum()">NUM</button>
    <button @click="changeUser()">USER</button>
  </div>

  <div class="mb-5">
    <button class="btn btn-primary" @click="sendNumber()">NumEvent</button>{{ ' ' }}
    <button class="btn btn-primary" @click="sendObject()">ObjEvent</button>
  </div>
</template>

<!-- 
<script>
export default {
  emits: ['numEvent', 'objEvent'], // custom event 등록
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: { name: 'HungBu', age: 20 },
    }
  },
  methods: {
    sendNumber() {
      // $emit은 지정한 이벤트명으로 이벤트를 발생
      // this.$emit('이벤트명', 전송할 값);
      this.$emit('numEvent', this.num)
    },
    sendData() {
      const data = {
        childName: 'A03 Emit Child Component',
        num: this.num,
        name: this.name,
        arr: this.arr,
        user: this.user,
      }
      this.$emit('objEvent', data)
    },
  },
}
</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div class="mb-3">
    Num: {{ num }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }}<br />
  </div>

  <div class="mb-5">
    <button @click="sendNumber">Num</button>
    <button @click="sendData">Data</button>
  </div>
</template>
-->
