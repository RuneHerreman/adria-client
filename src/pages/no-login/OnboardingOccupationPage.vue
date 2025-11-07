<script setup>
import GenesisLogo from "@/assets/media/genesis.png";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserDataStore} from "@/data/user-data.js";
import InputboxComponent from "@/components/InputboxComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";

const router = useRouter();
const userData = useUserDataStore();

const occupation = ref(userData.getOccupation() || "");
function handleUserOccupation() {
  if (occupation.value.trim() === "") {
    alert("Please enter your occupation.");
    return;
  }
  else {
    userData.setOccupation(occupation.value.trim());
    router.push("/onboarding/interests");
    console.log(userData.getOccupation());
  }
}

</script>

<template>
  <main class="onboarding-centered-section">
    <section class="onboardingCard">
      <section class="onboarding-info-block">
        <p>Welcome to</p>
        <img :src="GenesisLogo" alt="Genesis Logo" class="logo" />
        <p>
          Let's personalize your learning experience.<br />
          What's your current occupation?
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
        <BrightGreenButtonComponent class="onboarding-btn" @click="handleUserOccupation">Next step</BrightGreenButtonComponent>
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

p{
  line-height: 1.5rem;
}
</style>