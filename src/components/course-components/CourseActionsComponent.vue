<script setup lang="ts">
import {ref} from "vue";
import {Course} from "@/assets/js/Course";
import ProgressComponent from "@/components/dashboard-components/ProgressComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";
const enrolled = ref(false);

const props = defineProps<{
  course: Course[]
}>();

console.log(props.course[0]);
</script>

<template>
  <section id="course-actions">
    <section v-if="enrolled" id="course-actions-enrolled">
      <h2>Continue learning</h2>
      <div v-if="enrolled" class="progress-container">
        <ProgressComponent :progress="15"></ProgressComponent>
        <p class="progress-percentage">{{15}}%</p>
      </div>
      <div id="course-buttons">
        <BrightGreenButtonComponent>Learn</BrightGreenButtonComponent>
        <GreyButtonComponent>Learn in sleep</GreyButtonComponent>
      </div>
    </section>
    <section id="course-actions-not-enrolled" v-else>
      <h2>Ready to start?</h2>
      <p>Enroll now to get access to all course material. Start your learning journey today.</p>
      <BrightGreenButtonComponent id="enroll-button">Enroll in course</BrightGreenButtonComponent>
    </section>
    <div id="course-info">
      <div class="course-info-item">
        <p>Difficulty</p>
        <DifficultyComponent :difficulty="course[0].level"/>
      </div>
      <div class="course-info-item">
        <p>Lessons</p>
        <p>{{course[0].modules.length}}</p>
      </div>
      <div class="course-info-item">
        <p>Students</p>
        <p>{{1025}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#course-actions {
  grid-area: actions;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 0.0625rem solid #DADADA;
}

#course-actions h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.course-info-item p:first-of-type  {
  color: #666666;
}

.course-info-item p {
  font-size: 0.8rem;
}

#course-actions h2 ~ p {
  font-size: 0.75rem;
  line-height: 0.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

#enroll-button {
  font-size: .9rem;
  text-align: center;
  display: block;
  width: 100%;
}

#course-info {
  display: flex;
  flex-direction: column;
  gap: .75rem;

  margin-top: 2rem;
}

.course-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#course-actions-enrolled,
#course-actions-not-enrolled {
  padding-bottom: 1.2rem;
  border-bottom: 0.0625rem solid rgba(77, 77, 77, 0.4);
}
</style>