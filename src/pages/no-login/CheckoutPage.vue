<script setup>
  import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
  import {useUserDataStore} from "@/data/user-data.js";
  import {onMounted, ref} from "vue";
  import router from "@/router/index.js";
  import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";
  import {getSubscribed} from "@/assets/js/data-connector/api.js";

  const userData = useUserDataStore();
  const name = userData.getPlanName();
  const price = userData.getPlanPrice();
  const id = userData.getSelectedPlanId();
  const showPopup = ref(false);
  const discountCode = ref("");

  onMounted(()=>{
    if (userData.selectedPlan.price === null ||
        userData.selectedPlan.name === null) {
      router.push("/subscription");
    }
  });

  async function handlePurchase(){
    console.log(discountCode.value)
    await getSubscribed(useUserDataStore().getUserID(), id, discountCode.value);

    if (!useUserDataStore().getChangePlan()) {
      router.push("/onboarding/occupation");
    } else {
      router.push("/dashboard");
    }

    useUserDataStore().setChangePlan(false);
  }

  function handlePurchaseClick(updatedPrice, promocode){
    userData.setSelectedPlanPrice(updatedPrice);
    discountCode.value = promocode;
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