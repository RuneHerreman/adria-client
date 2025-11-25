<script setup>
defineProps({
  route: {type:String, default: ""}
});
</script>

<template>
  <router-link :to="route" class="red-button button">
    <slot></slot>
  </router-link>
</template>

<style scoped>
  .red-button {
    background-color: #a84343;
    color: white;
  }
</style>