<script setup>
import InputboxComponent from "@/components/InputboxComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import {ref} from "vue";
import * as API from "@/assets/js/data-connector/api"

const occupation = ref("");

const props = defineProps({
  user: {type: Object, required: true}
})

async function handleChangeOccupation() {
  await API.changeOccupation(props.user.adriaId, occupation.value)
  props.user.occupation = occupation.value;
  occupation.value = "";
}
</script>

<template>
  <h3>User info</h3>
  <section id="userInfo">
    <p>Adria ID</p>
    <p>{{user.adriaId}}</p>

    <p>Name</p>
    <p>{{user.userName}}</p>

    <p>Points</p>
    <p>{{user.pointsBalance}}</p>

    <p>Wallet</p>
    <p>{{user.wallet}}</p>

    <div id="occupation-container">
      <p>Occupation</p>
      <div id="occupation-input-container">
        <InputboxComponent v-model="occupation" id="occupation" type="text" :placeholder="user.occupation"></InputboxComponent>
        <BrightGreenButtonComponent @click="handleChangeOccupation">Update occupation</BrightGreenButtonComponent>
      </div>
    </div>

  </section>
</template>

<style scoped>
h3 {
  margin-top: 2rem;
}

#occupation {
  min-width: 20rem;
  margin-bottom: 0;
}

#occupation-container{
  grid-column: 1 / span 2;
  margin-top: 1rem;
}

#occupation-input-container{
  width: fit-content;
  padding-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
}

#userInfo {
  padding-top: 1rem;

  display: grid;
  grid-template-columns: 7rem auto;
  row-gap: 0.5rem;
}

#userInfo p {
  color: var(--grey-text);

}

#userInfo p:nth-of-type(odd) {
  font-weight: 600;
}
</style>