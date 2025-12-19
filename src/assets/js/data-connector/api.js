import { fetchFromServer } from "./api-communication-abstractor.js";
import * as ErrorHandler from "./error-handler.js";

const LEVEL_LABELS = ["easy", "moderate", "hard", "expert"];
function translateLevel(level) {
    return LEVEL_LABELS[level] ?? "unknown";
}

export function translateCourseLevels(courses) {
    return courses.map(course => ({
        ...course,
        level: translateLevel(course.level)
    }));
}

export function translateCourseLevel(course) {
    course.level = translateLevel(course.level);
    return course;
}

function getAllSubscriptions() {
    return fetchFromServer("/api/subscriptions/all-subscriptions")
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

async function getUserDetails(userId) {
    return await fetchFromServer(`/api/users/${userId}`);
}

function getUsersInLeaderboard() {
    return fetchFromServer("/api/users/leaderboard")
    .then(response => response)
    .catch(ErrorHandler.handleError);
}

async function getCourses(userId) {
    const result = await fetchFromServer(`/api/courses/all/${userId}`);
    return translateCourseLevels(result);
}

async function getCoursesByCategory(category, userId) {
    const result = await fetchFromServer(`/api/courses/all/${userId}?category=${category}`, "GET");
    return translateCourseLevels(result);
}

async function getCourseByID(courseID) {
    const course = await fetchFromServer(`/api/courses/${courseID}`);
    return translateCourseLevel(course);
}

async function getUserCourses(userID){
  try {
    const result = await fetchFromServer(`/api/users/${userID}/courses`);

    return translateCourseLevels(result);
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function enrollUser(courseID, userID) {
  return await fetchFromServer(`/api/users/${userID}/enroll/${courseID}`, `POST`);
}

async function removeUserCoursesFromList(courses, userID) {
  const userCourses = await getUserCourses(userID);
  const doubleCourses = new Set(userCourses.map(course => course.courseId));

  return courses.filter(course => !doubleCourses.has(course.id));
}

async function updateProfilePicture(userID, imageString) {
  await fetchFromServer(`/api/users/${userID}/profilePicture`, "POST", { profilePicture: imageString });
}

async function deleteProfilePicture(userID) {
  await fetchFromServer(`/api/users/${userID}/profilePicture`, "DELETE");
}

async function getNextCourseModule(courseId, userId){

  const res = await fetchFromServer(`/api/courses/${courseId}/modules/${userId}`)

  if (!res.ok) {
    // 500, 404, etc. → throw so caller's try/catch sees it
    const message = `getNextCourseModule failed: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }

  return await res.json();
}

async function checkAnswer(courseId, questionId, answerId, userId) {
  return await fetchFromServer(`/api/courses/${courseId}/question/${questionId}/answer/${answerId}/${userId}`,
    `POST`);
}

async function changeOccupation(userId, occupation){
  await fetchFromServer(`/api/users/${userId}/occupation/${occupation}`, `POST`);
}

async function getAllCosmetics(userId){
  return await fetchFromServer(`/api/cosmetics/all-cosmetics/${userId}`);
}

async function purchaseCosmetic(userId, cosmeticId){
    return await fetchFromServer(`/api/cosmetics/purchase/${cosmeticId}/${userId}`, `POST`);
}

async function getUserCosmetics(userId){
  return await fetchFromServer(`/api/cosmetics/${userId}`);
}

async function cancelSubscription(userId) {
  return await fetchFromServer(`/api/users/${userId}/subscription/cancel`, "POST")
}

async function getSubscribed(userId, subscriptionId, code) {
  if (code.length === 0) {
    return await fetchFromServer(`/api/users/${userId}/subscribe/${subscriptionId}`, "POST");
  }
  return await fetchFromServer(`/api/users/${userId}/subscribe/${subscriptionId}?promoCode=${code}`, "POST");
}

async function getUserStatus(userId){
  return await fetchFromServer(`/api/users/${userId}/active`);
}

async function getPromoCodePercentage(PromoCode) {
  return await fetchFromServer(`/api/subscriptions/${PromoCode}/discount`);
}

async function getInterests(){
  return await fetchFromServer("/api/users/interests");
}

async function setInterests(userId, interests) {
  return await fetchFromServer(`/api/users/${userId}/interests/${interests}`, "POST");
}

async function getUserEnrollmentCount(courseId){
  return await fetchFromServer(`/api/courses/${courseId}/enrollment/count`);
}

async function getLessonCount(courseId) {
  return await fetchFromServer(`/api/courses/${courseId}/lessons/count`);
}

export {
  getAllSubscriptions,
  getUserDetails,
  getUsersInLeaderboard,
  getCourses,
  getCoursesByCategory,
  getCourseByID,
  getUserCourses,
  enrollUser,
  removeUserCoursesFromList,
  updateProfilePicture,
  deleteProfilePicture,
  getNextCourseModule,
  checkAnswer,
  changeOccupation,
  getAllCosmetics,
  purchaseCosmetic,
  getUserCosmetics,
  cancelSubscription,
  getSubscribed,
  getUserStatus,
  getPromoCodePercentage,
  getInterests,
  setInterests,
  getUserEnrollmentCount,
  getLessonCount,
};