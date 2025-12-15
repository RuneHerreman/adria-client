<script setup>
import QuestionComponent from "@/components/course-components/QuestionComponent.vue";
import AnswerComponent from "@/components/course-components/AnswerComponent.vue";
import {ref, computed} from "vue";

const props = defineProps({QAS: Object});
const queue = ref([...props.QAS]);
const currentQuestion = computed(() => queue.value[0] ?? null);
const removeFirst = () => {
  queue.value.shift();
}

const selectedAnswerId = ref(null);
const correctAnswerId = ref(null);
const isChecking = ref(false);

const checkAnswer = async (answerId) => {
  if (isChecking.value) return; // Prevent multiple clicks

  isChecking.value = true;
  selectedAnswerId.value = answerId;

  try {
    // Send to server
    const data = await API.checkAnswer(currentQuestion.value.questionId, answerId);
    // data = { isCorrect: true/false, correctAnswerId: "..." }

    correctAnswerId.value = data.correctAnswerId;

    // Move to next question after showing result
    setTimeout(() => {
      removeFirst();
      selectedAnswerId.value = null;
      correctAnswerId.value = null;
      isChecking.value = false;
    }, 2000);

  } catch (error) {
    console.error('Error checking answer:', error);
    isChecking.value = false;
  }
}

console.log(currentQuestion.value)
</script>

<template>
<section id="qa-container">
  <QuestionComponent id="question">{{currentQuestion.question}}</QuestionComponent>
  <AnswerComponent
      v-for="answer in currentQuestion.answers"
      :key="answer.answerId"
      :answerId="answer.answerId"
      :answerText="answer.answer"
      @answer-clicked="checkAnswer"
  />
</section>
</template>

<style scoped>
#qa-container {
  padding-top: 1rem;
  width: 40rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 1rem;
}

#question {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
}
</style>