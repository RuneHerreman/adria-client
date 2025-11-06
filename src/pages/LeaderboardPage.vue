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
        <div id="leaderboard-top-3-item" v-for="item in leaderboardTop3" :key="item.name">
            <img :src="item.img" alt="Profile Picture">
            <p>{{ item.name }}</p>
            <p>{{ item.xp }} XP</p>
        </div>
    </div>
    </main>
</template>

<style scoped>

</style>