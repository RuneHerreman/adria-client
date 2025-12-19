<script setup>
import * as API from "@/assets/js/data-connector/api.js";

const props = defineProps({
  playerId: {
    type: String
  }
});

const cosmetics = await API.getUserCosmetics(props.playerId);
</script>

<template>
  <p id="no-cosmetics" v-if="cosmetics.length === 0">User has no cosmetics</p>
  <div id="badge-container" v-else>
    <img :src="`data:image/*;base64,${cosmetic.image}`" :alt="cosmetic.itemName"
      v-for="cosmetic in cosmetics"
    >
  </div>
</template>

<style scoped>
  #badge-container {
    display: grid;
    padding-top: 0.5rem;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  #badge-container img {
    width: 100%;
  }

  #no-cosmetics{
    font-size: 0.8rem;
  }
</style>