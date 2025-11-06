<script setup>

import CourseCardComponent from "@/components/dashboard-components/CourseCardComponent.vue";
import {computed, ref} from "vue";

const courses = ref([
  {name: "A complete guide to cats", difficulty: "hard", enrolled: true, completion: 75},
  {name: "How to hunt", difficulty: "moderate", enrolled: true, completion: 90},
  {name: "Cleaning 101", difficulty: "easy", enrolled: true, completion: 35},
  {name: "How to mine", difficulty: "hard", enrolled: false, completion: 0},
])

const enrolledCourses = computed(() => courses.value.filter(c => c.enrolled))

</script>

<template>
  <section id="your-courses-component">
    <h2>Your courses</h2>
    <CourseCardComponent
      v-for="course in enrolledCourses"
      :key="course.name"
      :name="course.name"
      :difficulty="course.difficulty"
      :completion="course.completion"
      :enrolled="course.enrolled"
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