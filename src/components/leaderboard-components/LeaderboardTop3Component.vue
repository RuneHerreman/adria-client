<script setup>
defineProps({
    players: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <section id="leaderboard-top-3">
        <div 
            id="leaderboard-top-3-item" 
            v-for="(item, index) in players" 
            :key="item.name"
            :class="{ 'top-player': index === 1 }"
        >
            <img :src="item.img" alt="Profile Picture" class="profile-picture">
            <div class="profile-info">
                <p class="profile-name">{{ item.name }}</p>
                <p class="profile-xp">{{ item.xp }} XP</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
#leaderboard-top-3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2.5rem;
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
}

#leaderboard-top-3-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.profile-picture {
    width: 8rem;
    height: 8rem;
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

