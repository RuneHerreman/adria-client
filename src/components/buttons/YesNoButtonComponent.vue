<script setup lang="ts">

import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import LightGreenButtonComponent from "@/components/buttons/LightGreenButtonComponent.vue";

const props = defineProps({
  negativeText: {type:String, required: false, default: "No"},
  positiveText: {type:String, required: false, default: "Yes"}
})

const emits = defineEmits(["close", "affirmation"]);

function closePopup(){
  emits("close");
}

function handleAffirmation(){
  emits("affirmation");
}
</script>

<template>
  <div>
    <GreyButtonComponent class="btnPopup" @click="closePopup">{{props.negativeText}}</GreyButtonComponent>
    <LightGreenButtonComponent class="btnPopup" @click="handleAffirmation">{{props.positiveText}}</LightGreenButtonComponent>
  </div>
</template>

<style scoped>
  div {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>