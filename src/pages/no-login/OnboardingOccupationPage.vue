<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserDataStore} from "@/data/user-data.js";
import InputboxComponent from "@/components/InputboxComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
import DefaultPopupComponent from "@/components/popup-components/DefaultPopupComponent.vue";
import {changeOccupation} from "@/assets/js/data-connector/api.js";

const router = useRouter();
const userData = useUserDataStore();

const occupation = ref("");
const showErrorPopup = ref(false);

async function handleUserOccupation() {
  if (occupation.value.trim() === "") {
    showErrorPopup.value = true;
  }
  else {
    await changeOccupation(userData.getUserID(), occupation.value);
    router.push("/onboarding/interests");
  }
}

function closeErrorPopup() {
  showErrorPopup.value = false;
}

</script>

<template>
  <main class="onboarding-centered-section">
    <section class="onboardingCard" v-if="!showErrorPopup">
      <section class="onboarding-info-block">
        <p>Welcome to</p>
        <img src="/assets/media/genesis.png" alt="Genesis Logo" class="logo" />
        <p>
          Let's personalize your learning experience.<br/>
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
    <DefaultPopupComponent
        v-if="showErrorPopup"
        :single-button="true"
        button-text="Okay"
        @close="closeErrorPopup"
    >
      <template #text-content>
        <p>Please enter your occupation.</p>
      </template>
    </DefaultPopupComponent>
  </main>
</template>

<style scoped>
.logo {
  width: 10rem;
  margin: 0.3rem auto 1rem;
}

main{
  padding: 5rem 0;
  position: relative;
}

p{
  line-height: 1.5rem;
}
</style>