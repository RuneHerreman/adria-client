<script setup lang="ts">

import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import RedButtonComponent from "@/components/buttons/RedButtonComponent.vue";

const props = defineProps({
  user: {type: Object, required: true}
})

</script>

<template>
<section>
  <h3>Profile picture</h3>
  <div id="profile-picture-wrapper">
    <img
        :src="`data:image/jpeg;base64,${user.profilePicture}`"
        alt="profile-picture">
    <section id="profile-picture-actions">
      <GreyButtonComponent>Add Frame</GreyButtonComponent>
      <BrightGreenButtonComponent>Change profile picture</BrightGreenButtonComponent>
      <RedButtonComponent>Remove profile picture from site</RedButtonComponent>
    </section>
  </div>

</section>
</template>

<style scoped>
img{
  aspect-ratio: 1/1;
  width: 7.5rem;
  border-radius: 50%;
}

.grey-button {
  grid-column: 1 / span 2;
}

#profile-picture-wrapper{
  margin-top: 1rem;

  display: flex;
  align-items: flex-end;
  gap: 1rem;
}

#profile-picture-actions {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.25rem;
}
</style>