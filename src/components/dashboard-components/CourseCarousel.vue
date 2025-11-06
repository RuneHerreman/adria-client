<script setup lang="ts">
import CourseCardComponent from "@/components/dashboard-components/CourseCardComponent.vue";
import {Course} from "@/assets/js/Course";

const props = defineProps<{
  name: {type:String, required: true},
  courseList: Course[]
}>();

</script>

<template>
  <section class="carousel-wrapper">
    <h2>{{name}}</h2>
    <article class="carousel">
      <CourseCardComponent
          v-for="(course, idx) in courseList"
          :key="course.name"
          :name="course.name"
          :difficulty="course.level"
          :enrolled="false"
      />
    </article>
  </section>

</template>

<style scoped>
  .carousel{
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
    overflow: scroll;
    scrollbar-width: none;
  }

  h2{
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .carousel-wrapper {
    width: calc(100% - 2rem);

  }
</style>