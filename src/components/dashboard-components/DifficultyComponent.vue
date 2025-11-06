<script setup>
  const props = defineProps({
    difficulty: {type: String, required: true}
  })
</script>

<template>
  <p
      class="difficulty"
      :class="difficulty.toLowerCase()"
  >
    {{difficulty}}
  </p>
</template>

<style scoped>
  p {
    border-radius: 0.25rem;
    font-size: 0.65rem;
    font-weight: 500;
    padding: 0.2rem 0.625rem;
    text-transform: capitalize;
    width: fit-content;
    color: white;
  }
  .easy{
    background: var(--cat-easy);
  }

  .moderate {
    background: var(--cat-moderate);
  }

  .hard{
    background: var(--cat-hard);
  }

  .expert{
    background: var(--cat-expert);
  }
</style>