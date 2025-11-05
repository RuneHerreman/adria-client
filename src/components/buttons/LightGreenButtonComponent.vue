<script setup lang="ts">
defineProps({
  route: {type:String}
})
</script>

<template>
  <router-link :to="route" class="lightgreen-button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.lightgreen-button {
  background-color: var(--quaternary-green);
  color: var(--dark-green);
  padding: 0.6rem;
  width: fit-content;
  height: fit-content;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.85rem;

  font-weight: 600;
}
</style>