<script setup lang="ts">
import GenesisLogo from "@/assets/media/genesis.png";
</script>

<template>
  <div class="onboarding-container">
    <div class="onboarding-card">
      <img :src="GenesisLogo" alt="Genesis logo" class="logo" />
      <p class="welcome-text">Welcome to</p>

      <p class="subtitle">
        Let’s personalize your learning experience.<br />
        What’s your current occupation?
      </p>

      <label for="occupation" class="label">Your occupation</label>
      <input id="occupation" type="text" placeholder="Type your occupation" class="input"/>

      <button class="btn">Continue</button>
    </div>
  </div>
</template>

<style scoped>

</style>