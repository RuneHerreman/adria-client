<script setup lang="ts">
const props = defineProps({
  answerId: String,
  answerText: String
})

const emit = defineEmits(["answer-clicked"]);

const handleClick = () => {
  emit('answer-clicked', props.answerId);
}
</script>

<template>
  <p @click="handleClick">{{answerText}}</p>
</template>

<style scoped>
p{
  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;
  font-size: 1rem;

  border: 0.1rem solid var(--grey-background);
  border-radius: 0.5rem;
  padding: 1.5rem;
  line-height: 120%;
  font-weight: 450;
  color: #333333;
  letter-spacing: -0.05rem;
  word-break: break-all;
  white-space: normal;

  cursor: pointer;
  transition: 0.15s ease-in-out;

}

p:hover{
  background-color: var(--grey-background);
  font-weight: 500;
}
</style>