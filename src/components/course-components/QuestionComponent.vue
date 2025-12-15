<script setup lang="ts">

</script>

<template>
  <p><slot></slot></p>
</template>

<style scoped>
p{
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20rem;
  font-size: 1.25rem;

  border: 0.1rem solid var(--grey-background);
  border-radius: 0.5rem;
  padding: 3rem;
  line-height: 120%;
  font-weight: 450;
  color: #333333;
  letter-spacing: -0.05rem;
  word-break: break-all;
  white-space: normal;
}
</style>