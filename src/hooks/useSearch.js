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
  const checkLoginStatus = async () => {
    if (!isLoggedIn) {
      alert("Please Login first...");
      return false;
    };
    
    try {
      const response = await axios.post("http://localhost:4000/userCheck", {
        stuId: stuId,
        name: preName,
      });
      const data = response.data;

      if (data.status === "Success") {
        return true;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const performSearch = () => {
    const filteredCourses = courseList.filter((course) =>
      course.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
  };

  const updateUI = () => {
    setShowCourses(!showCourses);
    setName(preName);
  };

  const handleSearch = async () => {
    if (await checkLoginStatus()) {
      performSearch();
      updateUI();
    }
  };

  return handleSearch;
}