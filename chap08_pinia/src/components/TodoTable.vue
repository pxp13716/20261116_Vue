<!-- eslint-disabled no-unuserd-vars -->
<script setup>
import TodoItem from './TodoItem.vue';
import useTodoStore from './../stores/todoStore.js';
import { isRef } from 'vue';

const store = useTodoStore();
const todoList = store.todoList;
// console.log(isRef(todoList));         // false. 상태 값을 꺼내면 상태가 깨진다
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th :style="{ width: '10%' }">ID</th>
          <th>Todo</th>
          <th :style="{ width: '10%' }">Complete</th>
          <th :style="{ width: '10%' }">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="todo in todoList" :key="todo.id">
          <TodoItem :todo="todo" />
        </template>
      </tbody>
    </table>
  </div>
</template>
