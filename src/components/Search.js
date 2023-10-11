import React from 'react';
import "../App.css";
import summer from "../images/summer.jpg";
// import calendar from "../images/calendar.png";

const Search = () => {
  return (
    <div>
      <p className='Search'>Search for rooms</p>
      <div className='options'>
        <label id='arrivalDateLabel'>Arrival Date</label>
        <input id='arrivalDateBox' className='datebox' type="text" autoComplete='arrivalDatePicker123'></input>

      


      </div>
      <div>
      <img src= {summer} alt="summer" className='s'/>
      <button className='b8'>Check availability</button>
      </div>
    </div>
  );
};

export default Search;