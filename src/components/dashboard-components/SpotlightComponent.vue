<script setup>
defineProps({
  src: {type:String, required: true},
  half: {type: Boolean, default: false}
});
</script>

<template>
  <img
      :src="src"
      :class="{halfImage: half}"
      alt=""
  >
</template>

<style scoped>
img{
  width: calc(100% - 1.5rem);
  height: auto;
  aspect-ratio: 19/7;
  border-radius: 1rem;
  margin-bottom: 2rem;

  cursor: pointer;
}

img.halfImage{
  width: 100%;
  aspect-ratio: 9/7;
}
</style>