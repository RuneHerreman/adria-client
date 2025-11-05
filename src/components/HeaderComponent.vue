<script setup lang="ts">
  import router from '@/router';
  import NavigationButtonComponent from "@/components/NavigationButtonComponent.vue";
  import {useRoute} from "vue-router";
  const links = [
    {name: "Leaderboard", path: "/leaderboard", iconUrl: "/src/assets/icons/leaderboard.svg"},
    {name: "Shop", path: "/shop", iconUrl: "/src/assets/icons/shop.svg"},
    {name: "Settings", path: "/settings", iconUrl: "/src/assets/icons/settings.svg"},
  ];


  const currentRoute = useRoute();

  function logoWithWiteText() {
    return currentRoute.path === "/";
  }

  function notLoggedIn() {
    return ["/subscription", "/subscription/checkout", "/onboarding/occupation", "/onboarding/interests"].indexOf(currentRoute.path) !== -1;
  }

  function showNavigation(){
    return ["/", "/subscription", "/onboarding/occupation", "/onboarding/interests", "/subscription/checkout"].indexOf(currentRoute.path) === -1;
  }
</script>

<template>
  <header>
    <img v-if="logoWithWiteText()" @click="() => {router.push('/')}" src="../assets/media/genesis-white.png" alt="genesis-white-logo">
    <img v-else-if="notLoggedIn()" @click="() => {router.push('/')}" src="../assets/media/genesis.png" alt="genesis-logo">
    <img v-else @click="() => {router.push('/dashboard')}" src="../assets/media/genesis.png" alt="genesis-logo">

    <nav v-if="showNavigation()">
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