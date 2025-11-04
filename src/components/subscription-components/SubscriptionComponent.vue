<script setup>
import {computed} from "vue";
import BrightGreenButtonComponent from "@/components/BrightGreenButtonComponent.vue";

const props = defineProps({
  subscriptionName: {type: String, required: true},
  subscriptionPrice: {type: Number, required: true},
  perks: {type: Array, required: true},
})
</script>

<template>
  <article class="subscriptionTier">
    <div>
      <p class="subscriptionName">{{subscriptionName}}</p>
      <p class="subscriptionPrice">₳{{subscriptionPrice}}<span> / mo</span></p>
      <ul>
        <li v-for="perk in perks" :key="perk">{{perk}}</li>
      </ul>
    </div>
    <div>
      <BrightGreenButtonComponent class="btnSubscribe">Choose {{subscriptionName}}</BrightGreenButtonComponent>
    </div>
  </article>
</template>

<style scoped>

</style>