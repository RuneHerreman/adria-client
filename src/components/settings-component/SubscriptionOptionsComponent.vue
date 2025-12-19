<script setup>
import RedButtonComponent from "@/components/buttons/RedButtonComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import * as API from "@/assets/js/data-connector/api.js";
import {useUserDataStore} from "@/data/user-data.js";
import router from "@/router/index.js";
const props = defineProps({
  user: {
    type: Object
  }
});

const subscription = props.user.subscription;

async function cancelSubscription() {
  await API.cancelSubscription(useUserDataStore().getUserID());
  await router.push("/");
}

function changePlan(){
  useUserDataStore().setChangePlan(true);
  router.push("/subscription");
}
</script>

<template>
  <section id="subscription-settings">
    <h2>Subscription</h2>
    <p id="plan">Current plan: {{subscription.name}} <br> Monthly payment: {{subscription.price}}</p>
    <div>
      <RedButtonComponent @click="cancelSubscription">Cancel subscription</RedButtonComponent>
      <BrightGreenButtonComponent @click="changePlan">Change plan</BrightGreenButtonComponent>
    </div>
  </section>
</template>

<style scoped>
  #subscription-settings {
    padding-top: 2rem;
  }

  #subscription-settings div {
    padding: 1rem 0;
    display: flex;
    gap: .5rem;
  }

  #subscription-settings div * {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  #plan {
    padding-top: 0.5rem;
    color: #989898;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 130%;
  }

</style>