<script setup>
const props = defineProps({
  answerId: String,
  answerText: String,
  isCorrect: Boolean,
  isSelected: Boolean,
  showResult: Boolean
});

const emit = defineEmits(["answer-clicked"]);

const handleClick = () => {
  if (!props.showResult) { // Only allow clicks before result
    emit('answer-clicked', props.answerId);
  }
}

</script>

<template>
  <p
      @click="handleClick"
      :class="{
        'correct': showResult && isCorrect,
        'wrong': showResult && !isCorrect,
        'disabled': showResult
      }"
  >{{answerText}}</p>
</template>

<style scoped>
p{
  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;
  font-size: 1rem;

  border: 0.13rem solid var(--grey-background);
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

p:hover:not(.correct):not(.wrong) {
  background-color: var(--grey-background);
  font-weight: 500;
}

.correct {
  background-color: #98CE7E;
  color: #377915;
  border-color: #5CB82E;
}

.wrong {
  background-color: #EC9393;
  color: #b81414;
  border-color: #E46767;
}

.disabled {
  cursor: not-allowed;
}
</style>