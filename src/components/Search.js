import '../App.css';
import React, { useState, useEffect, useMemo }  from 'react';
import { NavLink } from 'react-router-dom';


//list of courses can be taken 

function Search () {

    const [searchString, setSearchString] = useState("");
    const [name, setName] = useState("");

    return(
        <div className='courseContainer'>
            <div className='listBox'>
                <h4>{} here are the courses you may select.</h4>
                <div>{}</div>
                <button>Register</button>
            </div>
        </div>
    );

};

export default Search;