<script setup>
import {reactive, computed} from "vue";
import {useUserDataStore} from "@/data/user-data.js";
import {useRouter} from "vue-router";
import GreyButtonComponent from "@/components/buttons/GreyButtonComponent.vue";
import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";

const interests = [
  "Hunting",
  "History",
  "Gaming",
  "Fitness",
  "Mining",
  "Art",
  "Fishing",
  "Nature",
  "Music",
  "Photography",
  "Medicine",
  "Survival",
];

const userData = useUserDataStore();
const router = useRouter();
const interestSelected = reactive([]);
const selectedInterestCount = computed(() => interestSelected.length);

const handleClickInterest = ($event, interest) => {
  const isSelected = interestSelected.includes(interest);

  if(isSelected) {
    interestSelected.splice(interestSelected.indexOf(interest), 1);
    console.log(interestSelected);
  } else if (interestSelected.length < 3) {
    interestSelected.push(interest);
    console.log(interestSelected);
  } else {
    return;
  }

  $event.currentTarget.classList.toggle("active", !isSelected);
};

function handleUserPreferences() {
  if (interestSelected.length !== 3) {
    alert("Please select exactly 3 interests to continue.");
  } else {
    userData.setPreferences(interestSelected);
    router.push("/dashboard");
  }
}
</script>
<template>
  <section class="onboarding-centered-section">
    <section class="onboardingCard">
      <section class="onboarding-info-block">
        <p class="onboarding-small-text">Welcome to</p>
        <img src="@/assets/media/genesis.png" alt="Genesis Logo" class="logo" />
        <p class="onboarding-description">
          Select <strong>3 topics</strong> you're passionate about<br />
          to personalize your course recommendations.
        </p>
        <p class="onboarding-selected-count">{{selectedInterestCount}}/3 selected</p>
      </section>



      <section class="onboarding-interests-grid">
        <button
          v-for="interest in interests"
          :key="interest"
          class="interest-btn"
          @click="handleClickInterest($event, interest)">
          {{ interest }}
        </button>
      </section>


      <section class="onboarding-actions">
        <GreyButtonComponent class="onboarding-btn-secondary">Go Back</GreyButtonComponent>
        <BrightGreenButtonComponent class="onboarding-btn" @click="handleUserPreferences">Continue</BrightGreenButtonComponent>
      </section>
    </section>
  </section>
</template>

<style scoped>
.logo {
  width: 6rem;
  margin: 0.5rem 0 0.8rem 0;
}

.onboarding-description {
  font-size: 0.9rem;
  color: var(--grey-text);
  line-height: 1.4;
  text-align: center;
  margin: 0.5rem 0 0.8rem 0;
}

.onboarding-selected-count {
  color: var(--bright-green);
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.onboarding-interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 30rem;
}

.interest-btn {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  width: 100%;
}

.interest-btn:hover {
  border-color: var(--primary-green);
  background-color: #f9fff5;
}

.interest-btn.active {
  background-color: var(--primary-green);
  color: white;
  border-color: var(--primary-green);
}

.onboarding-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 20rem;
  margin-top: 2.5rem;
}
</style>
