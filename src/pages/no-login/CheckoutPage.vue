<script setup>
  import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
  import {useUserDataStore} from "@/data/user-data.js";
  import {onMounted, ref} from "vue";
  import router from "@/router/index.js";
  import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";
  import {getSubscription} from "@/assets/js/data-connector/api.js";

  const userData = useUserDataStore();
  const name = userData.getPlanName();
  const price = userData.getPlanPrice();
  const id = userData.getSelectedPlanId();
  const showPopup = ref(false);

  onMounted(()=>{
    if (userData.selectedPlan.price === null ||
        userData.selectedPlan.name === null) {
      router.push("/subscription");
    }
  });

  async function handlePurchase(){
    await getSubscription(useUserDataStore().getUserID(), id)
    router.push("/onboarding/occupation");
  }

  function handlePurchaseClick(updatedPrice){
    userData.setSelectedPlanPrice(updatedPrice);

    showPopup.value = true;
  }
</script>

<template>
  <main>
    <CheckoutComponent
        :name="name"
        :price="price"
        :id="id"
        @purchaseClick="handlePurchaseClick"
    />
    <DefaultPopupComponent
        v-if="showPopup"
        @close="showPopup = false"
        @affirmation="handlePurchase"
    >
      <template #text-content>
        <p>Do you want to pay with your brain chip? <br>({{name}})</p>
      </template>
    </DefaultPopupComponent>
  </main>
</template>

<style scoped>
main {
  padding-top: 5%;
  height: 70vh;
}

p{
  line-height: 1.5rem;
}

</style>