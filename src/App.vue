<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {watchEffect} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
watchEffect(() => {
  document.body.classList.toggle('landing-page-body', route.path === '/')
})

</script>

<template>
    <HeaderComponent/>
    <RouterView />
    <FooterComponent />
</template>

<style scoped>

</style>
