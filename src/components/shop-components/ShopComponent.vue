<script setup>
import * as API from "@/assets/js/data-connector/api";
import { useUserDataStore } from "@/data/user-data";
import CosmeticCompoment from "@/components/shop-components/CosmeticCompoment.vue";
import {ref} from "vue";
import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";

let cosmetics = await API.getAllCosmetics(useUserDataStore().getUserID()).then(cosmetics => cosmetics.filter(cosmetic => cosmetic.points !== 0));
const showPopup = ref(false);
const selectedCosmetic = ref(null);

function toggleCosmeticPopup(cosmetic){
  selectedCosmetic.value = cosmetic;
  showPopup.value = !showPopup.value;
}

const errorMessage = ref(null);
const infoMessage = ref(null);
const emit = defineEmits(['profileUpdated']);

function closePopup(){
  showPopup.value = false;
  selectedCosmetic.value = null;
  errorMessage.value = null;
  infoMessage.value = null;
}

async function processCosmeticPurchase() {
  try {
    const result = await API.purchaseCosmetic(useUserDataStore().getUserID(), selectedCosmetic.value.cosmeticId);

    if (result && typeof result === 'string' && result.includes('successful')) {
      infoMessage.value = result;
      emit("profileUpdated");
      setTimeout(closePopup, 1000);
    } else {
      throw new Error(result || 'Purchase failed');
    }
  } catch (error) {
    errorMessage.value = error.message || "Purchase failed";
  }
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
        @affirmation="processCosmeticPurchase"
        :breathe="true"
    >
      <p class="error-alert" v-if="errorMessage">{{errorMessage}}</p>
      <p class="info-alert" v-if="infoMessage">{{infoMessage}}</p>
      <img :src="`data:image/*;base64,${selectedCosmetic.image}`" :alt="selectedCosmetic.itemName">
      <h3>{{ selectedCosmetic.itemName }}</h3>
      <p id="popup-point">{{ selectedCosmetic.points }} XP</p>
    </DefaultPopupComponent>
  </section>
</template>

<style scoped>


#banner-badges {
  margin: 3rem 0 2rem;
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

#badges {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
}

@media (max-width: 1000px) {
  #badges {
    grid-template-columns: repeat(2, 1fr);
  }
}

#badges h2{
  grid-column: 1 / -1;
}
</style>