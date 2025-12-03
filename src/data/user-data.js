import {defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
    state: () => ({
        name: "TestUser",
        selectedPlan: {
          name: null,
          price: null,
        },
        occupation: "",
        preferences: [],
        selectedCourseID: null,
        userId: "389bc6fb-080e-4450-ac9a-2ff10868b0d6"
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
        setCourseID(courseID) {
          this.selectedCourseID = courseID;
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
        },
        getCourseID() {
          return this.selectedCourseID;
        },
      getUserID(){
          return this.userId;
      }
    },
});