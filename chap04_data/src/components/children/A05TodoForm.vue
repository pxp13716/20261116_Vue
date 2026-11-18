<script setup>
  import { ref } from 'vue';
  const props = defineProps(['addTodo']);

  // 요소 참조
  const todoElem = ref(null);
  
  const handleSubmit = () => {
    const elem = todoElem.value;
    if(elem.value.trim() !== '') {
      props.addTodo(elem.value.trim());     // 매개변수로 값 전달
      elem.value = '';
      elem.focus();
    }
  }
</script>

<template>
  <form @submit.prevent="handleSubmit()">
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
  props: ['addTodo'],
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    sendData() {
      if (this.txt !== '') {
        this.addTodo(this.txt)
        this.txt = ''
        document.querySelector('input').focus()
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" v-model.trim="txt" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>
  </form>
</template>
-->
