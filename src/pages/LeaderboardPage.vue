<script setup>

import Top3Component from "@/components/leaderboard-components/top3-components/Top3Component.vue";
import Top10Component from "@/components/leaderboard-components/top10-components/Top10Component.vue";
import { ref, computed, onMounted } from "vue";
import profilePicture from "@/assets/media/profile-picture.jpg";
import { useUserDataStore } from "@/data/user-data.js";
import { getUsersInLeaderboard } from "@/assets/js/data-connector/api.js";

const userData = useUserDataStore();

const leaderboardTop10 = ref([]);

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