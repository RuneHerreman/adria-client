<script setup lang="ts">
import {computed, ref} from "vue";
import SubscriptionComponent from "@/components/subscription-components/SubscriptionComponent.vue";

const subscriptions = ref([
  {subscriptionName: "Basic", subscriptionPrice: 22.5, perks: [
      " Access to all courses."
    ]},
  {subscriptionName: "Standard", subscriptionPrice: 22.5, perks: [
        "Access to all courses.",
        "Interactive experiences"
    ]},
  {subscriptionName: "Premium", subscriptionPrice: 22.5, perks: [
        "Access to all courses.",
        "Interactive experiences",
        "Access to Genesis Sleep"
    ]},
  {subscriptionName: "Premium", subscriptionPrice: 22.5, perks: [
        "Access to all courses.",
        "Interactive experiences",
        "Access to Genesis Sleep",
        "50% off Insta-Learn"
    ]},
])
</script>

<template>
  <SubscriptionComponent
      v-for="subscription in subscriptions"
      :perks="subscription.perks"
      :subscriptionName="subscription.subscriptionName"
      :subscriptionPrice="subscription.subscriptionPrice"/>
</template>

<style scoped>

</style>