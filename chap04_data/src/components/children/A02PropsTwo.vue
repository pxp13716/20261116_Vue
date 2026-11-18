<script setup>
import { computed } from 'vue';

// 속성의 값을 배열로 간단히 받아 처리
const props = defineProps(['type', 'name', 'age', 'checkOne', 'checkTwo', 'add', 'arr', 'user', 'onAdd', 'changeAddress'])

const today = computed(() => {
  const today = new Date();
  switch(props.type) {
    case 'date':
      return today.toLocaleDateString();
    case 'time':
      return today.toLocaleTimeString();
    default:
      return today.toLocaleString();
  }
})
</script>

<template>
  <div>
    <h5>A02 Props Two Component</h5>

    <div class="mb-5">
      Now: {{ type }} => {{ today }}<br />
      Name: {{ name ?? '값 없음' }}<br />
      Age:  {{ age ?? 0 }}<br />
      CheckOne: {{ checkOne ?? true }}  <br />
      CheckTwo: {{ checkTwo ?? true }}  <br />
      Address: {{ add ?? '서울' }} <br />
      <!-- 
        배열과 객체는 값이 없으면 undefind[0], undefind.name, undefind() 형태가 된다 => 모두 에러
        객체는 앞의 값이 undefined, null을 체크하기 위해 옵셔널 체이닝 연산자 사용
        변수명?.[], 변수명?.속성, 변수명?.() => ?. 앞이 undefined, null면 ?. 뒤를 평가하지 않고
        undefined, null을 반환하고 종료 => undefined, null은 화면에 출력되지 않음
      -->
      Array: {{ arr?.[0] ?? 0 }} / {{ arr?.[1] ?? 0 }} / {{ arr?.[2] }} <br />
      User: {{ user?.name ?? '값 없음' }} / {{ user?.age ?? 0 }} / {{ user?.address }} <br />
      onAdd:  {{ onAdd?.(10, 20) ?? '함수 정의 안됨' }}<br />
    </div>

    <div class="mb-3">
      <button class="btn btn-danger" @click="changeAddress?.('속초')">ADDRESS</button>
    </div>
  </div>
</template>

<!-- 
<script>
export default {
  props: ['type', 'name', 'age', 'add', 'arr', 'user', 'onAdd', 'changeAddress'],
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A02 Props Child TWO</h5>

  <div class="mb-5">
    Today: {{ this.type }}<br />
    Name: {{ name }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('인천')">Address</button>
  </div>
</template>

-->
