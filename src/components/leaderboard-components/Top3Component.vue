<script setup>
import PlayerCardTop3Component from "@/components/leaderboard-components/PlayerCardTop3Component.vue";
import { computed } from "vue";

const props = defineProps({
    players: {
        type: Array,
        required: true
    }
});

const orderedPlayers = computed(() => {
    if (props.players.length < 3) return props.players;
    return [props.players[1], props.players[0], props.players[2]];
});
</script>

<template>
    <section id="leaderboard-top-3">
        <PlayerCardTop3Component 
            v-for="(item, index) in orderedPlayers" 
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

