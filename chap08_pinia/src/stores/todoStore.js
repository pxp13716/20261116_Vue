import { defineStore } from "pinia";
import { ref } from "vue";

const useTodoStore = defineStore('todoStore', () => {
  const todoList = ref([
    { id: 1, text: '첫번째 할 일', done: true },
    { id: 2, text: '두번째 할 일', done: false },
  ])
  const text = ref('');
  let cnt = 3;

  const addTodo = (text) => {
    const todo = { id: cnt, text, done: false };
    todoList.value.push(todo);

    cnt++;
  }
  const updateTodo = (id) => {
    const todo = todoList.value.find((todo) => todo.id === id);
    todo.done = !todo.done;
  }
  const deleteTodo = (id) => {
    const idx = todoList.value.findIndex(todo => todo.id === id);
    todoList.value.splice(idx, 1);
  }
  const changeText = (text) => text.value = text;

  return { todoList, text, addTodo, updateTodo, deleteTodo, changeText }
})
export default useTodoStore;