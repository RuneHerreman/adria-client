<script setup lang="ts">
import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";
import {Course} from "@/assets/js/Course";

const props = defineProps<{
  course: Course[]
}>();

console.log(props.course[0]);
</script>

<template>
  <section id="course-banner">
    <div id="course-wrapper">
      <DifficultyComponent id="course-difficulty" :difficulty="course[0].level"/>
      <h1 id="course-name">{{course[0].name}}</h1>
    </div>
  </section>
</template>

<style scoped>
#course-banner {
  position: relative;

  width: 100%;
  height: auto;
  aspect-ratio: 3.275;
  padding: 1.5rem;

  border-radius: 1rem;
  background: linear-gradient(45deg, #76D926, #2199DE);
}

#course-banner::after {
  content: "";
  position: absolute;
  display: block;

  inset: 0;
  width: 100%;
  height: 100%;

  border-radius: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.33) 0%, transparent 40%);
  z-index: 1;
}

#course-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}


#course-name{
  margin-top: .5rem;
  color: white;
  font-size: 2.75rem;
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

#course-name::after {
  display: none;
}

#course-difficulty{
  font-size: 0.9rem;
  padding: 0.3rem 0.7rem;
}
</style>