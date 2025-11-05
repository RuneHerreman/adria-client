<script setup lang="ts">
defineProps({
  route: {type:String}
})
</script>

<template>
  <router-link :to="route" class="brightgreen-button button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
  .brightgreen-button {
    background-color: var(--bright-green);
    color: white;
  }
</style>