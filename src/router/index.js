import {createRouter, createWebHistory} from "vue-router";
import LandingPage from "@/pages/no-login/LandingPage.vue";
import CoursePage from "@/pages/CoursePage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import LeaderboardPage from "@/pages/LeaderboardPage.vue";
import LearningCoursePage from "@/pages/LearningCoursePage.vue";
import OnboardingPage from "@/pages/no-login/OnboardingOccupationPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import SubscriptionPage from "@/pages/no-login/SubscriptionPage.vue";
import ContactPage from "@/pages/no-login/ContactPage.vue";
import OnboardingOccupationPage from "@/pages/no-login/OnboardingOccupationPage.vue";

const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/course",
        component: CoursePage
    },
    {
        path: "/dashboard",
        component: DashboardPage
    },
    {
        path: "/leaderboard",
        component: LeaderboardPage
    },
    {
        path: "/learning-course",
        component: LearningCoursePage
    },
    {
        path: "/onboarding/occupation",
        component: OnboardingOccupationPage
    },
    {
        path: "/settings",
        component: SettingsPage
    },
    {
        path: "/shop",
        component: ShopPage
    },
    {
        path: "/subscription",
        component: SubscriptionPage
    },
    {
        path: "/contact",
        component: ContactPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;