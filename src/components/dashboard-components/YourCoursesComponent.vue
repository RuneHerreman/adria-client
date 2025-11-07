<script setup>

import CourseCardComponent from "@/components/dashboard-components/CourseCardComponent.vue";
import * as API from "@/assets/js/data-connector/api.js";

const courses = await API.getCoursesByCategory("Lifestyle");
console.log(courses[0]);
</script>

<template>
  <section id="your-courses-component">
    <h2>Your courses</h2>
    <CourseCardComponent
      v-for="course in courses"
      :key="course.name"
      :name="course.name"
      :difficulty="course.level"
      :completion="50"
      :enrolled="true"
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
    font-size: 1.75rem;
    width: max-content;
  }
</style>