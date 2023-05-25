import { useCallback } from "react";
import axios from "axios";
import { getEnrolled } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function useUpdateCourses(
  stuId,
  prevCourses,
  setPrevCourses,
  isLoggedIn
) {

  const navigate = useNavigate();
  // make previous Courses array based on checked items
  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        //if it's checked then, put it
        setPrevCourses((prev) => [...prev, item]);
      } else if (!checked) {
        setPrevCourses(prevCourses.filter((el) => el !== item));
      }
    },
    [prevCourses, setPrevCourses]
  );

  const updateCourses = async () => {
    if (!isLoggedIn) {
      //check if the user's logged in
      alert("Please Login first...");
      return;
    }
    //if logged in...
    // the user has student_id / prevCourses -> Not, send an err message
    if (
      stuId === undefined ||
      prevCourses === undefined ||
      prevCourses.length === 0
    ) {
      console.error("Failed to update courses: stuId or prevCourses is undefined");
      return;
    }
    const requestData = { courses: prevCourses };

    //update new Courses to verified users
    try {
      // Update new courses to verified users
      await axios.put(`http://localhost:4000/user/${stuId}`, requestData);
  
      // Increment leftSeat for each course
      await axios.put("http://localhost:4000/courseRestore", {
        course_ids: await getEnrolled(stuId),
        student_id: stuId,
      });
      navigate('/');
      alert("Courses Updated! Please go to SelectCourses and register courses again.");
    } catch (error) {
      console.error("Failed to update courses:", error);
      alert("An error occurred while updating courses. Please try again.");
    }
};

  return { onCheckedItem, updateCourses };
}
