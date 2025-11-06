<script setup>

import BannerImageComponent from "@/components/BannerImageComponent.vue";
import SpotlightFullComponent from "@/components/dashboard-spotlight/SpotlightFullComponent.vue";
import {ref} from "vue";
import CourseCarousel from "@/components/dashboard-components/CourseCarousel.vue";
const courses = ref([
  {name: "A complete guide to cats", difficulty: "hard", enrolled: true, completion: 75},
  {name: "How to hunt", difficulty: "moderate", enrolled: true, completion: 90},
  {name: "Cleaning 101", difficulty: "easy", enrolled: true, completion: 35},
  {name: "How to mine", difficulty: "hard", enrolled: false, completion: 0},
])

</script>

<template>
  <section id="available-courses-component">
    <SpotlightFullComponent class="spotlight"
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

    <CourseCarousel
        name="Explore new fields"
        :courseList="courses"
    />
  </section>

</template>

<style scoped>

</style>