import {defineStore } from 'pinia';

export const useUserDataStore = defineStore('userData', {
    state: () => ({
        name: "TestUser",
        selectedPlan: {
            id: null,
          name: null,
          price: null,
        },
        occupation: "",
        preferences: [],
        selectedCourseID: null,
        userId: "91171dab-1bc7-4af8-9bfa-620847e9e9f3", // CHANGE THIS TO THE ID OF THE USER YOU WANT TO SHOW
        isChangingSubscription: false
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
        setChangePlan(boolean){
            this.isChangingSubscription = boolean;
        },
        setSelectedPlanId(planId) {
            this.selectedPlan.id = planId;
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
        getSelectedPlanId(){
            return this.selectedPlan.id
        },
      getUserID(){
          return this.userId;
      },
        getChangePlan(){
            return this.isChangingSubscription;
        }
    },
});