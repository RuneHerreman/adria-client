<script setup lang="ts">

import HeaderComponent from "@/components/HeaderComponent.vue";
import LeaderboardTop3Component from "@/components/leaderboard-components/LeaderboardTop3Component.vue";
import { ref, computed } from "vue";
import profilePicture from "@/assets/media/profile-picture.jpg";
import { useUserDataStore } from "@/data/user-data.js";

const userData = useUserDataStore();

const leaderboardTop10 = ref([
    {name: "Adrian", xp: 0, img: profilePicture},
    {name: "Ronaldo", xp: 10, img: profilePicture},
    {name: "Third", xp: 100, img: profilePicture},
    {name: "Fourth", xp: 1000, img: profilePicture},
    {name: "Fifth", xp: 1011, img: profilePicture},
    {name: "Sixth", xp: 1111, img: profilePicture},
    {name: "Seventh", xp: 1112, img: profilePicture},
    {name: "Test User", xp: 7777, img: profilePicture},
    {name: "Ninth", xp: 8888, img: profilePicture},
    {name: "Tenth", xp: 9999, img: profilePicture},

]);

const leaderboardTop3 = computed(() => leaderboardTop10.value.slice(0, 3));
const currentUserName = computed(() => userData.getName());

function isCurrentUser(name: string): boolean {
    return name === currentUserName.value;
}

</script>

<template>
    <main>
    <h1>Leaderboard</h1>
    <div id="leaderboard-container">
        <LeaderboardTop3Component :players="leaderboardTop3" />
        
        <div id="leaderboard-top-10">
            <div 
                class="leaderboard-row" 
                v-for="(item, index) in leaderboardTop10" 
                :key="item.name"
                :class="{ 'current-user': isCurrentUser(item.name) }"
            >
                <div class="rank-badge">{{ index + 1 }}</div>
                <img :src="item.img" alt="Profile Picture" class="profile-picture profile-picture-small">
                <p class="player-name">{{ item.name }}</p>
                <p class="player-xp">{{ item.xp }} XP</p>
            </div>
        </div>
    </div>
    </main>
</template>

<style scoped>
#leaderboard-container {
    width: 42rem;
    margin: 0 auto;
    margin-bottom: 6rem;
}

#leaderboard-top-10 {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 1.5rem;
    width: 100%;
}

.leaderboard-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background: white;
    border: 0.0625rem solid #e6e6e6;
    box-sizing: border-box;
    width: 100%;
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