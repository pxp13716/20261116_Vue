<script setup>
defineProps(['name'])
</script>

<template>
  <h5>A09 Slot Child Component</h5>

  <div class="mb-3">
    Name: {{ name }}
  </div>

  <div class="mb-3">
    <!-- 부모가 전달한 View가 이 slot 태그 위치에 표시된다 -->
    <slot>
      <div>여기에 기본 View를 완성해 놓으면 전달되는 View가 없는 경우 기본값으로 표시된다</div>
    </slot>
  </div>
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