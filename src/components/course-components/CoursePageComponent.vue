<script setup>

import CourseDescriptionComponent from "@/components/course-components/CourseDescriptionComponent.vue";
import CourseActionsComponent from "@/components/course-components/CourseActionsComponent.vue";
import CourseBannerComponent from "@/components/course-components/CourseBannerComponent.vue";
import {onMounted} from "vue";
import router from "@/router/index.js";
import * as API from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";

const userData = useUserDataStore();
const chosenCourse = await API.getCourseByID(userData.getCourseID());

onMounted(()=>{
  if (userData.getCourseID() === null) {
    router.push("/dashboard");
  }
});
console.log(userData.getCourseID());

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