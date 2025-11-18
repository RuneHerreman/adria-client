<script setup>
  import router from '@/router';
  import NavigationButtonComponent from "@/components/NavigationButtonComponent.vue";
  import XPComponent from "@/components/XPComponent.vue";
  import {useRoute} from "vue-router";
  import { useUserDataStore } from '@/data/user-data';
  const links = [
    {name: "Leaderboard", path: "/leaderboard", iconUrl: "/src/assets/icons/leaderboard.svg"},
    {name: "Shop", path: "/shop", iconUrl: "/src/assets/icons/shop.svg"},
    {name: "Settings", path: "/settings", iconUrl: "/src/assets/icons/settings.svg"},
  ];

  const userData = useUserDataStore();
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

  function goToSettings(){
    router.push("/settings");
  }
</script>

<template>
  <header>
    <img v-if="logoWithWiteText()" @click="() => {router.push('/')}" src="../assets/media/genesis-white.png" alt="genesis-white-logo" title="Home">
    <img v-else-if="notLoggedIn()" @click="() => {router.push('/')}" src="../assets/media/genesis.png" alt="genesis-logo" title="Home">
    <img v-else @click="() => {
      router.push('/dashboard');
      userData.setCourseID(null)
    }" src="../assets/media/genesis.png" alt="genesis-logo" title="Home">

    <nav v-if="showNavigation()">
      <NavigationButtonComponent
          v-for="link in links"
          :key="link.name"
          :name="link.name"
          :path="link.path"
          :iconUrl="link.iconUrl"
          :title="link.name"
      />
      <XPComponent :xp="1025"/>
      <img @click="goToSettings" id="profile-picture" class="profile-picture" src="../assets/media/profile-picture.jpg" alt="Settings" title="Settings">
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

  #profile-picture {
    width: 2rem;
    height: 2rem;
  }

</style>