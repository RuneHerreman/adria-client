<script setup>
const props = defineProps({
    player: {
        type: Object,
        required: true
    },
    isTopPlayer: {
        type: Boolean,
        default: false
    },
    isCurrentUser: {
        type: Boolean,
        default: false
    }
});
console.log(props.player)
</script>

<template>
    <div 
        id="leaderboard-top-3-item" 
        :class="{ 'top-player': isTopPlayer, 'current-user': isCurrentUser }"
    >
        <img
            :src="player.profilePicture ? `data:image/*;base64,${player.profilePicture}` : '/assets/media/profile-picture.png'"
            alt="Profile Picture"
            class="profile-picture">
        <div class="profile-info">
            <p class="profile-name">{{ player.name }}</p>
            <p class="profile-xp">{{ player.pointsBalance }} XP</p>
        </div>
    </div>
</template>

<style scoped>
#leaderboard-top-3-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.profile-picture {
    width: 4.5rem;
    height: 4.5rem;
    border: 0.0625rem solid #ccc;
    border-radius: 50%;
    object-fit: cover;
}

.profile-info {
    background: white;
    border-radius: 0.5rem;
    padding: 1.25rem 1.5rem;
    text-align: center;
    width: 12rem;
    box-sizing: border-box;
    border: 0.0625rem solid #e6e6e6;
}

#leaderboard-top-3-item.top-player .profile-info {
    border: 0.1rem solid gold;
}

#leaderboard-top-3-item.current-user .profile-info {
  background: var(--off-white);
  border: 0.1rem solid var(--bright-green);
}

.profile-name {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--grey-text);
    margin: 0 0 0.5rem 0;
}

.profile-xp {
    font-size: 1rem;
    color: var(--bright-green);
    margin: 0;
    font-weight: 500;
}
</style>

