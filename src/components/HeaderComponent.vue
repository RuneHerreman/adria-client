<script setup lang="ts">
  import router from '@/router';
  import NavigationButtonComponent from "@/components/NavigationButtonComponent.vue";
  import {useRoute} from "vue-router";
  const links = [
    {name: "Leaderboard", path: "/leaderboard", iconUrl: "/src/assets/icons/leaderboard.svg"},
    {name: "Shop", path: "/shop", iconUrl: "/src/assets/icons/shop.svg"},
    {name: "Settings", path: "/settings", iconUrl: "/src/assets/icons/settings.svg"},
  ];
  function goHome() {

  }
</script>
<template>
  <header>
    <img @click="() => {router.push('/dashboard')}" src="../assets/media/Genesis.png" alt="genesis-logo">

    <nav>
      <NavigationButtonComponent
          v-for="link in links"
          :key="link.name"
          :name="link.name"
          :path="link.path"
          :iconUrl="link.iconUrl"/>
    </nav>
  </header>
</template>

<style scoped>
  header {
    margin-top: 1rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  img{
    max-width: 100%;
    height: 3rem;
  }

  img:hover {
    cursor: pointer;
  }
</style>