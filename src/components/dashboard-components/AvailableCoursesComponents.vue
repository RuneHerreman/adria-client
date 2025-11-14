<script setup>
import SpotlightComponent from "@/components/dashboard-components/SpotlightComponent.vue";
import CourseCarousel from "@/components/dashboard-components/CourseCarousel.vue";
import * as API from "@/assets/js/data-connector/api"

const allCourses = await API.getCourses();
const survivalCourses = await API.getCoursesByCategory("Survival");
const lifestyleCourses = await API.getCoursesByCategory("Lifestyle");
const cookingCourses = await API.getCoursesByCategory("Culinary Arts");

console.log(allCourses);
</script>

<template>
  <section id="available-courses-component">
    <SpotlightComponent class="spotlight"
                            src="src/assets/media/spotlight/Spotlight_Miners.png"
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
          src="src/assets/media/spotlight/Spotlight_bread.png"
          :half="true"
      />
      <SpotlightComponent
          src="src/assets/media/spotlight/Spotlight_Surgeon.png"
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