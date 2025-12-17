<script setup>
import ProfilePopupComponent from "@/components/leaderboard-components/ProfilePopupComponent.vue";
import {ref} from "vue";

const props = defineProps({
    player: {
        type: Object,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    isCurrentUser: {
        type: Boolean,
        default: false
    }
});

const showPopUp = ref(false);

function showProfilePopup() {
  showPopUp.value = true;
}

function hideProfilePopup() {
  showPopUp.value = false;
}
</script>

<template>
  <div
      class="leaderboard-row"
      :class="{ 'current-user': isCurrentUser }"
  >
    <div class="rank-badge">{{ rank }}</div>
    <div class="profile-picture-container">
      <img
          :src="player.profilePicture ? `data:image/*;base64,${player.profilePicture}` : '/assets/media/profile-picture.png'"
          alt="Profile Picture"
          class="profile-picture profile-picture-small"
          @mouseenter="showProfilePopup"
          @mouseleave="hideProfilePopup"
      >
      <ProfilePopupComponent
          v-if="showPopUp"
          :player="player"
          @mouseenter="showProfilePopup"
          @mouseleave="hideProfilePopup"
      />
    </div>
    <p class="player-name">{{ player.name }}</p>
    <p class="player-xp">{{ player.pointsBalance }} XP</p>
  </div>
</template>

<style scoped>
.profile-picture-container {
  position: relative;
}

.profile-picture-container :deep(#profilePicturePopup) {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
  z-index: 1000;
}

.leaderboard-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    background: white;
    border: 0.0625rem solid #e6e6e6;
    border-bottom: none;
    width: 100%;

    position: relative;
}

.leaderboard-row:first-of-type{
  border-radius: 1rem 1rem 0 0;
}

.leaderboard-row:last-of-type{
  border-radius: 0 0 1rem 1rem;
  border-bottom: 0.0625rem solid #e6e6e6;
}

.leaderboard-row:only-child{
  border-radius: 1rem;
  border-bottom: 0.0625rem solid #e6e6e6;
}

.leaderboard-row.current-user {
    background: var(--off-white);
  border-left: 0.25rem solid var(--bright-green);
}

.rank-badge {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--grey-background);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    color: var(--grey-text);
    flex-shrink: 0;
}

.profile-picture-small {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border: 0.0625rem solid #ccc;
    border-radius: 50%;
    object-fit: cover;

    cursor: pointer;
}

.player-name {
    flex: 1;
    margin: 0;
    font-size: 1rem;
    color: var(--grey-text);
}

.player-xp {
    margin: 0;
    font-size: 0.95rem;
    color: var(--bright-green);
    font-weight: 500;
    flex-shrink: 0;
}
</style>

