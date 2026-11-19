<script setup>
import A10ScopeSlotChild from './children/A10ScopeSlotChild.vue'
</script>

<template>
  <h3>A10 Scoped Slot</h3>

  <div class="mb-5">
    <A10ScopeSlotChild>
      <!-- one은 하위 컴포넌트가 전달한 값을 받는 객체 변수명을 지정 -->
      <template v-slot:default="one">
        <div class="mb-3 mt-3">
          KOR: {{ one.kor }}<br>
          ENG: {{ one.eng }}<br>
          USER: {{ one.user?.name }} / {{ one.user?.age }} <br>

          <button @click="one.changeKor?.('Eve')">KOR</button>
        </div>
      </template>

      <template #jumsu="one">
        <div class="mb-3 mt-3">
          KOR: {{ one.kor }}<br>
          ENG: {{ one.eng }}<br>
          USER: {{ one.user?.name }} / {{ one.user?.age }} <br>

          <button @click="one.changeKor?.('Eve')">KOR</button>
        </div>
      </template>
      
    </A10ScopeSlotChild>
  </div>
</template>

<!-- 
<script>
import A09ScopeSlotChild from './children/A09ScopeSlotChild.vue'

export default {
  components: { A09ScopeSlotChild },
}
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-5">
    <A09ScopeSlotChild>
      <template v-slot="one">
        Nickname: {{ one.nickname }}<br />
        Kor: {{ one.kor }}<br />
        Eng: {{ one.eng }}<br />
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        <button @click="() => one.changeKor(3000)">KOR</button>
        <br />
        <br />
      </template>

      <template #jumsu="one">
        Nickname: {{ one.nickname }}<br />
        Kor: {{ one.kor }}<br />
        Eng: {{ one.eng }}<br />
        User: {{ one.user.name }} / {{ one.user.age }}<br />
        <button @click="() => one.changeKor(3000)">KOR</button>
      </template>
    </A09ScopeSlotChild>
  </div>
</template>
-->
