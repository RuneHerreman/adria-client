<script setup lang="ts">
defineProps({
  route: {type:String}
})
</script>

<template>
  <router-link :to="route" class="grey-button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.grey-button {
  background-color: var(--grey-background);
  color: var(--grey-text);
  padding: 0.6rem;
  width: fit-content;
  height: fit-content;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.85rem;

  font-weight: 600;
}
</style>