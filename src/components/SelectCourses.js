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
  const { isLoggedIn } = cookieUtil();

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

  //여기서 Student_id 이름 확인하고 confirm 해주기!!!!!!!!
  /*******************************************/
  const handleSearch = useSearch(
    isLoggedIn,
    searchString,
    setFilteredCourses,
    courseList,
    setShowCourses,
    showCourses,
    setName,
    preName
  );

  return (
    <div>
      <Navbar />
      <div className="selectCoursePage d-flex flex-column align-items-center">
        <div className="form-container d-flex flex-column">
          <div className="searchForm">
            <div className="formTitle">Search Form</div>
            <div className="d-flex justify-content-between searchRow">
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
              <button
                className="showCoursebtn"
                onClick={() => handleSearch("search string")}
              >
                {!showCourses ? "Show Courses" : "Hide Courses"}
              </button>
            </div>
          </div>
          {showCourses && (
            <Search filteredCourses={filteredCourses} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SelectCourses;
