<script setup>
import { reactive, ref } from 'vue';

const name = ref('Adam');

// form 요소의 속성값 정의 => 변경 없음
const attrs = { type: 'text', class: 'form-control', value: 'Eve' };
const style = { backgroundColor: 'orange', color: 'white', padding: '10px' };

// 양방향 바인딩을 위한 이벤트 핸들러
const changeName = (evt) => {
  // 제약 조건
  if(evt.target.value.trim() > 5) {
    evt.target.value = evt.target.value.slice(0, 5);
    name.value = evt.target.value;
  } else {
    name.value = evt.target.value;
  }
}

// 이미지 크기 조작
const imgAttrs = reactive({
  directive: 'width',
  size: 100,
})
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div class="mb-3">
    <h5>1. 속성 바인딩 / {{ name }}</h5>
    <input type="text" class="form-control" value="{{ name }}">
    <input type="text" class="form-control" v-bind:value="name">
    <input type="text" class="form-control" :value="name">
    <input type="text" v-bind:class="'form-control'" v-bind:value="name">
    <input v-bind="attrs">
    
    <div style="background-color: lightgray; color: white; padding: 10px;">Hello World</div>
    <div v-bind:style="style">Hello World</div>
  </div>

  <div class="mb-3">
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" v-model="name">
    <!-- Event를 이용해 구현 가능 => React -->
    <input type="text" class="form-control" 
      v-bind:value="name" v-on:input="changeName($event)">
  </div>

  <div class="row mb-3">
    <div class="col-6">
      <select class="form-control" v-model="imgAttrs.directive">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="number" class="form-control" v-model.number="imgAttrs.size">
    </div>
  </div>
  
  <div class="mb-5">
    <img src="/images/home.jpg" alt="man" v-bind:[imgAttrs.directive]="imgAttrs.size">
  </div>
</template>

<!--
<script>
export default {
  data() {
    return {
      name: 'Adam',
      ctrl: 'form-control',
      attrs: { type: 'text', class: 'form-control', value: '방자' },
      styles: { backgroundColor: 'lightgray', color: 'white', padding: '10px' },
      size: 300,
      direction: 'width',
    };
  },
  methods: {
    enterEvent() {
      this.styles.backgroundColor = 'orange';
    },
    leaveEvent() {
      this.styles.backgroundColor = 'lightgray';
    },
    changeName(evt) {
      // Guard - 제약조건
      if (evt.target.value.trim().length > 5) {
        this.name = evt.target.value;
      }
    },
  },
};
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    // 속성은 반드시 v-bind:속성명="변수명 or 값" 형태로 참조. v-bind는 생략 가능 
    <input type="text" class="form-control" value="{{ name }}" />
    <input type="text" class="form-control" v-bind:value="name" />
    <input type="text" class="form-control" :value="name" />
    <input type="text" :class="'form-control'" :value="name" />
    <input type="text" :class="ctrl" :value="name" />
    <input v-bind="attrs" />

    <div style="background-color: lightgray; color: white; padding: 10px">Hello World</div>
    <br />

    <div v-bind:style="styles" @mouseenter="enterEvent" @mouseleave="leaveEvent">Hello World</div>
  </div>
  <br />

  <div>
    <h5>2. 양방향 바인딩</h5>
    <input type="text" class="form-control" v-model.trim="name" />
    <input type="text" class="form-control" v-model.lazy="name" />
    <input type="text" class="form-control" :value="name" @input="changeName" />
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">width</option>
        <option value="height">height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="number" class="form-control" v-model.number="size" />
    </div>
  </div>
  <br />

  <div class="mb-5">
    <img src="/images/tree.jpg" alt="Tree" v-bind:[direction]="size" />
  </div>
</template>
-->