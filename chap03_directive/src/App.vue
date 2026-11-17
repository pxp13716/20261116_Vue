<script setup>
  import A01Ref from './components/A01Ref.vue'
  import A02Reactive from './components/A02Reactive.vue';
  import A03Attribute from './components/A03Attribute.vue';
  import A04MakeDOM from './components/A04MakeDOM.vue';
  import A05Computed from './components/A05Computed.vue';
  import A06Computed from './components/A06Computed.vue';
  import A07Watch from './components/A07Watch.vue';
</script>

<!-- 조각 View(Component)를 결합하는 작업만 한다 -->
<template>
  <div class="m-3">
    <h1>Chap03 Directive</h1>

    <A07Watch></A07Watch>
    <A06Computed></A06Computed>
    <A05Computed></A05Computed>
    <A04MakeDOM></A04MakeDOM>
    <A03Attribute></A03Attribute>
    <A02Reactive></A02Reactive>
    <A01Ref></A01Ref>
  </div>
</template>

<style scoped>
</style>
