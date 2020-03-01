import React from 'react';
import './App.css';
function Card(props) {
  return (
    
    <div className="card">
      <img className="card-img-top"
           src={props.featureImage} alt="cap image" width='200' height='300'/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
    
  );
}
export default Card;