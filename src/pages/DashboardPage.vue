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
      <suspense fallback="loading">
        <AvailableCoursesComponents id="available-courses"/>
        <template #fallback>
          <div>Loading courses...</div>
        </template>
      </suspense>
    </section>
  </main>
</template>

<style scoped>
  #wrapper {
    margin: 3.5rem 0 2rem;
    display: grid;
    grid-template-columns: min-content auto;
    width: 100%;
  }

  #your-courses {
    border-right: #d9d9d9 0.11rem solid;
    padding-right: 1.5rem;
  }

  #available-courses {
    margin-left: 1.5rem;
    max-width: 100%;
    overflow: hidden;
  }

</style>