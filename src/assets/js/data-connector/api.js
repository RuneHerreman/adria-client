import { fetchFromServer } from "./api-communication-abstractor.js";
import * as ErrorHandler from "./error-handler.js";


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

export { getAllSubscriptions, getUserDetails, getUsersInLeaderboard };