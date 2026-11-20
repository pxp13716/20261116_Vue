<script setup>
defineProps(['contact'])
</script>

<template>
  <tr>
    <td>{{ contact.no }}</td>
    <td>
      <RouterLink :to="{name: 'contact', params: {no: contact.no}}">
        {{ contact.name }}
      </RouterLink>
    </td>
    <td>{{ contact.tel }}</td>
    <td>{{ contact.address }}</td>
    <td>
      <RouterLink :to="{name: 'photo', params: {no: contact.no}}">
        <img :src="contact.photo" :alt="contact.name" width="80">
      </RouterLink>
    </td>
  </tr>
</template>