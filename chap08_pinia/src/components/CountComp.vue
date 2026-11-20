<script setup>
import useCountStore from './../stores/countStore';
const store = useCountStore();
// console.log(store)

// getter (computed => 호출은 속성 형태로 호출)
const one = store.oneItem;
const two = store.getItem(2);
</script>

<template>
  <div>
    <h3>{{ store.storeName }}</h3>

    <div class="mb-3">
      Num: {{ store.count }}<br />
      <button @click="store.incAction(2)">+</button>
      <button @click="store.decAction()">-</button>
    </div>

    <div class="mb-5">
      ONE: {{ one.no }} / {{ one.name }}<br />
      TWO: {{ two.no }} / {{ two.name }}<br />
    </div>
  </div>
</template>
