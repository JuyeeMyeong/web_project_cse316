import axios from 'axios';

export default function useSearch(
  isLoggedIn,
  searchString,
  setFilteredCourses,
  courseList,
  setShowCourses,
  showCourses,
  setName,
  preName,
  stuId
) {
  const handleSearch = async () => {
    //check if the user's logged in first
    if (!isLoggedIn) {
      alert("Please Login first...");
      return;
    };

    try {
        const response = await axios.post("http://localhost:4000/userCheck", {
          stuId: stuId,
          name: preName,
        });
  
        const data = response.data;
  
        if (data.status === "Success") {
            //set filtered courses & show courses (true) & setName (pass it to Search)
            const filteredCourses = courseList.filter((course) =>
            course.toLowerCase().includes(searchString.toLowerCase())
            );
            setFilteredCourses(filteredCourses);
            setShowCourses(!showCourses);
            setName(preName);
            return true; // user Check!
        } else {
          // The server responded, but the login check failed.
          alert("Login check failed. Please enter correct name and ID.");
          return false;
        }
      } catch (error) {
        // An error occurred during execution of the `try`.
        if (error.response) {
            // The server responded with a status code that falls out of the range of 2xx
            alert("Login check failed. Please enter correct name and ID.");
          } else {
            // Something happened in setting up the request that triggered an Error
            alert("A network error occurred. Please try again later.");
          }
        return false; 
      }
  };

  return handleSearch;
}
