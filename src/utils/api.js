import axios from "axios";

export async function getPrevCourses(stuId) {
  try {
    const response = await axios.get(`http://localhost:4000/user/${stuId}`);
    if (response.data && response.data.data) {
      return response.data.data.courses;
    }
  } catch (error) {
    console.log(error);
    throw new Error("There was an error fetching the prerequisites for a course. Please try again.");
  }
  return [];
}

export async function getPrerequisites(courseId) {
  try {
    const response = await axios.get(`http://localhost:4000/prerequisite?courseId=${courseId}`);
    if (response.data && response.data.data) {
      return response.data.data.prerequisite;
    }
  } catch (error) {
    console.log(error);
    throw new Error("There was an error fetching the courses for the user. Please try again.");
  }
  return [];
}
