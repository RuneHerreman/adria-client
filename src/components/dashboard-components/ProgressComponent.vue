<script setup lang="ts">
const props = defineProps({
  progress: {type: Number, required: true},
})
</script>

<template>
  <div class="progress-wrapper">
    <div :style="{ width: progress + '%' }" class="progress"></div>
  </div>
</template>

<style scoped>
  .progress-wrapper {
    height: 0.6rem;
    width: 90%;
    padding: 0.15rem;
    background-color: #f2f2f2;
    border: 0.0625rem solid #e4e4e4;
    border-radius: 0.5rem;
  }
  .progress {
    height: 100%;
    background-color: var(--bright-green);
    border-radius: 0.5rem;
  }
</style>