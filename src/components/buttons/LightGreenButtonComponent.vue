<script setup>
defineProps({
  route: {type:String, default: ""}
})
</script>

<template>
  <router-link :to="route" class="lightgreen-button button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.lightgreen-button {
  background-color: var(--quaternary-green);
  color: var(--dark-green);
}
</style>