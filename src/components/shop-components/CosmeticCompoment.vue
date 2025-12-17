<script setup lang="ts">
const props = defineProps({
  cosmetic: Object
})
</script>

<template>
  <article class="cosmetic-container">
    <img :src="`data:image/*;base64,${cosmetic.image}`" alt="">
    <p class="cosmetic-name">{{cosmetic.itemName}}</p>
    <p class="cosmetic-cost">{{cosmetic.points}} XP</p>
  </article>
</template>

<style scoped>
@keyframes hover-bump {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-0.2rem);
  }
}

.cosmetic-container{
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 0.5rem;

  background-size: var(--course-card-background-height);

  cursor: pointer;
  transition: .1s ease-in-out;
}

.cosmetic-container:hover{
  animation: hover-bump 0.1s forwards ease-in-out;
  box-shadow: 0 0 0.3rem 0.05rem rgba(217, 217, 217, 0.4);
}

.cosmetic-container img {
  margin-bottom: 0.2rem;
  padding: .5rem;
  width: 100%
}

.cosmetic-name{
  font-weight: 550;
  font-size: 1.15rem;

  word-break: break-all;
}

.cosmetic-cost {
  margin-top: .5rem;
  color: var(--dark-green);
}
</style>