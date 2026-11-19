<script setup>
import A09SlotNameChild from './children/A09SlotNameChild.vue'
</script>

<template>
  <h3>A09 Slot Name</h3>

  <A09SlotNameChild>
    <h5>자식에게 전달</h5>

    <!-- template 이외의 태그로 기술한 요소는 위치 상관없이 default에 표시된다 -->
    <div>맨 위에 기술</div>


    <!-- name 속성이 지정된 slot에 전달할 view는 반드시 template 태그로 정의 -->
    <template v-slot:top>Header View</template>
    <template v-slot:left>Left View</template>

    <div>중간에 기술</div>

    <template #right>Right View</template>
    <template #bottom>Header View</template>

    <div>마지막에 기술</div>
  </A09SlotNameChild>
</template>

<!-- 
<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <h5>A07 Slot Child Component</h5>

  <div class="mb-5">
    <slot>넘어오는 View가 없는 경우 이 텍스트가 기본으로 표시</slot>
  </div>
</template>
-->
