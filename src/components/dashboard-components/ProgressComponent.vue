<script setup>
const props = defineProps({
  progress: {type: Number, required: true},
});
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
    background-color: #f2f2f2;
    border-radius: 0.5rem;
  }
  .progress {
    height: 100%;
    background-color: var(--bright-green);
    border-radius: 0.5rem;
  }
</style>