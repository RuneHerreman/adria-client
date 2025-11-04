<script setup lang="ts">
import SubscriptionListComponent from "@/components/subscription-components/SubscriptionListComponent.vue";
</script>

<template>
  <main>
    <h1>Choose your plan</h1>
    <SubscriptionListComponent id="subscriptionList"/>
  </main>

</template>

<style scoped>
#subscriptionList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
</style>