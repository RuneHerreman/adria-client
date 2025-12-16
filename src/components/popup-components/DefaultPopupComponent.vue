<script setup>

import YesNoButtonComponent from "@/components/buttons/YesNoButtonComponent.vue";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";

const props = defineProps({
  singleButton: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: "Go back"
  },
  breathe: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(["close", "affirmation"]);
function handleClose(){
  emits("close");
}

function handleAffirmation(){
  emits("affirmation");
}
</script>

<template>
  <div class="popup-background"></div>
  <section class="popup" :class="{'breatheAnimation': breathe}">
    <slot id="text" name="text-content"></slot>
    <slot></slot>
    <YesNoButtonComponent
        v-if="!singleButton"
        negative-text="Go back"
        positive-text="Purchase"
        @close="handleClose()"
        @affirmation="handleAffirmation()"
    />
    <div v-else class="single-button-container">
      <GreyButtonComponent @click="handleClose()">{{ buttonText }}</GreyButtonComponent>
    </div>
  </section>
</template>

<style scoped>
  @keyframes breathe-glow {
    0%, 100%{
      box-shadow: 0 0 50px 10px rgba(225, 128, 17, 0.59);
    }
    50% {
      box-shadow: 0 0 50px 20px rgba(255, 187, 15, 0.5);
    }
  }

  .popup{
      background-color: white;
      border-radius: 1rem;
      border: #DADADA solid 0.0612rem;
      box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);

      padding: 2rem 1.5em 1.5rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
  }

  .popup-background {
    content: "";
    display: block;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.27);
    z-index: 1;
  }

  .single-button-container {
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
  }

  .popup:has(img){
    display: flex;
    flex-direction: column;
    width: 25rem;
  }
  .popup :deep(img){
    align-self: center;
    width: 12rem;
    margin-bottom: 1rem;
  }

  .breatheAnimation{
    animation: breathe-glow 2s infinite;
  }
</style>