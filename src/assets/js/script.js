import router from "@/router/index.js";

export function handleCourseClick(courseID) {
  router.push(`/course/${courseID}`);
}

export function enroll(courseID) {
  // todo
  return null
}