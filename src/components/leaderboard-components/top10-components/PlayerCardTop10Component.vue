<script setup>
defineProps({
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
</script>

<template>
    <div 
        class="leaderboard-row" 
        :class="{ 'current-user': isCurrentUser }"
    >
        <div class="rank-badge">{{ rank }}</div>
        <img :src="player.img" alt="Profile Picture" class="profile-picture profile-picture-small">
        <p class="player-name">{{ player.name }}</p>
        <p class="player-xp">{{ player.pointsBalance }} XP</p>
    </div>
</template>

<style scoped>
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
}

.leaderboard-row:first-of-type{
  border-radius: 1rem 1rem 0 0;
}

.leaderboard-row:last-of-type{
  border-radius: 0 0 1rem 1rem;
  border-bottom: 0.0625rem solid #e6e6e6;
}

.leaderboard-row.current-user {
    background: #eafae1;
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

