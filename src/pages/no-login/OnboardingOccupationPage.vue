<script setup lang="ts">
import GenesisLogo from "@/assets/media/genesis.png";
</script>

<template>
  <main>
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
        <label for="occupation" class="onboarding-label">Your occupation</label>
        <input
            id="occupation"
            type="text"
            placeholder="Type your occupation"
            class="onboarding-input"
        />
        <button class="onboarding-btn">Continue</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.logo {
  width: 12rem;
  margin: 0.5rem 0;
}


</style>