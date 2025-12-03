<script setup>
  import * as API from "@/assets/js/data-connector/api";
import { useUserDataStore } from "@/data/user-data";
  const user = await API.getUserDetails(useUserDataStore().getUserID());
  const name = user.userName;

  const morningStart = 6;
  const morningEnd = 11;
  const afternoonStart = 12;
  const afternoonEnd = 16;
  const eveningStart = 17;
  const eveningEnd = 23;
  console.log(user);
  function getGreeting(){
    const date = new Date().getHours();

    if (date >= morningStart && date <= morningEnd){
      return "Good morning";
    }

    if (date >= afternoonStart && date <= afternoonEnd){
      return "Good afternoon";
    }

    if (date >= eveningStart && date <= eveningEnd){
      return "Good evening";
    }

    return "Hello";
  }
</script>

<template>
  <h1>{{ getGreeting() }}, <br> {{name}}</h1>
</template>

<style scoped>
  h1 {
    line-height: 2.6rem;
  }
</style>