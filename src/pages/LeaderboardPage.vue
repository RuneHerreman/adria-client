<script setup lang="ts">

import Top3Component from "@/components/leaderboard-components/Top3Component.vue";
import Top10Component from "@/components/leaderboard-components/Top10Component.vue";
import { ref, computed, onMounted } from "vue";
import profilePicture from "@/assets/media/profile-picture.jpg";
import { useUserDataStore } from "@/data/user-data.js";
import { getUsersInLeaderboard } from "@/assets/js/data-connector/api.js";

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
        <Top3Component :players="leaderboardTop3" />
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