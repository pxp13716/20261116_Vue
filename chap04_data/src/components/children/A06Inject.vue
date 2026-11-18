<script setup>
import { inject } from 'vue';

  const useContext = inject('useContext');
  // console.log(useContext);

  // 디스트럭처링 
  const { changeName, changeAge, changeUser } = inject('useContext');
</script>

<template>
  <h5>A06 Inject</h5>
  
  <div class="mb-5">
    <div class="mb-5">
    Name: {{ useContext.name }}<br />
    Age: {{ useContext.age }}<br />
    User: {{ useContext.user.name }} / {{ useContext.user.age }}<br />

    <button @click="changeName()">Name</button>
    <button @click="changeAge()">Age</button>
    <button @click="changeUser()">User</button><br />
  </div>
  </div>
</template>

<!-- 
<script>
export default {
  inject: ['type', 'name', 'user', 'changeName', 'changeUser'],
  data() {
    return {}
  },
}
</script>

<template>
  <h3>A06 Inject / {{ type }}</h3>

  <div class="mb-5">
    Type: {{ type }}<br />
    Name: {{ name }}<br />
    User: {{ user.name }} / {{ user.age }}<br />

    <button @click="changeName">Name</button>
    <button @click="changeUser">User</button><br />
  </div>
</template>

-->
