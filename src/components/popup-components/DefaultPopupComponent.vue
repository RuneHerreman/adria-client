<script setup lang="ts">

import YesNoButtonComponent from "@/components/buttons/YesNoButtonComponent.vue";
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
  <section class="popup">
    <slot id="text" name="text-content"></slot>
    <YesNoButtonComponent
        negative-text="Go back"
        @close="handleClose()"
        @affirmation="handleAffirmation()"
    />
  </section>
</template>

<style scoped>
  .popup{
    background-color: white;
    border-radius: 1rem;
    border: #DADADA solid 0.0612rem;
    box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);

    padding: 2rem 1.5em 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
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
</style>