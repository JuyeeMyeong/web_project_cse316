import '../App.css';
import React, { useState, useEffect }  from 'react';
import Search from './Search';
import Navbar from './Navbar';

function SelectCourses() {

    return (
        <div className="selectCoursePage d-flex flex-column align-items-center">
            <Navbar />

            <div className="form-container d-flex flex-column">
                <div className='searchForm'>
                    <div className='formTitle'>Search Form</div>
                    <div className='d-flex justify-content-between searchRow'>
                        <label id="Name" htmlFor='' className="userName">Name:</label>
                        <input className="searchInput" type="text" name="user" id="" placeholder='Name here...'></input>
                    </div>
                    <div className='d-flex justify-content-between searchRow'>
                        <label id="SearchFor" htmlFor='' className="searchBox">Search for:</label>
                        <input className="searchInput" type="text" name="searchString" id="" placeholder='Name here...'></input>
                    </div>
                    <div>
                        <button className='showCoursebtn'>Show Courses</button>
                    </div>
                </div>
                <Search/>
            </div>
        </div>
    );
};

export default SelectCourses;