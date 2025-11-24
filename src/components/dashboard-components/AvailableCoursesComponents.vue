<script setup>
import SpotlightComponent from "@/components/dashboard-components/SpotlightComponent.vue";
import CourseCarousel from "@/components/dashboard-components/CourseCarousel.vue";
import * as API from "@/assets/js/data-connector/api";

const allCourses = await API.removeUserCoursesFromList(await API.getCourses(), "389bc6fb-080e-4450-ac9a-2ff10868b0d6");
const survivalCourses = await API.removeUserCoursesFromList(await API.getCoursesByCategory("Survival Skills"), "389bc6fb-080e-4450-ac9a-2ff10868b0d6");
const lifestyleCourses = await API.removeUserCoursesFromList(await API.getCoursesByCategory("Life Skills"), "389bc6fb-080e-4450-ac9a-2ff10868b0d6");
const cookingCourses = await API.removeUserCoursesFromList(await API.getCoursesByCategory("Culinary Arts"), "389bc6fb-080e-4450-ac9a-2ff10868b0d6");

console.log(allCourses);
</script>

<template>
  <section id="available-courses-component">
    <SpotlightComponent class="spotlight"
                            src="/assets/media/spotlight/Spotlight_Miners.png"
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
      />
      <SpotlightComponent
          src="/assets/media/spotlight/Spotlight_Surgeon.png"
          :half="true"
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