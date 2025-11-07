<script setup lang="ts">
import {Course} from "@/assets/js/Course";

const props = defineProps<{
  course: Course[]
}>();

console.log(props.course[0]);
</script>

<template>
  <section id="course-description">
    <article>
      <h2>About this course</h2>
      <p>{{course[0].description}}</p>
      <h3>What you'll learn</h3>
      <ul>
        <li v-for="item in course[0].learnList">{{item}}</li>
        <li>Example</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
#course-description {
  grid-area: description;
  padding: 1.5em;

  border-radius: 1rem;
  border: 0.0625rem solid #DADADA;
}

#course-description h2 {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

#course-description p {
  font-size: 1rem;
  line-height: 1.2rem;
}

#course-description h3{
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

#course-description ul {
  font-size: 1.1rem;
  line-height: 2.5rem;
  list-style: url("@/assets/icons/checkmark-green.svg");
  padding-left: 2rem;
}

#course-description ul li {
  padding-left: 0.5rem;
}
</style>