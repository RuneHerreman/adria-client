<script setup>
  import { useRoute } from 'vue-router';
  import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
  const route = useRoute();
  const name = route.query.planName;
  const price = route.query.planPrice;
</script>

<template>
  <main>
    <CheckoutComponent :name="name" :price="price"/>
  </main>
</template>

<style scoped>
main {
  padding-top: 5%;
  height: 70vh;
}
</style>