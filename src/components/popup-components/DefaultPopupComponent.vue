<script setup lang="ts">

import YesNoButtonComponent from "@/components/buttons/YesNoButtonComponent.vue";
</script>

<template>
  <section class="popup">
    <slot id="text" name="text-content"></slot>
    <YesNoButtonComponent/>
  </section>
</template>

<style scoped>
  .popup{
    background-color: white;
    border-radius: 0.5rem;
    border: #DADADA solid 0.0612rem;
    box-shadow: 0 0 10rem 20rem rgba(51, 51, 51, 0.1);

    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #text{
    margin-bottom: 2rem;
  }
</style>