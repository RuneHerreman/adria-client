<script setup>
  import {useRouter} from "vue-router";

  const props = defineProps({
    xp: {type: Number, required: true}
  })
</script>

<template>
  <div id="xp-count">
    <p>XP: </p>
    <p id="count">{{xp}}</p>
  </div>
</template>

<style scoped>
  #xp-count {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;

    padding: 0.6rem 1rem;
    border: 0.1rem var(--bright-green) solid;
    border-radius: 1.5rem;

    cursor: default;
  }

  p {
    color: var(--bright-green);
    font-weight: 500;
    font-size: 0.9rem;
  }
</style>