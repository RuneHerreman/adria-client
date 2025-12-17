<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {getUserStatus} from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";
import router from "@/router/index.js";
const route = useRoute();
const headerKey = ref(0);
watchEffect(() => {
  document.body.classList.toggle('landing-page-body', route.path === '/');
});

watchEffect(() => {
  document.body.classList.toggle(
      'gradient-background-body',
      route.path === '/subscription/checkout'
      || route.path === '/onboarding/occupation'
      || route.path === '/onboarding/interests');
});

watchEffect(async () => {
  if (requiresLogin) {
    const userStore = useUserDataStore();
    const isActiveUser = await getUserStatus(userStore.getUserID());

    // If subscription is not active, redirect
    if (!isActiveUser) {
      router.push('/404');
    }
  }
});

function handleProfileUpdate() {
  headerKey.value++;
}
function requiresLogin() {
  return ["/", "/subscription", "/onboarding/occupation", "/onboarding/interests", "/subscription/checkout"].indexOf(currentRoute.path) === -1;
}

</script>

<template>
    <HeaderComponent :key="headerKey"/>
    <RouterView @profileUpdated="handleProfileUpdate"/>
    <FooterComponent />
</template>

<style scoped>

</style>
