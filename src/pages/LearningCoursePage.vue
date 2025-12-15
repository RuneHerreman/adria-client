<script setup>
import LoadingComponent from "@/components/LoadingComponent.vue";
import CourseModuleComponent from "@/components/course-components/CourseModuleComponent.vue";



</script>

<template>
  <Suspense>
    <template #default>
      <CourseModuleComponent/>
    </template>
    <template #fallback>
      <LoadingComponent>
        <template #loading>course materials</template>
      </LoadingComponent>
    </template>
  </Suspense>
</template>

<style scoped>

</style>