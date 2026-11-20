<script setup>
import TodoForm from './TodoForm.vue';
import TodoTable from './TodoTable.vue';

import useCountStore from './../stores/countStore.js';
const store = useCountStore();
</script>

<template>
  <div>
    <h3>Todo List / {{ store.count }}</h3>

    <TodoForm></TodoForm>
    <TodoTable></TodoTable>
  </div>
</template>
