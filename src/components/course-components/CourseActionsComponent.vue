<script setup lang="ts">
import {ref} from "vue";
import {Course} from "@/assets/js/Course";
import ProgressComponent from "@/components/dashboard-components/ProgressComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import DifficultyComponent from "@/components/dashboard-components/DifficultyComponent.vue";
import * as API from "@/assets/js/data-connector/api";
import {useRoute, useRouter} from "vue-router";
import {useUserDataStore} from "@/data/user-data.js";

const userCourses = ref<Array<any>>([]);
const enrolled = ref(false);
const enrolledCourse = ref<any | undefined>(undefined);

const route = useRoute();
const router = useRouter();
const props = defineProps<{
  course: Course
}>();


const notCompleted = ref();

function handleEnrolment(){
  const userId = useUserDataStore().getUserID();
  API.enrollUser(route.params.id, userId)
      .then(() => loadUserCourses());
}

function handleLearn() {
  router.push(`/learn/${route.params.id}`);
}

function handleSleepLearn() {
  console.log("sleep learn")
}

async function loadUserCourses() {
  userCourses.value = await API.getUserCourses(useUserDataStore().getUserID());
  const courseID = String(route.params.id);
  enrolled.value = userCourses.value.some((c) => c.courseId == courseID);
  if (enrolled.value) {
    enrolledCourse.value = userCourses.value.find((c) => c.courseId == courseID);
    notCompleted.value = enrolledCourse.value.progressPercentage < 100;
  } else {
    enrolledCourse.value = undefined;
  }
}

loadUserCourses();

</script>

<template>
  <section id="course-actions">
    <section v-if="enrolled" id="course-actions-enrolled">
      <h2>Continue learning</h2>
      <div>
        <p id="progress-title">Your progress</p>
        <div class="progress-container">
          <ProgressComponent :progress="enrolledCourse.progressPercentage"></ProgressComponent>
          <p class="progress-percentage">{{enrolledCourse.progressPercentage}}%</p>
        </div>
      </div>

      <div v-if="notCompleted" id="course-buttons">
        <BrightGreenButtonComponent @click="handleLearn" class="course-button">Learn</BrightGreenButtonComponent>
        <GreyButtonComponent @click="handleSleepLearn" class="course-button">Learn in sleep</GreyButtonComponent>
      </div>
      <p v-else id="completed-message">
        You have completed this course
      </p>
    </section>

    <section v-else id="course-actions-not-enrolled">
      <h2>Ready to start?</h2>
      <p>Enroll now to get access to all course material. Start your learning journey today.</p>
      <BrightGreenButtonComponent @click="handleEnrolment" id="enroll-button" class="course-button">Enroll in course</BrightGreenButtonComponent>
    </section>

    <div id="course-info">
      <div class="course-info-item">
        <p>Difficulty</p>
        <DifficultyComponent :difficulty="course.level"/>
      </div>
      <div class="course-info-item">
        <p>Lessons</p>
        <p>{{ "Not Implemented Yet" }}</p>
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
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.course-info-item p {
  font-size: 0.8rem;
}

.course-info-item p:first-of-type  {
  color: #666666;
}

#course-actions h2 ~ p {
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.course-button {
  position: relative;
  z-index: 1;
  overflow: hidden;
  font-size: .9rem;
  text-align: center;
  padding: 0.8rem 0;
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

#course-buttons{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.progress-container{
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.progress-percentage {
  font-size: 0.9rem;
}

p#progress-title {
  font-size: 0.9rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

#course-actions #course-actions-enrolled #completed-message{
  font-size: 0.85rem;
  text-align: center;
  padding-top: 1rem;
  margin-bottom: 0;
  font-weight: 500;
}
</style>