import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Calendar from './Calender';
function Card1(props) {
    return (
      <div class='container'>
      <div className="card">
        <img className="card-img-top"
        src="https://via.placeholder.com/600x250.png" 
             
             alt="cap image" />
        <div className="card-body">
          <h5 className="card-title">Title Placeholder</h5>
          <p className="card-text">Description Placeholder</p>
          <Link to='/Registerform'>
          <div  className="btn btn-primary">Register</div>
          </Link>
        </div>
      </div>
      <div className='calendar'>
      <Calendar/>
      </div>
     
      </div>
      
    );
}
export default Card1;