import { fetchFromServer } from "./api-communication-abstractor.js";
import * as ErrorHandler from "./error-handler.js";

function translateLevel(level) {
    switch(level) {
        case 0: return "easy";
        case 1: return "moderate";
        case 2: return "hard";
        case 3: return "expert";
        default: return "unknown";
    }
}

function translateCourseLevels(courses) {
    return courses.map(course => ({
        ...course,
        level: translateLevel(course.level)
    }));
}

function getAllSubscriptions() {
    return fetchFromServer("/api/subscriptions/all-subscriptions")
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

function getUserDetails(userId) {
    return fetchFromServer(`/api/users/${userId}`)
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

function getUsersInLeaderboard() {
    return fetchFromServer("/api/users/leaderboard")
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

async function getCourses() {
    const result = await fetchFromServer("/api/courses")
    return translateCourseLevels(result)
}

async function getCoursesByCategory(category) {
    const result = await fetchFromServer(`/api/courses?category=${category}`, "GET")
    return translateCourseLevels(result)
}

export {
    getAllSubscriptions,
    getUserDetails,
    getUsersInLeaderboard,
    getCourses,
    getCoursesByCategory
};