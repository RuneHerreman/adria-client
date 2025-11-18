<script setup>
defineProps({
  route: {type:String, default: ""}
})
</script>

<template>
  <router-link :to="route" class="grey-button button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.grey-button {
  background-color: var(--grey-background);
  color: var(--grey-text);
}
</style>