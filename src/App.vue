<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {ref, watchEffect} from "vue";
import {useRoute} from "vue-router";
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

function handleProfileUpdate() {
  headerKey.value++
}

</script>

<template>
    <HeaderComponent :key="headerKey"/>
    <RouterView @profileUpdated="handleProfileUpdate"/>
    <FooterComponent />
</template>

<style scoped>

</style>
