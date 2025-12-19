<script setup>
  import router from '@/router';
  import NavigationButtonComponent from "@/components/NavigationButtonComponent.vue";
  import XPComponent from "@/components/XPComponent.vue";
  import {useRoute} from "vue-router";
  import { useUserDataStore } from '@/data/user-data';
  import {onMounted, ref} from "vue";
  import * as API from "@/assets/js/data-connector/api.js";
  import ProfilePopupComponent from "@/components/leaderboard-components/ProfilePopupComponent.vue";
  const links = [
    {name: "Leaderboard", path: "/leaderboard", iconUrl: "/assets/icons/leaderboard.svg"},
    {name: "Shop", path: "/shop", iconUrl: "/assets/icons/shop.svg"},
    {name: "Settings", path: "/settings", iconUrl: "/assets/icons/settings.svg"},
  ];
  const user = ref();
  onMounted(async () => {
    try {
      user.value = await API.getUserDetails(useUserDataStore().getUserID());
      console.log(user.value);
    } catch (error) {
      console.error(error);
    }
  });

  const showPopUp = ref(false);
  const userData = useUserDataStore();
  const currentRoute = useRoute();

  function logoWithWiteText() {
    return currentRoute.path === "/";
  }

  function notLoggedIn() {
    return ["/subscription", "/subscription/checkout", "/onboarding/occupation", "/onboarding/interests", "/404", "/contact"].indexOf(currentRoute.path) !== -1;
  }

  function showNavigation(){
    return ["/", "/subscription", "/onboarding/occupation", "/onboarding/interests", "/subscription/checkout", "/404", "/contact"].indexOf(currentRoute.path) === -1;
  }

  function goToSettings(){
    router.push("/settings");
  }

  function showProfilePopup() {
    showPopUp.value = true;
  }

  function hideProfilePopup() {
    showPopUp.value = false;
  }
</script>

<template>
  <header>
    <img v-if="logoWithWiteText()" @click="() => {router.push('/')}" src="/assets/media/genesis-white.png" alt="genesis-white-logo" title="Home">
    <img v-else-if="notLoggedIn()" @click="() => {router.push('/')}" src="/assets/media/genesis.png" alt="genesis-logo" title="Home">
    <img v-else @click="() => {
      router.push('/dashboard');
    }" src="/assets/media/genesis.png" alt="genesis-logo" title="Home">

    <nav v-if="showNavigation()">
      <NavigationButtonComponent
          v-for="link in links"
          :key="link.name"
          :name="link.name"
          :path="link.path"
          :iconUrl="link.iconUrl"
          :title="link.name"
      />
      <XPComponent v-if="user" :xp="user.pointsBalance"/>
      <div id="profile-picture-container"
           @mouseenter="showProfilePopup"
           @mouseleave="hideProfilePopup">
        <img
            v-if="user"
            id="profile-picture"
            class="profile-picture"
            :src="user.profilePicture ? `data:image/*;base64,${user.profilePicture}` : '/assets/media/profile-picture.png'"
            alt="profile details"
            title="profile details"

        >
        <ProfilePopupComponent
            v-if="showPopUp"
            :player="user"
            @mouseenter="showProfilePopup"
            @mouseleave="hideProfilePopup"
        />
      </div>


    </nav>
  </header>
</template>

<style scoped>

#profile-picture-container {
  position: relative;
}

#profile-picture-container :deep(#profilePicturePopup) {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  z-index: 1000;
}

  header {
    margin-top: 1rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: var(--header-height);
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