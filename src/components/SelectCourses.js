import "../App.css";
import React, { useState } from "react";
import Search from "./Search";
import Navbar from "./Navbar";
//hooks
import useFetchCourses from "../hooks/useFetchCourses";
import useSearch from "../hooks/useSearch";
//utils
import cookieUtil from "../hooks/useCookieUtil";

function SelectCourses() {
  //cookieUtil
  const { isLoggedIn, stuId } = cookieUtil();

  // get all courseList from uesFetchCourses
  const courseList = useFetchCourses();

  //useState for filteredCourses (pass it to Search)
  const [filteredCourses, setFilteredCourses] = useState([]);

  /**      searchString, name (input) //          **/
  const [searchString, setSearchString] = useState("");
  const [name, setName] = useState("Tony");
  const [preName, setPreName] = useState("");

  //Show Courses || Hide Courses
  const [showCourses, setShowCourses] = useState(false);

  /**        onChange function for searchString & preName           **/
  const changeSearchString = (e) => {
    setSearchString(e.target.value);
  };
  const changeNameString = (e) => {
    setPreName(e.target.value);
  };

  /**        Show Courses Button           **/

  const handleSearch = useSearch(
    isLoggedIn,
    searchString,
    setFilteredCourses,
    courseList,
    setShowCourses,
    showCourses,
    setName,
    preName,
    stuId
  );

  return (
    <div>
      <Navbar
        header={"Course Man => Search/Register"}
        navColor={
          "linear-gradient(to left, rgba(128,128,128, 0.6) 0%, rgba(128,128,128, 1) 49%, rgba(128,128,128, 0.1) 100%)"
        }
        textColor={"black"}
      />
      <div
        className="selectCoursePage d-flex flex-column align-items-center"
        style={{ marginTop: 0 }}
      >
        <div className="form-container d-flex flex-column">
          {/*   SearchForm   */}
          <div className="searchForm">
            <div className="formTitle">Search Form</div>
            <div className="d-flex justify-content-between searchRow">
              {/*   Name    */}
              <label id="Name" htmlFor="" className="userName">
                Name:
              </label>
              <input
                className="searchInput"
                type="text"
                name="user"
                id=""
                placeholder="Name here..."
                onChange={changeNameString}
              ></input>
            </div>
            <div className="d-flex justify-content-between searchRow">
              {/*   searchFor    */}
              <label id="SearchFor" htmlFor="" className="searchBox">
                Search for:
              </label>
              <input
                className="searchInput"
                type="text"
                name="searchString"
                id=""
                placeholder="Name here..."
                onChange={changeSearchString}
              ></input>
            </div>
            <div>
              {/*   Show Courses button    */}
              <button
                className="showCoursebtn"
                onClick={() => handleSearch("search string")}
              >
                {!showCourses ? "Show Courses" : "Hide Courses"}
              </button>
            </div>
          </div>

          {/*   Show Search page when press show courses button    */}
          {showCourses && (
            <Search filteredCourses={filteredCourses} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectCourses;
