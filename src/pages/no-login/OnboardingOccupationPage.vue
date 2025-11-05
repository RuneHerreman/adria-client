<script setup lang="ts">
import GenesisLogo from "@/assets/media/genesis.png";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserDataStore} from "@/data/user-data.js";
import InputboxComponent from "@/components/InputboxComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";

const router = useRouter();
const userData = useUserDataStore();

const occupation = ref("");
function handleUserOccupation() {
  if (occupation.value.trim() === "") {
    alert("Please enter your occupation.");
    return;
  }
  else {
    userData.setOccupation(occupation.value.trim());
    router.push("/onboarding/interests");
  }
}

</script>

<template>
  <main class="onboarding-centered-section">
    <section id="onboardingCard">
      <section class="onboarding-info-block">
        <p>Welcome to</p>
        <img :src="GenesisLogo" alt="Genesis Logo" class="logo" />
        <p>
          Let’s personalize your learning experience.<br />
          What’s your current occupation?
        </p>
      </section>

      <section class="onboarding-input-block">
        <label for="occupation" class="onboarding-label">Your occupation:</label>
        <InputboxComponent
            type="text"
            placeholder="Enter your occupation"
            id="occupation"
            class="onboarding-label-input"
            v-model="occupation"
        />
        <BrightGreenButtonComponent class="onboarding-btn" @click="handleUserOccupation">Continue</BrightGreenButtonComponent>
      </section>
    </section>
  </main>
</template>

<style scoped>
.logo {
  width: 10rem;
  margin: 0.3rem auto 1rem;
}

main{
  height: 70vh;
  padding-top: 5%;
}

#onboardingCard{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
  background: white;
  margin: 0 auto;
  padding: 4rem 6rem;

  border: #e6e6e6 solid 0.0612rem;
  box-shadow: 0 0 0.25rem rgba(217, 217, 217, 0.25);
  border-radius: 1rem;
}

.onboarding-input-block {
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

}

.onboarding-info-block{
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  color: #4D4D4D;
}

.onboarding-label {
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
  font-weight: bold;
  color: #333;
}

#occupation{
  width: 20rem;
  margin-bottom: 0.5rem;
}

.onboarding-btn{
  align-self: flex-end;
}

</style>