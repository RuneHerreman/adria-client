<script setup lang="ts">

import Top3Component from "@/components/leaderboard-components/top3-components/Top3Component.vue";
import Top10Component from "@/components/leaderboard-components/top10-components/Top10Component.vue";
import { ref, computed, onMounted } from "vue";
import profilePicture from "@/assets/media/profile-picture.jpg";
import { useUserDataStore } from "@/data/user-data.js";
import { getUsersInLeaderboard } from "@/assets/js/data-connector/api.js";

const userData = useUserDataStore();

const leaderboardTop10 = ref([
    {name: "Adrian", pointsBalance: 9999, img: profilePicture},
    {name: "Ronaldo", pointsBalance: 8888, img: profilePicture},
    {name: "Third", pointsBalance: 7777, img: profilePicture},
    {name: "Fourth", pointsBalance: 6666, img: profilePicture},
    {name: "Fifth", pointsBalance: 5555, img: profilePicture},
    {name: "Sixth", pointsBalance: 4444, img: profilePicture},
    {name: "Seventh", pointsBalance: 3333, img: profilePicture},
    {name: "Test User", pointsBalance: 2222, img: profilePicture},
    {name: "Ninth", pointsBalance: 1111, img: profilePicture},
    {name: "Tenth", pointsBalance: 0, img: profilePicture},

]);

onMounted(async () => {
  leaderboardTop10.value = await getUsersInLeaderboard();
});

const leaderboardTop3 = computed(() => leaderboardTop10.value.slice(0, 3));
const currentUserName = computed(() => userData.getName());

</script>

<template>
    <main>
    <h1>Leaderboard</h1>
    <div id="leaderboard-container">
        <Top3Component :players="leaderboardTop3" :currentUserName="currentUserName" />
        <Top10Component :players="leaderboardTop10" :currentUserName="currentUserName" />
    </div>
    </main>
</template>

<style scoped>
#leaderboard-container {
    width: 42rem;
    margin: 0 auto;
    margin-bottom: 6rem;
}
</style>