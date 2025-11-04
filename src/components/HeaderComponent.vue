<script setup lang="ts">
  import router from '@/router';
  import NavigationButtonComponent from "@/components/NavigationButtonComponent.vue";
  const links = [
    {name: "Leaderboard", path: "/leaderboard", iconUrl: "/src/assets/icons/leaderboard.svg"},
    {name: "Shop", path: "/shop", iconUrl: "/src/assets/icons/shop.svg"},
    {name: "Settings", path: "/settings", iconUrl: "/src/assets/icons/settings.svg"},
  ]
</script>

<template>
  <header>
    <img src="" alt="genesis-logo">

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
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>