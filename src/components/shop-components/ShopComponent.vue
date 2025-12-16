<script setup>
import * as API from "@/assets/js/data-connector/api"
import { useUserDataStore } from "@/data/user-data";
import CosmeticCompoment from "@/components/shop-components/CosmeticCompoment.vue";

const cosmetics = await API.getAllCosmetics(useUserDataStore().getUserID()).then(cosmetics => cosmetics.filter(cosmetic => cosmetic.points !== 0))
</script>

<template>
  <img id="banner-badges" src="/assets/media/spotlight/BannerBadges.png" alt="Promo Banner with Badges">
  <section id="badges">
    <h2>Badges</h2>
    <CosmeticCompoment
        v-for="cosmetic in cosmetics"
        :cosmetic="cosmetic"
        :key="cosmetic.cosmeticId"
    />
  </section>
</template>

<style scoped>
#banner-badges {
  margin: 3rem 0 2rem;
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
}

#badges {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
}

#badges h2{
  grid-column: 1 / -1;
}
</style>