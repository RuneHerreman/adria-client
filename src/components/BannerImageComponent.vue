<script setup>
defineProps({
  src: {type:String, required: true},
})
</script>

<template>
  <img :src="src" alt="">
</template>

<style scoped>
  img{
    width: 100%;
    height: auto;
    aspect-ratio: 1300/400;
  }
</style>