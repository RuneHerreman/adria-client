import {createRouter, createWebHistory} from "vue-router";
import LandingPage from "@/pages/LandingPage.vue";
import CoursePage from "@/pages/CoursePage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import LeaderboardPage from "@/pages/LeaderboardPage.vue";
import LearningCoursePage from "@/pages/LearningCoursePage.vue";
import OnboardingPage from "@/pages/OnboardingPage.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import SubscriptionPage from "@/pages/SubscriptionPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

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
        path: "/onboarding",
        component: OnboardingPage
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