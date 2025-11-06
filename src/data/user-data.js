import {defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
    state: () => ({
        selectedPlan: {
          name: null,
          price: 0,
        },
        occupation: "",
        preferences: []
    }),
    actions: {
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