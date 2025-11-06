<script setup>
  import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";
  import ProgressComponent from "@/components/dashboard-components/ProgressComponent.vue";

  const props = defineProps({
    name: {type: String, required: true},
    difficulty: {type: String, required: true},
    completion: {type: Number, default: 0},
    enrolled: {type: Boolean, default: false}
  });
</script>

<template>
  <article
      class="course-card"
      :class="{enrolledCourse: enrolled}"
      :style="{ background: `url(../../assets/media/course-background/${name}.jpg)`}"
  >
    <div class="course-wrapper">
      <p class="course-name">{{name}}</p>
      <div
          class="course-info"
      >
        <DifficultyComponent :difficulty="difficulty"></DifficultyComponent>
        <div v-if="enrolled" class="progress-container">
          <ProgressComponent progress="50"></ProgressComponent>
          <p class="progress-percentage">{{completion}}%</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
article{
  position: relative;

  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem;
  height: 7.5rem;
  width: auto;
  aspect-ratio: 30/13;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 0.5rem;

  background: url("../../assets/media/course-background/Bird Blindness - A deepdive.jpg") no-repeat center right;
  background-size: contain;

  cursor: pointer;
  transition: .05s ease-in-out;
}

article:hover{
  scale: 101%;
  box-shadow: 0 0.25rem 0.25rem rgba(230, 230, 230, 0.25);
}

.course-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 2;
}

article::after{
  content: "";
  display: block;
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  border-radius: 0.5rem;
  background: linear-gradient(to right, white 60%, transparent 80%);
  z-index: 1;
}

.course-name {
  width: 60%;
  white-space: wrap;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
}

.progress-container {
  display: flex;
  align-items: center;

  gap: 0.5rem;
}

.progress-percentage{
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
}

.course-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}


</style>