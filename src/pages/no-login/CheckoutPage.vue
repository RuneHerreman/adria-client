<script setup>
  import CheckoutComponent from "@/components/subscription-components/CheckoutComponent.vue";
  import {useUserDataStore} from "@/data/user-data.js";
  import {onMounted} from "vue";
  import router from "@/router/index.js";
  import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";

  const userData = useUserDataStore();
  const name = userData.selectedPlan?.name;
  const price = userData.selectedPlan?.price;

  onMounted(()=>{
    if (!userData.selectedPlan) {
      router.push("/subscription");
    }
  })
</script>

<template>
  <main>
    <CheckoutComponent :name="name" :price="price"/>
    <DefaultPopupComponent>
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
</style>