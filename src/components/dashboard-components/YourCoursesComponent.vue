<script setup>

import CourseCardComponent from "@/components/dashboard-components/CourseCardComponent.vue";
import * as API from "@/assets/js/data-connector/api.js";
import {handleCourseClick} from "@/assets/js/script.js";
import {useUserDataStore} from "@/data/user-data.js";

const courses = await API.getUserCourses(useUserDataStore().getUserID());

console.log(courses);
</script>

<template>
  <section id="your-courses-component">
    <h2>Your courses</h2>
    <div v-if="!courses || courses.length === 0" id="no-courses-message">No courses yet...</div>
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

  #no-courses-message{
    aspect-ratio: 30/13;
    height: var(--course-card-background-height);
    width: auto;

    color: var(--grey-text);
    margin-top: 4rem;
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 600;
    width: max-content;
  }
</style>