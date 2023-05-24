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
          throw new Error("Login failed");
        }
      } catch (error) {
        console.log(error);
        return false; // not a right name
      }
  };

  return handleSearch;
}
