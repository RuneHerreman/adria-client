<script setup>

import * as API from "@/assets/js/data-connector/api.js";
import PersonalInfoComponent from "@/components/settings-component/PersonalInfoComponent.vue";
import {useUserDataStore} from "@/data/user-data.js";
import {ref} from "vue";

const userDetails = ref(await API.getUserDetails(useUserDataStore().getUserID()));

const emit = defineEmits(['profileUpdated']);
async function reloadUserData() {
  userDetails.value = await API.getUserDetails(useUserDataStore().getUserID());
  emit('profileUpdated');
}

</script>

<template>
  <PersonalInfoComponent
      id="settings-personalInfo"
      :user="userDetails"
      @reloadUserData="reloadUserData"
  />
</template>
