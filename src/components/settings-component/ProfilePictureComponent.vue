<script setup lang="ts">

import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import RedButtonComponent from "@/components/buttons/RedButtonComponent.vue";
import {ref} from "vue";
import * as API from "@/assets/js/data-connector/api"
import { useUserDataStore } from "@/data/user-data";

const props = defineProps({
  user: {type: Object, required: true}
})

const fileInput = ref<HTMLInputElement | null>(null);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const result = e.target?.result as string;
    // Remove the data URI prefix to get just the base64 string
    const base64String = result.split(',')[1];

    // Emit event to parent component with the base64 string
    API.updateProfilePicture(useUserDataStore().getUserID(), base64String);
  };

  reader.readAsDataURL(file);

  // Reset input so same file can be selected again
  target.value = '';
};

const triggerFileUpload = () => {
  fileInput.value?.click();
};

</script>

<template>
<section>
  <h3>Profile picture</h3>
  <div id="profile-picture-wrapper">
    <img
        :src="`data:image/*;base64,${user.profilePicture}`"
        alt="profile-picture">
    <section id="profile-picture-actions">
      <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFileUpload"
          style="display: none"
      />
      <GreyButtonComponent>Add Frame</GreyButtonComponent>
      <BrightGreenButtonComponent @click="triggerFileUpload">Change profile picture</BrightGreenButtonComponent>
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