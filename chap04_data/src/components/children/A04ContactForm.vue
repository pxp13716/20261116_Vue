<script setup>
import { ref } from 'vue';

// DOM 요소 참조
const elem = ref(null);
// 상위 컴포넌트에 전달을 위한 커스텀 이벤트 정의
const emit = defineEmits(['searchEvent'])

const sendData = () => {
  // elem.value => 매칭된 요소가 존재하니?
  if(elem.value && (elem.value).value.trim().length >= 2) {
    emit('searchEvent', (elem.value).value.trim())
  }
}
</script>

<template>
  <form @submit.prevent="sendData()">
    <div class="input-group">
      <input type="text" class="form-control" ref="elem" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">Submit</button>
      </div>
    </div>  
  </form>
</template>

<!-- 
<script>
export default {
  emits: ['searchEvent'],
  methods: {
    sendKeyword() {
      const value = this.$refs.searchRef.value.trim()
      if (value.length >= 2) {
        this.$emit('searchEvent', value)
      }
    },
  },
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="searchRef" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendKeyword">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>
-->
