<script setup lang="ts">
import SpotlightComponent from "@/components/dashboard-components/SpotlightComponent.vue";
import {Course} from "@/assets/js/Course.js"
import {ref} from "vue";
import CourseCarousel from "@/components/dashboard-components/CourseCarousel.vue";
const courses = ref<Course[]>([
  {
    id: 1,
    name: "A complete guide to cats",
    description: "All about cats",
    category: "Animals",
    duration: 120,
    level: "hard",
    modules: [1, 2, 3],
    pointsOnCompletion: 50
  },
  {
    id: 2,
    name: "How to hunt",
    description: "Learn hunting skills",
    category: "Survival",
    duration: 90,
    level: "moderate",
    modules: [4, 5, 6],
    pointsOnCompletion: 40
  },
  {
    id: 2,
    name: "How to hunt",
    description: "Learn hunting skills",
    category: "Survival",
    duration: 90,
    level: "moderate",
    modules: [4, 5, 6],
    pointsOnCompletion: 40
  },
  {
    id: 2,
    name: "How to hunt",
    description: "Learn hunting skills",
    category: "Survival",
    duration: 90,
    level: "moderate",
    modules: [4, 5, 6],
    pointsOnCompletion: 40
  },
  {
    id: 2,
    name: "How to hunt",
    description: "Learn hunting skills",
    category: "Survival",
    duration: 90,
    level: "moderate",
    modules: [4, 5, 6],
    pointsOnCompletion: 40
  },
  {
    id: 2,
    name: "How to hunt",
    description: "Learn hunting skills",
    category: "Survival",
    duration: 90,
    level: "moderate",
    modules: [4, 5, 6],
    pointsOnCompletion: 40
  }
])


</script>

<template>
  <section id="available-courses-component">
    <SpotlightComponent class="spotlight"
                            src="src/assets/media/spotlight/Spotlight_Miners.png"
    />

    <CourseCarousel
        name="Explore new fields"
        :courseList="courses"
    />

    <CourseCarousel
        name="Explore new fields"
        :courseList="courses"
    />

    <CourseCarousel
        name="Explore new fields"
        :courseList="courses"
    />

    <div class="half-spotlight-container">
      <SpotlightComponent
          src="src/assets/media/spotlight/Spotlight_bread.png"
          :half="true"
      />
      <SpotlightComponent
          src="src/assets/media/spotlight/Spotlight_Surgeon.png"
          :half="true"
      />
    </div>

    <CourseCarousel
        name="Explore new fields"
        :courseList="courses"
    />


  </section>

</template>

<style scoped>
.half-spotlight-container{
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
}
</style>