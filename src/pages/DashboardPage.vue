<script setup>
import GreetingComponent from "@/components/dashboard-components/GreetingComponent.vue";
import AvailableCoursesComponents from "@/components/dashboard-components/AvailableCoursesComponents.vue";
import YourCoursesComponent from "@/components/dashboard-components/YourCoursesComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import CallToActionComponent from "@/components/dashboard-components/CallToActionComponent.vue";
</script>

<template>
  <main>
    <suspense>
      <template #default>
        <div id="top-compartment">
          <GreetingComponent/>
          <CallToActionComponent/>
        </div>
      </template>
      <template #fallback>
        <LoadingComponent>
          <template #loading>
            user data
          </template>
        </LoadingComponent>
      </template>
    </suspense>

      <suspense>
        <template #default>
          <section id="wrapper">
            <YourCoursesComponent id="your-courses"/>
            <AvailableCoursesComponents id="available-courses"/>
          </section>
        </template>
        <template #fallback>
          <LoadingComponent>
            <template #loading>
              courses
            </template>
          </LoadingComponent>
        </template>
      </suspense>
  </main>
</template>


<style scoped>
  #top-compartment{
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

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

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>