<script setup>
  import LoadingComponent from "@/components/LoadingComponent.vue";
  import CoursePageComponent from "@/components/course-components/CoursePageComponent.vue";
</script>

<template>
  <Suspense>
    <template #default>
        <CoursePageComponent/>
    </template>
    <template #fallback>
      <LoadingComponent>
        <template #loading>course</template>
      </LoadingComponent>
    </template>
  </Suspense>
</template>


<style scoped>

</style>