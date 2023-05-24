export default function useSearch(
  isLoggedIn,
  searchString,
  setFilteredCourses,
  courseList,
  setShowCourses,
  showCourses,
  setName,
  preName
) {
  const handleSearch = () => {
    //check if the user's logged in first
    if (!isLoggedIn) {
      alert("Please Login first...");
      return;
    }

    //set filtered courses & show courses (true) & setName (pass it to Search)
    const filteredCourses = courseList.filter((course) =>
      course.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredCourses(filteredCourses);
    setShowCourses(!showCourses);
    setName(preName);
  };

  return handleSearch;
}
