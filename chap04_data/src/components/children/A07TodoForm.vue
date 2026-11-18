<script setup>
  import { inject, ref } from 'vue';

  // 요소 참조
  const todoElem = ref(null);

  const { addTodo } = inject('useTodo');
  
  const handleSubmit = () => {
    const elem = todoElem.value;
    if(elem.value.trim() !== '') {
      addTodo(elem.value.trim());
      elem.value = '';
      elem.focus();
    }
  }
</script>

<template>
  <form @submit.prevent="handleSubmit($event)">
    <div class="input-group">
      <input type="text" class="form-control" ref="todoElem"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">Submit</button>
      </div>
    </div>  
  </form>
</template>

<!-- 
<script>
export default {
  inject: ['addTodo'],
  methods: {
    sendData() {
      // const elem = document.querySelector('input')
      const elem = this.$refs.todoRef
      if (elem.value.trim() !== '') {
        this.addTodo(elem.value)
        elem.value = ''
        elem.focus()
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="todoRef" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>
-->
