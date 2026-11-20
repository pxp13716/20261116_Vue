<script setup>
import { ref } from 'vue';
import useTodoStore from './../stores/todoStore';

const store = useTodoStore();
const elem = ref(null);

const changeText = (evt) => store.changeText(evt.target.value);
const sendData = () => {
  if (store.text.trim() !== '') {
    store.addTodo(store.text); // store에서 직접 할당해도 된다
    store.changeText('');
    elem.value.focus();
  }
};
</script>

<template>
  <form @submit.prevent="sendData()">
    <div class="input-group">
      <!-- 
        scope가 store에서만 변경 가능 - Error 가능성 내포
        <input type="text" class="form-control" v-model="store.text" /> 
      -->
      <input
        type="text"
        class="form-control"
        ref="elem"
        :value="store.text"
        @input="changeText($event)"
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">SEND</button>
      </div>
    </div>
  </form>
</template>
