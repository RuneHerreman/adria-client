<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
import {getUserStatus} from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";
import router from "@/router/index.js";
import LoadingComponent from "@/components/LoadingComponent.vue";
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
  if (requiresLogin()) {
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
  return ["/", "/subscription", "/onboarding/occupation", "/onboarding/interests", "/subscription/checkout", "/contact"].indexOf(route.path) === -1;
}

</script>

<template>
    <HeaderComponent :key="headerKey"/>
    <suspense>
      <template #default>
        <RouterView @profileUpdated="handleProfileUpdate"/>
      </template>
      <template #fallback>
        <LoadingComponent/>
      </template>
    </suspense>
    <FooterComponent />
</template>

<style scoped>

</style>
