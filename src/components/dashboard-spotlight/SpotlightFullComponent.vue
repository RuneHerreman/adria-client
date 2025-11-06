<script setup lang="ts">
defineProps({
  src: {type:String, required: true},
})
</script>

<template>
  <img :src="src" alt="">
</template>

<style scoped>
img{
  width: calc(100% - 1.5rem);
  height: auto;
  aspect-ratio: 19/7;
  border-radius: 1rem;
}
</style>