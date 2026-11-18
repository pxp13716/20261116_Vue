<script setup>
import { inject, useCssModule } from 'vue';

  defineProps(['todo']);          // provide에 없는 직접 속성으로 전달한 데이터

  const style = useCssModule();   // CSS Module
  const { updateTodo, deleteTodo } = inject('useTodo');
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [style.done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="updateTodo(todo.id)">Complete</button>
    </td>
    <td><button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button></td>
  </tr>
</template>

<style module>
.done {
  text-decoration: line-through;
}
</style>

<!--
<script>
export default {
  props: ['todo'],
  inject: ['updateTodo', 'deleteTodo'],
}
</script>

<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td>
      <span :class="{ [$style.A07_done]: todo.done }">{{ todo.text }}</span>
    </td>
    <td>
      <button class="btn btn-primary" @click="() => updateTodo(todo.id)">Complete</button>
    </td>
    <td><button class="btn btn-danger" @click="() => deleteTodo(todo.id)">Delete</button></td>
  </tr>
</template>

<style module>
.A07_done {
  text-decoration: line-through;
}
</style>
-->