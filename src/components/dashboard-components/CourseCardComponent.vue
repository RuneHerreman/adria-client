<script setup>
  import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";

  const props = defineProps({
    name: {type: String, required: true},
    difficulty: {type: String, required: true},
    completion: {type: Number, required: true},
    enrolled: {type: Boolean, default: false}
  })
</script>

<template>
  <article
      class="course-card"
      :class="{enrolledCourse: enrolled}"
      :style="{ backgroundImage: `url(../../assets/media/${name}.png)` }"
  >
    <p>{{name}}</p>
    <DifficultyComponent :difficulty="difficulty"></DifficultyComponent>
  </article>
</template>

<style scoped>
article{
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem;
  height: 6rem;
  width: auto;
  aspect-ratio: 30/13;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 0.5rem;
}
</style>