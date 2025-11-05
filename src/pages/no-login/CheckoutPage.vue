<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  console.log(route.query.planName, route.query.planPrice);
</script>

<template>

</template>

<style scoped>

</style>