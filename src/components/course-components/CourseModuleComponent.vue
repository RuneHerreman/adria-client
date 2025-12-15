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
const moduleData = await API.getNextCourseModule(courseId, useUserDataStore().getUserID())

const showQuestions = ref(false);

const mockModuleDescription = `<h2>Welcome to Bread Making</h2><p>In this module, you will learn the fundamental concepts of bread making. We will explore the history of bread, the basic ingredients, and the science behind fermentation. Understanding these basics will set you up for success in creating delicious homemade bread.</p><h3>Key Topics</h3><p>History of breadmaking, ingredient selection, and the role of yeast in fermentation.</p>`;
</script>

<template>
  <main>
    <GreyButtonComponent id="back-button" :route="`/course/${courseId}`"><img alt="back arrow" src="/assets/icons/left-arrow.svg"> Back</GreyButtonComponent>
    <QuestionAnswerComponent v-if="showQuestions" :QAS="moduleData.questions"/>
    <ModuleContentComponent v-else @continue="showQuestions = true" :content="moduleData.content"/>
  </main>
</template>

<style scoped>

</style>