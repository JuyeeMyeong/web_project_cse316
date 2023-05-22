import '../App.css';
import React, { useState, useEffect }  from 'react';
import Search from './Search';
import Navbar from './Navbar';

function SelectCourses() {
    const [searchString, setSearchString] = useState("");
    const [name, setName] = useState('Tony');
    const [preName, setPreName] = useState('');

    const changeSearchString = (e) => {
        setSearchString(e.target.value);
    };

    const changeNameString = (e) => {
        setPreName(e.target.value);
    };

    const[prevCourses, setPrevCourses] = useState([
        { name: 'CSE101' },
        { name: 'CSE114' },
        { name: 'CSE214' },
        { name: 'CSE215' },
        { name: 'CSE216' },
        { name: 'CSE220' },
        { name: 'CSE300' },
        { name: 'CSE303' },
        { name: 'CSE304' },
        { name: 'CSE305' },
        { name: 'CSE306' },
        { name: 'CSE310' },
        { name: 'CSE316' },
        { name: 'CSE320' },
        { name: 'CSE331' },
        { name: 'CSE416' },
    ]);

    const [showCourses, setShowCourses] = useState(false);

    const handleSearch = (searchString) => {
        const filteredCourses = prevCourses.filter((course) =>
          course.name.toLowerCase().includes(searchString.toLowerCase())
        );
    
        setPrevCourses(filteredCourses);
        setShowCourses(!showCourses);
        setName(preName);
    };

    const handleRegistration = (selectedCourses) => {
        console.log('Registered courses:', selectedCourses);
    };
    

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
                    onClick={() => handleSearch('search string')}
                  >
                    {!showCourses ? 'Show Courses' : 'Hide Courses'}
                  </button>
                </div>
              </div>
              {showCourses && (
                <Search
                  prevCourses={prevCourses}
                  handleRegistration={handleRegistration}
                  name={name}
                />
              )}
            </div>
          </div>
        </div>
    );
}

export default SelectCourses;