<script setup>

import CourseDescriptionComponent from "@/components/course-components/CourseDescriptionComponent.vue";
import CourseActionsComponent from "@/components/course-components/CourseActionsComponent.vue";
import CourseBannerComponent from "@/components/course-components/CourseBannerComponent.vue";
import {onBeforeMount, onMounted} from "vue";
import router from "@/router/index.js";
import * as API from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";
import {useRoute} from "vue-router";
const route = useRoute()
const courseID = route.params.id

onBeforeMount(()=>{
  if (!route.params.id) {
    router.push("/dashboard");
  }
});

const chosenCourse = await API.getCourseByID(courseID);


console.log(courseID);

console.log(chosenCourse)
</script>

<template>
  <main id="course-page">
    <CourseBannerComponent :course="chosenCourse"/>
    <CourseDescriptionComponent :course="chosenCourse"/>
    <CourseActionsComponent :course="chosenCourse"/>
  </main>
</template>

<style scoped>
#course-page {
  display: grid;
  grid-template-areas:
      "banner banner"
      "description actions";
  grid-template-columns: 4fr 1fr;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 5rem;
}
</style>