<script setup>

import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import { useUserDataStore } from "@/data/user-data";
import {computed, ref} from "vue";
import PromoCodeComponent from "@/components/subscription-components/PromoCodeComponent.vue";
import {getPromoCodePercentage} from "@/assets/js/data-connector/api.js";

const props = defineProps({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  id: {type: String, required: true}
});

const emits = defineEmits(["purchaseClick"]);

const discountUsed = ref(false);
const discountPercentage = ref(0);
const userData = useUserDataStore();
const discountCode = ref("");


const totalPrice = computed(() => {
  return (props.price * (100 - discountPercentage.value) / 100).toFixed(2);
});

const totalDiscount = computed(() => {
  return (props.price * discountPercentage.value / 100).toFixed(2);
});

async function checkDiscount(code){
  if (code && code.length > 0){
    const percentage = await getPromoCodePercentage(code)
    if (percentage > 0){
      discountUsed.value = true;
      discountPercentage.value = percentage;
      discountCode.value = code;
    } else {
      discountUsed.value = false;
      discountPercentage.value = 0;
      discountCode.value = "";
    }
  } else{
    discountUsed.value = false;
    discountPercentage.value = 0;
    discountCode.value = "";
  }
}

function handleSubscriptionPayment(){
  emits("purchaseClick", totalPrice.value, discountCode.value);
}
</script>

<template>
<section id="checkout">
  <h2>Order summary</h2>
  <article id="content">
    <div id="plan">
      <p>Plan</p>
      <p>{{name}}</p>
    </div>

    <div id="subtotal">
      <p>Subtotal</p>
      <p>₳{{price}}</p>
    </div>

    <div v-if="discountUsed" id="discount">
      <p>Discount ({{discountPercentage}}%)</p>
      <p>₳{{totalDiscount}}</p>
    </div>

    <PromoCodeComponent id="code" @apply="checkDiscount"/>

    <div id="total">
      <p>Total</p>
      <p>₳{{totalPrice}}</p>
    </div>
    <p>Per month, billed monthly</p>
  </article>
  <div id="buttons">
    <BrightGreenButtonComponent @click="handleSubscriptionPayment">Continue to payment</BrightGreenButtonComponent>
    <GreyButtonComponent route="/subscription">Change plan</GreyButtonComponent>
  </div>
</section>
</template>

<style scoped>
#checkout {
  padding: 2rem;
  margin: 0 auto;
  width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 1rem;

  background: white;
}

#plan,
#subtotal,
#discount{
  margin-bottom: 0.5rem;
}

#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
}

#content div:has(p) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 1.1rem;
}

p{
  width: fit-content;
}

#total ~ p{
  color: #9f9f9f;
  font-size: 0.7rem;

  margin-bottom: 3rem;
}

#plan p:first-of-type,
#subtotal p:first-of-type {
  color: #4D4D4D;
}

#discount {
  color: var(--bright-green);
}

h2 {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 550;
  margin-bottom: 2.2rem;
}

#code {
  margin-top: 1.5rem;
  border-bottom: rgb(193, 193, 193) 0.0612rem ridge;
  padding-bottom: 0.5rem;
}

#buttons{
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  gap: .5rem;
}

#total{
  margin-top: 1rem;
}
</style>