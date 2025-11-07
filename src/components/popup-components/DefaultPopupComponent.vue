<script setup>

import YesNoButtonComponent from "@/components/buttons/YesNoButtonComponent.vue";

const props = defineProps({
  singleButton: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: "Go back"
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
  <section class="popup">
    <slot id="text" name="text-content"></slot>
    <YesNoButtonComponent
        v-if="!singleButton"
        negative-text="Go back"
        @close="handleClose()"
        @affirmation="handleAffirmation()"
    />
    <div v-else class="single-button-container">
      <button class="button grey-button" @click="handleClose()">{{ buttonText }}</button>
    </div>
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
    transform: translate(-50%, -150%);

  }

  .single-button-container {
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
  }

  .grey-button {
    background-color: var(--grey-background);
    color: var(--grey-text);
    border: none;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
  }
</style>