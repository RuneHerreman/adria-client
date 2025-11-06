<script setup lang="ts">

import HeaderComponent from "@/components/HeaderComponent.vue";
import GreetingComponent from "@/components/dashboard-components/GreetingComponent.vue";
import AvailableCoursesComponents from "@/components/dashboard-components/AvailableCoursesComponents.vue";
import YourCoursesComponent from "@/components/dashboard-components/YourCoursesComponent.vue";
</script>

<template>
  <main>
    <GreetingComponent/>
    <section id="wrapper">
      <YourCoursesComponent id="your-courses"/>
      <AvailableCoursesComponents id="available-courses"/>
    </section>
  </main>
</template>

<style scoped>
  #wrapper {
    margin: 3.5rem 0 2rem;
    display: grid;
    grid-template-columns: min-content auto;
  }

  #your-courses {
    border-right: #4D4D4D 0.11rem solid;
    padding-right: 1.5rem;
  }

  #available-courses {
    padding-left: 1.5rem;
  }
</style>