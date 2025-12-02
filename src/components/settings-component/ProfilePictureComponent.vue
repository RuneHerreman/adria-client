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

  const maxSizeInBytes = 2 * 1024 * 1024; // 5MB
  if (file.size > maxSizeInBytes) {
    alert('File is too large. Maximum size is 2MB.');
    target.value = '';
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    const result = e.target?.result as string;
    const base64String = result.split(',')[1];

    await API.updateProfilePicture(useUserDataStore().getUserID(), base64String);
  };

  reader.readAsDataURL(file);
  target.value = '';
};

const triggerFileUpload = () => {
  fileInput.value?.click();
};

function handleProfilePictureRemoval() {
  await API.deleteProfilePicture(useUserDataStore().getUserID());
}

</script>

<template>
<section>
  <h3>Profile picture</h3>
  <div id="profile-picture-wrapper">
    <img
        :src="user.profilePicture ? `data:image/*;base64,${user.profilePicture}` : '/assets/media/profile-picture.png'"
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
      <RedButtonComponent @click="handleProfilePictureRemoval">Remove profile picture from site</RedButtonComponent>
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

.grey-button { /*DO NOT TOUCH THIS CSS, IT NEEDS TO BE HERE*/
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