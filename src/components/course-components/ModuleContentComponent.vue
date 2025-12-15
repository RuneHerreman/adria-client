<script setup>
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";

const props = defineProps({
  content: String
});
const emits = defineEmits(["continue"]);


function handleContinueClick(){
  emits("continue");
}
</script>

<template>
  <section>
    <article id="module-content" v-html="content"></article>
    <BrightGreenButtonComponent @click="handleContinueClick" id="continue">Continue to questions</BrightGreenButtonComponent>
  </section>
</template>

<style scoped>
#module-content{
  padding-top: 3rem;
  line-height: 120%;
}

#module-content :deep(h2) {
  margin-bottom: 0.8rem;
  color: #0d0d0d;
}

#module-content :deep(h2)::after {
  content: "";
  display: block;
  padding-bottom: 0.75rem;
  border-bottom: 0.1rem solid var(--grey-background);
  width: 100%;
}


#module-content :deep(h3) {
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

#module-content :deep(p) {
  margin-bottom: 0.75rem;
  color: #333333;
}

#module-content :deep(p:has(+ h3)) {
  margin-bottom: 1.5rem;
}

#continue{
  margin-top: 5rem;
  align-self: flex-end;
}

section{
  width: 85%;
  display: flex;
  flex-direction: column;
}
</style>