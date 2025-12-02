<script setup lang="ts">

import ProfilePictureComponent from "@/components/settings-component/ProfilePictureComponent.vue";
import UserDetailsComponent from "@/components/settings-component/UserDetailsComponent.vue";

const props = defineProps({
  user: {type: Object, required: true}
})
</script>

<template>
  <section>
    <h2>Profile</h2>
    <ProfilePictureComponent :user="user" />
    <UserDetailsComponent :user="user"/>
  </section>
</template>

<style scoped>
section {
  margin-top: 1rem;
}

</style>