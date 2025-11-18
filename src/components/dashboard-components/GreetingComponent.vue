<script setup lang="ts">
  const name = "Simon Cornelissis"
  function getGreeting(){
    const date = new Date().getHours();

    if (date >= 6 && date <= 11){
      return "Good morning";
    }

    if (date >= 12 && date <= 16){
      return "Good afternoon";
    }

    if (date >= 17 && date <= 23){
      return "Good evening";
    }

    return "Hello";
  }
</script>

<template>
  <h1>{{ getGreeting() }}, <br> {{name}}</h1>
</template>

<style scoped>
  h1 {
    line-height: 2.6rem;
  }
</style>