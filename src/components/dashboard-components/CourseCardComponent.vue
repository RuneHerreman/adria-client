<script setup>
  import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";
  import ProgressComponent from "@/components/dashboard-components/ProgressComponent.vue";

  const props = defineProps({
    name: {type: String, required: true},
    difficulty: {type: String, required: true},
    completion: {type: Number, default: 0},
    enrolled: {type: Boolean, default: false},
    coverImage: {type: String, default: false},
  });
</script>

<template>
  <article
      class="course-card"
      :class="{enrolledCourse: enrolled}"
      :style="{
        background: `url('data:image/jpeg;base64,${coverImage}') right/contain no-repeat`
      }"
  >
    <div class="course-wrapper">
      <p class="course-name">{{name}}</p>
      <div
          class="course-info"
      >
        <DifficultyComponent :difficulty="difficulty"></DifficultyComponent>
        <div v-if="enrolled" class="progress-container">
          <ProgressComponent :progress="completion"></ProgressComponent>
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
  height: var(--course-card-background-height);
  width: auto;
  aspect-ratio: 30/13;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 0.5rem;

  background-size: var(--course-card-background-height);

  cursor: pointer;
  transition: .1s ease-in-out;
}

article:hover{
  background-size: calc(var(--course-card-background-height) + 0.5rem);
  box-shadow: 0 0 0.3rem rgba(217, 217, 217, 0.3);
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
  white-space: pre-wrap;
  font-size: 1.2rem;
  line-height: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.5rem;
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