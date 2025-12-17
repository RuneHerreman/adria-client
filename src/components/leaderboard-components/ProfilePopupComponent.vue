<script setup lang="ts">
import BadgesComponent from "@/components/leaderboard-components/BadgesComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

const props = defineProps({
  player: Object
})
</script>

<template>
  <div id="profilePicturePopup">
    <img :src="player.profilePicture ? `data:image/*;base64,${player.profilePicture}` : '/assets/media/profile-picture.png'" alt="">
    <h3>{{ player.name }}</h3>
    <suspense>
      <template #default>
        <BadgesComponent :playerId="player.userId"/>
      </template>
      <template #fallback>
        <LoadingComponent>
        </LoadingComponent>
      </template>
    </suspense>
  </div>
</template>

<style scoped>
  #profilePicturePopup {
    display: grid;
    grid-template-columns: 3.5rem auto;

    width: 20rem;
    background: white;
    border: 0.1rem solid var(--grey-background);
    box-shadow: 0 0 .1rem var(--grey-background);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  #profilePicturePopup h3 {
    padding-top: 0.1rem;
    font-size: 1.1rem;
  }

  #profilePicturePopup img {
    grid-row: 1 / span 2;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }

  #profilePicturePopup:deep(.fallback){
    margin: 1rem auto;
  }

  #profilePicturePopup:deep(.loading-animation){
    width: 2rem;
    height: 2rem;
  }
</style>