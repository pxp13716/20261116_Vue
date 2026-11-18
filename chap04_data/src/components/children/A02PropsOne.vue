<script setup>
import { computed, ref } from 'vue';

// ref, reactive 상태 값은 사용되는 인스턴스 별로 유효하다 (동기화 안됨)
const one = ref('ONE');
const changeOne = () => (one.value = '첫번째');

/*
  props는 읽기 전용. props 변수명은 script 내부에서 참조하는 경우 필요하다
  참조형 변수의 기본값은 항상 함수의 리턴값으로 반환해야 한다
  함수는 default 자체가 기본 함수로 동작한다

  자바스크립트는 호출한 변수의 값이 "", 0, -0, undefined, null, NaN, false 값이면 모두 false로 취급한다
  그 이외에 어떻한 값이라도 있으면 true로 취급함
*/
const props = defineProps({
  type: { type: String, required: true, default: 'time' },
  name: { type: [String, Number] },
  age: { type: Number },
  // 전달되는 속성이 없는 경우는 기본값이 false. 따라서 기본값으로 통일되도록 맞추자..
  checkOne: { type: Boolean, default: true },
  checkTwo: { type: Boolean, default: true },
  // required를 기술하면 default 값이 있어도 반드시 값을 넘겨야 한다
  add: { type: String, required: true, default: 'UNKNOWN' },
  arr: {
    type: Array,
    default: () => ['', ''],
    validator: (value) => {
      // 값이 넘어오지 않는 경우 default로 사용되는 값도 validator의 대상이 된다
      return value.length >= 2 ? true : false
    }
  },
  user: {
    type: Object,
    default: () => ({ name: 'A', age: 1 }),
    validator: (value) => {
      // 값이 넘어오지 않는 경우 default로 사용되는 값도 validator의 대상이 된다
      // 자바스크립트는 호출한 변수의 값이 "", 0, -0, undefined, null, NaN, false 값이면 모두 false로 취급한다
      // 그 이외에 어떻한 값이라도 있으면 true로 취급함
      return (value.name && value.age) ? true : false;
    }
  },
  onAdd: {
    type: Function,
    default: () => { return '값이 전달되지 않았습니다' },  // default 함수 자체를 기본 값으로 사용
    validator: (value) => {
      const result = value(1, 2);
      return (typeof result === 'string') ? true : false;
    }
  },
  changeAddress: { type: Function }
});

const today = computed(() => {
  const now = new Date();
  switch (props.type) {
    case 'date':
      return now.toLocaleDateString();
    case 'time':
      return now.toLocaleTimeString();
    default:
      return now.toLocaleString();
  }
});
</script>

<template>
  <h5>A02 Props {{ one }} Component</h5>

  <!-- 
    기본형 변수의 값이 전달되지 않으면 undefined. => undefined는 화면 출력 안됨
    배열과 객체는 default로 방지
  -->
  <div class="mb-5">
    Type: {{ type }} => {{ today }}<br />
    Name: {{ name ?? '정의되지 않음' }} <br />
    Age: {{ age + 1 ?? 0 }} <br />
    CheckOne: {{ checkOne }} <br />
    CheckTwo: {{ checkTwo }} <br />
    Address: {{ add }} <br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] ?? 0 }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    onAdd: {{ onAdd(10, 20) }} <br />
    
  </div>

  <div class="mb-5">
    <button class="btn btn-primary" @click="changeOne()">ONE</button>
    <button class="btn btn-primary" @click="changeAddress('대전')">ADDRESS</button>
  </div>
</template>

<!-- 
<script>
export default {
  // 부모가 전달한 속성을 정의 [읽기 전용]
  props: {
    type: { type: String, required: true },
    name: { type: String, default: 'Unknown' },
    age: { type: Number, default: 0 }, // default 값도 type과 매칭되어야 한다
    add: { type: String, default: 'Unknown' },
    arr: {
      type: Array,
      default: () => ['', ''], // default 값도 validator의 대상이 된다
      validator: (arg) => {
        return arg.length >= 2 ? true : false
      },
    },
    user: {
      type: Object,
      default: () => ({ name: ' ', age: ' ' }),
      validator: (arg) => {
        // JavaScript에서는 조건굼에서 변수의 값이
        // '', 0, -0, NaN, undefined, null, false면 모두 false로 판단한다
        return arg.name && arg.age ? true : false
      },
    },
    onAdd: {
      type: Function,
      // default 함수 자체가 기본 함수로 사용된다
      default() {
        return ''
      },
      validator(arg) {
        return typeof arg(1, 2) === 'string' ? true : false
      },
    },
    changeAddress: {
      type: Function,
      default() {},
      validator(arg) {
        return typeof arg === 'function' ? true : false
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    today() {
      const now = new Date()
      switch (this.type) {
        case 'time':
          return now.toLocaleTimeString()
        case 'date':
          return now.toLocaleDateString()
        default:
          return now.toLocaleString()
      }
    },
  },
}
</script>

<template>
  <h5>A02 Props Child ONE</h5>

  <div class="mb-5">
    Today: {{ this.type }}: {{ today }}<br />
    Name: {{ name }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('경기')">Address</button>
  </div>
</template>
-->
