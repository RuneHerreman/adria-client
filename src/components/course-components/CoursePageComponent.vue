<script setup>

import CourseDescriptionComponent from "@/components/course-components/CourseDescriptionComponent.vue";
import CourseActionsComponent from "@/components/course-components/CourseActionsComponent.vue";
import CourseBannerComponent from "@/components/course-components/CourseBannerComponent.vue";
import {onMounted} from "vue";
import router from "@/router/index.js";
import * as API from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";

const userData = useUserDataStore();

onMounted(()=>{
  if (userData.getCourseID() === null) {
    router.push("/dashboard");
  }
});
console.log(userData.getCourseID());

const chosenCourse = await API.getCourseByID(userData.getCourseID());
console.log(chosenCourse)
</script>

<template>
  <main>
    <CourseBannerComponent :course="chosenCourse"/>
    <CourseDescriptionComponent :course="chosenCourse"/>
    <CourseActionsComponent :course="chosenCourse"/>
  </main>
</template>

<style scoped>

</style>