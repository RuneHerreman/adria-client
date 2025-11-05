import {defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
    state: () => ({
        selectedPlan: null,
        occupation: null,
        preferences: []
    }),
    actions: {
        setSelectedPlan(plan) {
            this.selectedPlan = plan;
        },
        setOccupation(occupation) {
            this.occupation = occupation;
        },
        setPreferences(preferences) {
            this.preferences = preferences;
        }
    }
});