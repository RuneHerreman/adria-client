<script setup>
import {ref, onMounted, computed} from "vue";
import { useUserDataStore } from "@/data/user-data";
import SubscriptionComponent from "@/components/subscription-components/SubscriptionComponent.vue";
import router from "@/router";
import { getAllSubscriptions } from "@/assets/js/data-connector/api.js";

const userDataStore = useUserDataStore();
const subscriptionsFromApi = ref([]);

const perksByPlanName = {
  Basic: ["Access to all courses."],
  Standard: ["Access to all courses.", "Interactive experiences"],
  Premium: ["Access to all courses.", "Interactive experiences", "Access to Genesis Sleep"],
  Ultimate: ["Access to all courses.", "Interactive experiences", "Access to Genesis Sleep", "50% off Insta-Learn"],
};

const subscriptionsSortedByPrice = computed(() => {
  return [...subscriptionsFromApi.value].sort((a, b) => a.price - b.price);
});

onMounted(async () => {
  subscriptionsFromApi.value = await getAllSubscriptions();
});


function handleSubscribe(subscription) {
  userDataStore.setSelectedPlanName(subscription.name);
  userDataStore.setSelectedPlanPrice(subscription.price);
  router.push({
    path: '/subscription/checkout',
  });
}
</script>

<template>
  <section id="subscriptionList">
    <SubscriptionComponent
        v-for="subscription in subscriptionsSortedByPrice"
        :key="subscription.subscriptionId"
        :perks="perksByPlanName[subscription.name]"
        :subscriptionName="subscription.name"
        :subscriptionPrice="subscription.price"
        :most-popular="subscription.isMostPopular"
    @subscribe="handleSubscribe"
    />
  </section>
</template>

<style scoped>
#subscriptionList {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 1.2rem;
}
</style>