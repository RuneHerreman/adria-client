<script setup>
import QuestionComponent from "@/components/course-components/QuestionComponent.vue";
import AnswerComponent from "@/components/course-components/AnswerComponent.vue";
import {computed, ref, watch} from "vue";
import * as API from "@/assets/js/data-connector/api.js"
import {useUserDataStore} from "@/data/user-data.js";
import LoadingComponent from "@/components/LoadingComponent.vue";
import {useRoute} from "vue-router";

const props = defineProps({QAS: Object});
const queue = ref([...props.QAS]);
const currentQuestion = computed(() => queue.value[0] ?? null);
const removeFirst = () => {
  queue.value.shift();
}
const route = useRoute();
const courseId = route.params.id;
const selectedAnswerId = ref(null);
const correctAnswerId = ref(null);
const isChecking = ref(false);
const emit = defineEmits(["module-completed"]);

watch(queue, (newQueue) => {
  if (newQueue.length === 0) {
    emit('module-completed');
  }
}, { deep: true });

const checkAnswer = async (answerId) => {
  if (isChecking.value) return; // Prevent multiple clicks

  isChecking.value = true;
  selectedAnswerId.value = answerId;

  try {
    correctAnswerId.value = await API.checkAnswer(courseId, currentQuestion.value.questionId, answerId, useUserDataStore().getUserID());

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
</script>

<template>
  <div v-if="currentQuestion">

    <section id="qa-container">
      <QuestionComponent id="question">{{currentQuestion.question}}</QuestionComponent>
      <AnswerComponent
          v-for="answer in currentQuestion.answers"
          :key="answer.answerId"
          :answerId="answer.answerId"
          :answerText="answer.answer"
          :isCorrect="answer.answerId === correctAnswerId"
          :isSelected="answer.answerId === selectedAnswerId"

          :showResult="correctAnswerId !== null"
          @answer-clicked="checkAnswer"
      />
    </section>
  </div>
  <LoadingComponent v-else>next module</LoadingComponent>
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