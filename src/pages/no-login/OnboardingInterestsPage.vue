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
  <main class="onboarding-centered-section">
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
        <GreyButtonComponent route="/onboarding/occupation" class="onboarding-btn-secondary">Go Back</GreyButtonComponent>
        <BrightGreenButtonComponent class="onboarding-btn" @click="handleUserPreferences">Continue</BrightGreenButtonComponent>
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

.onboarding-selected-count {
  color: var(--bright-green);
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.onboarding-interests-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .7rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 30rem;
}

.interest-btn {
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-weight: 450;
  font-size: .9rem;

  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  width: 7rem;
}

.interest-btn:hover {
  border-color: var(--primary-green);
  background-color: #eafae1;
}

.interest-btn.active {
  border-color: var(--primary-green);
  background-color: #d4e6cf;
}

.onboarding-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
}
</style>
