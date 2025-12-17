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

async function getCourses() {
    const result = await fetchFromServer("/api/courses");
    return translateCourseLevels(result);
}

async function getCoursesByCategory(category) {
    const result = await fetchFromServer(`/api/courses?category=${category}`, "GET");
    return translateCourseLevels(result);
}

async function getCourseByID(courseID) {
    const course = await fetchFromServer(`/api/courses/${courseID}`);
    return translateCourseLevel(course);
}

async function getUserCourses(userID){
  try {
    const result = await fetchFromServer(`/api/users/${userID}/courses`);

    return translateCourseLevels(result).filter(c => c.progressPercentage < 100);
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
  return await fetchFromServer(`/api/courses/${courseId}/modules/${userId}`);
}

async function checkAnswer(courseId, questionId, answerId, userId) {
  return await fetchFromServer(`/api/courses/${courseId}/question/${questionId}/answer/${answerId}/${userId}`,
    `POST`);
}

async function changeOccupation(userId, occupation){
  await fetchFromServer(`/api/users/${userId}/occupation/${occupation}`, `POST`);
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
};