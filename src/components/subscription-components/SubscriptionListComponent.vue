<script setup lang="ts">
import {computed, ref} from "vue";
import { useUserDataStore } from "@/data/user-data";
import SubscriptionComponent from "@/components/subscription-components/SubscriptionComponent.vue";
import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
import router from "@/router";

const userDataStore = useUserDataStore();

const subscriptions = ref([
  {subscriptionName: "Basic", subscriptionPrice: 15.99, perks: [
      " Access to all courses."
    ], mostPopular: false},
  {subscriptionName: "Standard", subscriptionPrice: 22.99, perks: [
        "Access to all courses.",
        "Interactive experiences"
    ], mostPopular: true},
  {subscriptionName: "Premium", subscriptionPrice: 28.99, perks: [
        "Access to all courses.",
        "Interactive experiences",
        "Access to Genesis Sleep"
    ], mostPopular: false},
  {subscriptionName: "Ultra", subscriptionPrice: 35.99, perks: [
        "Access to all courses.",
        "Interactive experiences",
        "Access to Genesis Sleep",
        "50% off Insta-Learn"
    ], mostPopular: false},
])


function handleSubscribe(subscription) {
  userDataStore.setSelectedPlan({
    name: subscription.name,
    price: subscription.price,
  });
  router.push({
    path: '/subscription/checkout',
  });
}
</script>

<template>
  <section id="subscriptionList">
    <SubscriptionComponent
        v-for="subscription in subscriptions"
        :perks="subscription.perks"
        :subscriptionName="subscription.subscriptionName"
        :subscriptionPrice="subscription.subscriptionPrice"
        :most-popular="subscription.mostPopular"
    @subscribe="handleSubscribe"
    @click="handleSubscribe"/>
  </section>
</template>

<style scoped>
#subscriptionList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  gap: 1rem;
}
</style>