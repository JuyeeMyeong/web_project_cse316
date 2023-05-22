import '../App.css';
import React, { useState, useEffect, useMemo }  from 'react';


//list of courses can be taken 

function Search ({prevCourses}) {

    const [searchString, setSearchString] = useState("");
    const [name, setName] = useState("Tony");

    return(
        <div className='courseContainer'>
            <div className='listBox'>
                <h4 id='searchHdr'>{name} here are the courses you may select.</h4>
                <div className='d-flex flex-column'>
                    {prevCourses.map((course, index) => (
                        <div key={index}>
                            <input type='checkbox' id={`course-${index}`} />
                            <label htmlFor={`course-${index}`} style={{fontStyle: 'italic', fontWeight: '600'}}>{course.name}</label>
                        </div>
                    ))}
                </div>
                <button className='resgisterBtn'>Register</button>
            </div>
        </div>
    );

};

export default Search;