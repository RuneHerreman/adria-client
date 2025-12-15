<script setup>
import {useRoute} from "vue-router";
import ModuleContentComponent from "@/components/course-components/ModuleContentComponent.vue";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import * as API from "@/assets/js/data-connector/api.js"
import {useUserDataStore} from "@/data/user-data.js";
import QuestionAnswerComponent from "@/components/course-components/QuestionAnswerComponent.vue";
import {ref} from "vue";

const route = useRoute();
const courseId = route.params.id;
const moduleData = ref(await API.getNextCourseModule(courseId, useUserDataStore().getUserID()));

const showQuestions = ref(false);

const loadNextModule = async () => {
  const nextModule = await API.getNextCourseModule(courseId, useUserDataStore().getUserID());

  if (nextModule) {
    moduleData.value = nextModule;
    showQuestions.value = false;
  } else {
    console.log('Course completed!');
  }
}
</script>

<template>
  <main>
    <GreyButtonComponent
        id="back-button"
        :route="`/course/${courseId}`"
    >
      <img alt="back arrow" src="/assets/icons/left-arrow.svg">
      Back
    </GreyButtonComponent>
    <QuestionAnswerComponent
        v-if="showQuestions"
        :QAS="moduleData.questions"
        @module-completed="loadNextModule"
    />
    <ModuleContentComponent
        v-else
        @continue="showQuestions = true"
        :content="moduleData.content"
    />
  </main>
</template>

<style scoped>

</style>