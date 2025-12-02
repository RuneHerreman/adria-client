<script setup>

import * as API from "@/assets/js/data-connector/api.js"
import PersonalInfoComponent from "@/components/settings-component/PersonalInfoComponent.vue";
import {useUserDataStore} from "@/data/user-data.js";
const userDetails = await API.getUserDetails(useUserDataStore().getUserID());
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