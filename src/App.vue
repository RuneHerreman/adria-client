<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {watchEffect} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
watchEffect(() => {
  document.body.classList.toggle('landing-page-body', route.path === '/')
})

watchEffect(() => {
  document.body.classList.toggle(
      'gradient-background-body',
      route.path === '/subscription/checkout'
      || route.path === '/onboarding/occupation'
      || route.path === '/onboarding/interests');
})

</script>

<template>
    <HeaderComponent/>
    <RouterView />
    <FooterComponent />
</template>

<style scoped>

</style>
