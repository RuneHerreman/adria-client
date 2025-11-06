<script setup>
import PlayerCardTop10Component from "@/components/leaderboard-components/PlayerCardTop10Component.vue";

const props = defineProps({
    players: {
        type: Array,
        required: true
    },
    currentUserName: {
        type: String,
        required: true
    }
});

function isCurrentUser(name) {
    return name === props.currentUserName;
}
</script>

<template>
    <section id="leaderboard-top-10">
        <PlayerCardTop10Component 
            v-for="(item, index) in players" 
            :key="item.name"
            :player="item"
            :rank="index + 1"
            :isCurrentUser="isCurrentUser(item.name)"
        />
    </section>
</template>

<style scoped>
#leaderboard-top-10 {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 1.5rem;
    width: 100%;
}
</style>
