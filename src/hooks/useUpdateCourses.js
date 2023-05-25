import { useCallback } from "react";
import axios from "axios";
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
      console.error(
        "Failed to update courses: stuId or prevCourses is undefined"
      );
      return;
    }
    const requestData = { courses: prevCourses };
    const defaultData = { stuId: stuId, currEnrolledCourse: []}

    //update new Courses to verified users

    try {
      // Update new courses to verified users
      await axios.put(`http://localhost:4000/user/${stuId}`, requestData);
      //update currEnrolled of User table based on student_id
      await axios.put(`http://localhost:4000/currEnrolled`, defaultData);
      //update the leftSeat values in the Courses table
      await axios.get("http://localhost:4000/updateLeftSeat");
      alert("Courses Updated! Please go to SelectCourses and register courses again.");
      navigate('/'); //go back to Home

    } catch (error) {
      //error handling
      console.error("Failed to update courses:", error);
      alert("An error occurred while updating courses. Please try again.");
    }
  };

  return { onCheckedItem, updateCourses };
}
