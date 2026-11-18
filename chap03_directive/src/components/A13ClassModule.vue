<script setup>
import { ref, useCssModule } from 'vue';

const hello = 'Good Evening!!!';
const isChecked = ref(true);

// Hook
const style = useCssModule();
// console.log(style)
</script>

<template>
  <h3>A13 Class Module</h3>

  <div class="mb-3">
    <!-- join(' ')으로 공백을 이용해 문자열로 반환 => vue에서는 생략 가능 -->
    <div :class="[$style.one, $style.two, $style.three].join(' ')">{{hello}}</div>
    <div :class="[$style.one, $style.two, $style.three]">{{hello}}</div>
    <div :class="`${style.one} ${style.two} ${style.three}`">{{hello}}</div>
  </div>

  <div class="mb-5">
    <div :class="{ [$style.one]: false, [$style.two]: isChecked, [$style.three]: true }">{{hello}}</div>
    <div :class="{ [style.one]: false, [style.two]: isChecked, [style.three]: true }">{{hello}}</div>
    <div>
      <input type="checkbox" class="form-check-input" id="isChecked" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="isChecked">CHECK</label>
    </div>
  </div>
</template>

<!-- 
style => 전역 클래스로 등록. 동일한 이름이 존재하면 덮어씀 (import 기준)

style scoped => 현재 컴포넌트만 적용 가능하도록 속성을 추가함(View 요소도 속성이 추가됨) 
style module => 현재 컴포넌트만 적용. class 이름을 변경. 변경된 이름은 this.$style이 관리
-->
<style module>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
</style>

<!--
<script>
export default {
  data() {
    return {
      msg: 'Hello World!!',
      isChecked: true,
      num: 0,
    };
  },
  computed: {
    classOne() {
      return `${this.$style.one} ${this.$style.two} ${this.$style.three}`;
    },
  },
  mounted() {
    console.log(this.$style);
  },
};
</script>

<template>
  <h3>Class Module</h3>

  <div class="mb-3">
    <div :class="$style.one">{{ msg }}</div>
    <div :class="`${$style.one} ${$style.two} ${$style.three}`">{{ msg }}</div>
    <div :class="[$style.one, $style.two, $style.three].join(' ')">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <div :class="{ [$style.one]: isChecked, [$style.two]: true, [$style.three]: true }">{{ msg }}</div>
    <div :class="{ [classOne]: isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5"></div>
</template>

<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
</style>
-->