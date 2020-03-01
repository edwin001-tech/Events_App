import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Calendar from './Calender';
function Card1(props) {
    return (
      <div class='container'>
        <div class="row">
      <div className="card">
          <div class="card-block">
        <img className="card-img-top"
        src="https://mdundo.com/media/articles/1561966725_7199_b.jpg" width='100' height='300'
             
             alt="cap image" />
        <div className="card-body">
          <h5 className="card-title">Gengetone Maseno University Edition</h5>
          <h5 className="date">DATE: 2 February 2020</h5>
          <h5 className="venue">VENUE: Graduation Square</h5>
          <h5 className="time">TIME: 6P.M - 6A.M</h5>
          <h5 className="Theme">THEME: "JIPIME UKEDI"</h5>
          <p className="card-text">Aaaah PIGWA MBOKO!</p>
          <Link to='/Registerform'>
          <div  className="btn btn-primary">Register</div>
          </Link>
        </div>
      </div>
      </div>
      </div>
      
      <div className='calendar'>
      <Calendar/>
      </div>
     
      </div>
      
    );
}
export default Card1;