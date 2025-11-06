<script setup>
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";

const props = defineProps({
  subscriptionName: {type: String, required: true},
  subscriptionPrice: {type: Number, required: true},
  perks: {type: Array, required: true},
  mostPopular: {type: Boolean, required: false},
});

const emit = defineEmits(['subscribe']);
function clicked() {
  emit('subscribe', {
    name: props.subscriptionName,
    price: props.subscriptionPrice,
    perks: props.perks,
  });
}
</script>

<template>
  <article class="subscriptionTier" :class="{'most-popular': mostPopular}">
    <p v-if="mostPopular" class="most-popular-ribbon">Most popular</p>
    <div>
      <p class="subscriptionName">{{subscriptionName}}</p>
      <p class="subscriptionPrice">₳{{subscriptionPrice}}<span> / mo</span></p>
      <ul class="perks">
        <li v-for="perk in perks" :key="perk">{{perk}}</li>
      </ul>
    </div>
    <BrightGreenButtonComponent @click="clicked" class="btnSubscribe">Choose {{subscriptionName}}</BrightGreenButtonComponent>
  </article>
</template>

<style scoped>
.subscriptionTier {
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  width: 14rem;
  height: 25rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.3rem rgba(214, 214, 214, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
}


.subscriptionName {
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.subscriptionPrice {
  text-align: center;
  color: var(--bright-green);
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.subscriptionPrice span {
  color: black;
  font-size: 1rem;
}

.perks{
  font-size: 1rem;
  list-style-image: url("../../assets/icons/checkmark.svg");
  line-height: 2rem;
}

.btnSubscribe {
  display: block;
  text-align: center;
  width: 90%;
}

.most-popular {
  border: 0.1rem var(--bright-green) solid;
}

.most-popular-ribbon {
  position: absolute;
  top: -1.2rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bright-green);
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  width: max-content;
}
</style>