import {useUserDataStore} from "@/data/user-data.js";
import router from "@/router/index.js";

export function handleCourseClick(courseID) {
  useUserDataStore().setCourseID(courseID);
  router.push("/course");
}