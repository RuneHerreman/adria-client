<script setup lang="ts">

import HeaderComponent from "@/components/HeaderComponent.vue";
import { ref, computed } from "vue";
import profilePicture from "@/assets/media/profile-picture.jpg";

const leaderboardTop10 = ref([
    {name: "Adrian", xp: 0, img: profilePicture},
    {name: "Ronaldo", xp: 10, img: profilePicture},
    {name: "Cristiano", xp: 100, img: profilePicture},
    {name: "Jill Doe", xp: 1000, img: profilePicture},
    {name: "Jack Doe", xp: 1011, img: profilePicture},
    {name: "Jill Doe", xp: 1111, img: profilePicture},
    {name: "Jill Doe", xp: 9999, img: profilePicture},
]);

const leaderboardTop3 = computed(() => leaderboardTop10.value.slice(0, 3));

</script>

<template>
    <main>
    <h1>Leaderboard</h1>
    <div id="leaderboard-top-3">
        <div 
            id="leaderboard-top-3-item" 
            v-for="(item, index) in leaderboardTop3" 
            :key="item.name"
            :class="{ 'top-player': index === 1 }"
        >
            <img :src="item.img" alt="Profile Picture" class="profile-picture">
            <div class="profile-info">
                <p class="profile-name">{{ item.name }}</p>
                <p class="profile-xp">{{ item.xp }} XP</p>
            </div>
        </div>
    </div>
    </main>
</template>

<style scoped>
#leaderboard-top-3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 3rem;
}

#leaderboard-top-3-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.profile-picture {
    width: 8rem;
    height: 8rem;
}

.profile-info {
    background: white;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    text-align: center;
    min-width: 10rem;
}

#leaderboard-top-3-item.top-player .profile-info {
    border: 0.1rem solid gold;
}

.profile-name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--grey-text);
    margin: 0 0 0.5rem 0;
}

.profile-xp {
    font-size: 0.9rem;
    color: var(--bright-green);
    margin: 0;
    font-weight: 500;
}
</style>