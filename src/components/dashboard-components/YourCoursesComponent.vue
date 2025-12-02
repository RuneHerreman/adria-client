<script setup>

import CourseCardComponent from "@/components/dashboard-components/CourseCardComponent.vue";
import * as API from "@/assets/js/data-connector/api.js";
import {handleCourseClick} from "@/assets/js/script.js";

const courses = await API.getUserCourses("389bc6fb-080e-4450-ac9a-2ff10868b0d6");
console.log(courses);
</script>

<template>
  <section id="your-courses-component">
    <h2>Your courses</h2>
    <CourseCardComponent
      v-for="course in courses"
      :key="course.courseId"
      :name="course.courseName"
      :difficulty="course.level"
      :completion="course.progressPercentage"
      :enrolled="true"
      :coverImage="course.coverImage"
      @click="handleCourseClick(course.courseId)"
    />
  </section>
</template>

<style scoped>
  #your-courses-component {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 600;
    width: max-content;
  }
</style>