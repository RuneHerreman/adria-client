<script setup lang="ts">

import InputboxComponent from "@/components/InputboxComponent.vue";
import LightGreenButtonComponent from "@/components/buttons/LightGreenButtonComponent.vue";
import {ref} from "vue";

const emits = defineEmits(["apply"])
const promoCode = ref("");
function clicked(){
  emits("apply", promoCode.value);
  console.log(promoCode.value);
}


</script>

<template>
  <div>
    <InputboxComponent
        v-model="promoCode"
        class="inputbox"
        type="text"
        placeholder="Enter a promo code"
    />
    <LightGreenButtonComponent route="" @click="clicked">Apply code</LightGreenButtonComponent>
  </div>

</template>

<style scoped>
div{
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
}
</style>