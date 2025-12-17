<script setup>
import CourseDescriptionComponent from "@/components/course-components/CourseDescriptionComponent.vue";
import CourseActionsComponent from "@/components/course-components/CourseActionsComponent.vue";
import CourseBannerComponent from "@/components/course-components/CourseBannerComponent.vue";
import {onBeforeMount} from "vue";
import router from "@/router/index.js";
import * as API from "@/assets/js/data-connector/api.js";
import {useRoute} from "vue-router";
const route = useRoute();
const courseID = route.params.id;

onBeforeMount(()=>{
  if (!route.params.id) {
    router.push("/dashboard");
  }
});

const chosenCourse = await API.getCourseByID(courseID);


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
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 5rem;
}
</style>