import axios from "axios";

// get previous courses selected based on student_id
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
};

// get prerequisite list based on course_id
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
};

//get course_name based on course_id
export async function getCourseName(courseId) {
  const response = await axios.get(`http://localhost:4000/getCourseName?courseId=${courseId}`);
  if(response.data) {
    return response.data.data[0];
  }
  return "";
};

// put course_id & decrease course's leftSeat by 1
export async function putCourses(courseId) {
    const response = await axios.put(`http://localhost:4000/courses`, {
        course_id: courseId
    });

    return response.data;
};

export async function putCurrEnrolled(stuId, currEnrolledCourse) {
    const requestData = { stuId: stuId, currEnrolledCourse: currEnrolledCourse };
  
    try {
      const response = await axios.put(`http://localhost:4000/currEnrolled`, requestData);
      return response.status;
    } catch (error) {
      console.error("Failed to update courses:", error);
      throw error;
    }
};

export async function registerAgain(stuId) {
  const requestData = { stuId: stuId };

  try {
    const response = await axios.put(`http://localhost:4000/leftSeatRestore`, requestData);
    return response.status;
  } catch (error) {
    console.error("Failed to restore registered courses: ", error);
    throw error;
  }
}

export async function getEnrolled(student_id) {
  try {
    const response = await axios.get(`http://localhost:4000/user/${student_id}`);
    return response.data.data.currEnrolledCourse;
  } catch (error) {
    console.error("Failed to get the data from the user. Please try again.", error);
    throw error;
  }
}