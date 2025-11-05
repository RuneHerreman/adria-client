<script setup lang="ts">
import GenesisLogo from "@/assets/media/genesis.png";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useUserDataStore} from "@/data/user-data.js";

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
  <section class="onboarding-centered-section">
    <div class="onboarding-info-block">
      <small class="onboarding-small-text">Welcome to</small>
      <img :src="GenesisLogo" alt="Genesis Logo" class="logo" />
      <small class="onboarding-small-text">
        Let’s personalize your learning experience.<br />
        What’s your current occupation?
      </small>
    </div>

    <div class="onboarding-input-block">
      <label for="occupation" class="onboarding-label">Type your occupation:</label>
      <input
          id="occupation"
          type="text"
          placeholder="Type your occupation"
          class="onboarding-input"
          v-model="occupation"
      />
      <button class="onboarding-btn" @click="handleUserOccupation">Continue</button>
    </div>
  </section>
</template>

<style scoped>
.logo {
  width: 8rem;
  margin: 0.3rem 0;
}

.onboarding-input-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
  margin-top: 4rem;
}

.onboarding-label {
  font-size: 0.85rem;
  color: #333;
  margin-bottom: 0.3rem;
  font-weight: bold;
  display: block;
}

.onboarding-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  box-sizing: border-box;
  display: block;
  margin-bottom: 0.3rem;
}
</style>