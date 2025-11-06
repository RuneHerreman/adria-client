<script setup>
import PlayerCardTop3Component from "@/components/leaderboard-components/PlayerCardTop3Component.vue";

defineProps({
    players: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <section id="leaderboard-top-3">
        <PlayerCardTop3Component 
            v-for="(item, index) in players" 
            :key="item.name"
            :player="item"
            :isTopPlayer="index === 1"
        />
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
</style>

