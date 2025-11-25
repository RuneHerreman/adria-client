<script setup>

import * as API from "@/assets/js/data-connector/api.js"
import PersonalInfoComponent from "@/components/settings-component/PersonalInfoComponent.vue";
const userDetails = await API.getUserDetails("389bc6fb-080e-4450-ac9a-2ff10868b0d6");
console.log(userDetails);
</script>

<template>
  <PersonalInfoComponent
      id="settings-personalInfo"
      :user="userDetails"
  />
</template>

<style scoped>

</style>