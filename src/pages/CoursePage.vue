<script setup>
  import {onMounted} from "vue";
  import {useUserDataStore} from "@/data/user-data.js";
  import router from "@/router/index.js";
  import * as API from "@/assets/js/data-connector/api.js"
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