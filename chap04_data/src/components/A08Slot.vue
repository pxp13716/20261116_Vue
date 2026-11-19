<script setup>
import { ref } from 'vue';
import A08SlotChild from './children/A08SlotChild.vue'

const name = ref('Adam');
const changeName = (str) => name.value = str;
</script>

<template>
  <h3>A08 Slot</h3>

  <div class="mb-5">
    <A08SlotChild :name="name">
      <h6>부모에서 전달한 View / {{ name }}</h6>
      <div>
        여행 일정과 선호하는 풍경(바다, 강변, 역사 유적)에 맞춰 선택할 수 있도록 주요 국토종주 코스를 비교해 드립니다.<br />
        <button @click="changeName('Eve')">Name</button>
      </div>
    </A08SlotChild>

    <A08SlotChild :name="name">
      <div>
        여행 일정과 선호하는 풍경(바다, 강변, 역사 유적)에 맞춰 선택할 수 있도록 주요 국토종주 코스를 비교해 드립니다.<br />
        <button @click="changeName('Eve')">Name</button>
      </div>
    </A08SlotChild>
    
    <A08SlotChild></A08SlotChild>
  </div>
</template>

<!-- 
<script>
import A07SlotChild from './children/A07SlotChild.vue'

export default {
  components: { A07SlotChild },
  data() {
    return {
      name: 'Adam',
    }
  },
}
</script>

<template>
  <h3>A07 Slot</h3>

  <div class="mb-5">
    <A07SlotChild>
      <div>Good Morning!!! / {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild>
      <div>Good Afternoon!!! / {{ name }}</div>
    </A07SlotChild>

    <A07SlotChild></A07SlotChild>
  </div>
</template>
-->