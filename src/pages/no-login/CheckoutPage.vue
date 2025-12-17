<script setup>
  import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
  import {useUserDataStore} from "@/data/user-data.js";
  import {onMounted, ref} from "vue";
  import router from "@/router/index.js";
  import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";

  const userData = useUserDataStore();
  const name = userData.getPlanName();
  const price = userData.getPlanPrice();
  const showPopup = ref(false);

  onMounted(()=>{
    if (userData.selectedPlan.price === null ||
        userData.selectedPlan.name === null) {
      router.push("/subscription");
    }
  });

  function handlePurchase(){
    alert(`Purchased plan: ${name} for ₳${userData.getPlanPrice()}`);
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