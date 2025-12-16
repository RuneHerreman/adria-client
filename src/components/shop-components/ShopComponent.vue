<script setup>
import * as API from "@/assets/js/data-connector/api"
import { useUserDataStore } from "@/data/user-data";
import CosmeticCompoment from "@/components/shop-components/CosmeticCompoment.vue";
import {ref} from "vue";
import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";

const cosmetics = await API.getAllCosmetics(useUserDataStore().getUserID()).then(cosmetics => cosmetics.filter(cosmetic => cosmetic.points !== 0))
const showPopup = ref(false);
const selectedCosmetic = ref(null);

function toggleCosmeticPopup(cosmetic){
  selectedCosmetic.value = cosmetic;
  showPopup.value = !showPopup.value;
}

function closePopup(){
  showPopup.value = false;
  selectedCosmetic.value = null;
}
</script>

<template>
  <img id="banner-badges" src="/assets/media/spotlight/BannerBadges.png" alt="Promo Banner with Badges">
  <section id="badges">
    <h2>Badges</h2>
    <CosmeticCompoment
        v-for="cosmetic in cosmetics"
        :cosmetic="cosmetic"
        :key="cosmetic.cosmeticId"
         @click="toggleCosmeticPopup(cosmetic)"
    />
    <DefaultPopupComponent
        class="cosmetic-popup"
        v-if="showPopup && selectedCosmetic"
        @close="closePopup"
        :breathe="true"
    >
      <img :src="`data:image/*;base64,${selectedCosmetic.image}`" :alt="selectedCosmetic.itemName">
      <h3>{{ selectedCosmetic.itemName }}</h3>
      <p>{{ selectedCosmetic.points }} XP</p>
    </DefaultPopupComponent>
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