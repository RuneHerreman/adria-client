<script setup>
import SpotlightComponent from "@/components/dashboard-components/SpotlightComponent.vue";
import CourseCarousel from "@/components/dashboard-components/CourseCarousel.vue";
import * as API from "@/assets/js/data-connector/api";
import {useUserDataStore} from "@/data/user-data.js";
import router from "@/router/index.js";

const allCourses = await API.getCourses(useUserDataStore().getUserID());
const survivalCourses = await API.getCoursesByCategory("Survival Skills", useUserDataStore().getUserID());
const lifestyleCourses = await API.getCoursesByCategory("Life Skills", useUserDataStore().getUserID());
const cookingCourses = await API.getCoursesByCategory("Culinary Arts", useUserDataStore().getUserID());

</script>

<template>
  <section id="available-courses-component">
    <SpotlightComponent
        class="spotlight"
        src="/assets/media/spotlight/Spotlight_Miners.png"
        @click="()=>{router.push('/course/70d62244-fe2c-4acb-8943-40eb26e042cc')}"
    />

    <CourseCarousel
        name="Broaden your horizons"
        :courseList="allCourses"
    />

    <CourseCarousel
        name="Survive in the Adrean wild"
        :courseList="survivalCourses"
    />

    <CourseCarousel
        name="Turn your life around"
        :courseList="lifestyleCourses"
    />

    <div class="half-spotlight-container">
      <SpotlightComponent
          src="/assets/media/spotlight/Spotlight_bread.png"
          :half="true"
          @click="() => {router.push('/course/5fe6e3d1-0a74-4759-9bad-a5f0e48a9340')}"
      />
      <SpotlightComponent
          src="/assets/media/spotlight/Spotlight_Surgeon.png"
          :half="true"
          @click="() => {router.push('/course/9d649dc9-a233-4274-904c-3f75936ae86e')}"
      />
    </div>

    <CourseCarousel
        name="Real terrestrial cooking"
        :courseList="cookingCourses"
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

  margin-top: 2rem;
}
</style>