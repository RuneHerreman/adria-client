import {defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
    state: () => ({
        name: "Test User",
        selectedPlan: {
          name: null,
          price: 0,
        },
        occupation: "",
        preferences: []
    }),
    actions: {
        setName(name) {
            this.name = name;
        },
        setSelectedPlanName(name) {
            this.selectedPlan.name = name;
        },
        setSelectedPlanPrice(price) {
            this.selectedPlan.price = price;
        },
        setOccupation(occupation) {
            this.occupation = occupation;
        },
        setPreferences(preferences) {
            this.preferences = preferences;
        },
        getName() {
            return this.name;
        },
        getPlanName() {
            return this.selectedPlan.name;
        },
        getPlanPrice() {
            return this.selectedPlan.price;
        },
        getOccupation() {
            return this.occupation;
        }
    }
});