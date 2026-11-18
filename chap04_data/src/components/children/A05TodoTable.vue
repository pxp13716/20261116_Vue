<script setup>
  import A05TodoItem from './A05TodoItem.vue';

  defineProps(['todoList', 'updateTodo', 'deleteTodo'])
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="todo in todoList" :key="todo.id">
        <A05TodoItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
      </template>
    </tbody>
  </table>
</template>

<style module>
.done {
  text-decoration: line-through;
}
</style>

<!--
<script>
import A05TodoListItem from './A05TodoListItem.vue'

export default {
  components: { A05TodoListItem },
  props: ['todoList', 'updateTodo', 'deleteTodo'],
}
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="todo in todoList" :key="todo.id">
        <A05TodoListItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoListItem>
      </template>
    </tbody>
  </table>
</template>
-->
