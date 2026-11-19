<script>
  // export default({
  //   name: 'AboutComp',
  // })
</script>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue';

  // options API 방식으로 구현할 목적으로 정의
  defineOptions({
    name: 'aboutComp',
  });

  const today = ref(new Date());
  const now = ref(new Date());

  // 다이나믹 컴포넌트에서 표시될때 발생하는 이벤트
  onActivated(() => {
    console.log('----- onActivated -----');
    now.value = new Date();
  })
  // 다이나믹 컴포넌트에서 삭제될때
  onDeactivated(() => {
    console.log('----- onDeactivated -----');
  })
</script>

<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>
      Vue is a framework and ecosystem that covers most of the common features needed in frontend
      development. But the web is extremely diverse - the things we build on the web may vary
      drastically in form and scale. With that in mind, Vue is designed to be flexible and
      incrementally adoptable. Depending on your use case, Vue can be used in different ways:<br />
      <br />

      Today: {{ today.toLocaleString() }} <br>
      Now: {{ now.toLocaleString() }}
    </p>
  </div>
</template>

<!--
<script>
export default {
  name: 'aboutComp',
  data() {
    return {
      today: new Date(),
      now: new Date(),
    }
  },
  // 활성화시 실행되는 라이프 사이클 메서드
  activated() {
    // console.log('activated');
    this.now = new Date();
  },
  deactivated() {
    // console.log('deactivated');
  }
}
</script>

<template>
  <div class="banner">
    <h5>About Component</h5>
    <p>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
      <br>

      Today: {{today.toLocaleString()}}<br />
      Now: {{ now.toLocaleString() }}
    </p>
  </div>
</template>
-->
