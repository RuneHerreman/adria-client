import { fetchFromServer } from "./api-communication-abstractor.js";
import * as ErrorHandler from "./error-handler.js";

function getAllSubscriptions() {
    return fetchFromServer("/api/subscriptions/all-subscriptions")
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

export { getAllSubscriptions };