import React from 'react'
import Card from './Card'
import './App.css';
import AppBar from './AppBar'


import {Link} from 'react-router-dom'
function CardList() {
    return (
      <div><AppBar/>
      <div className="row">
        <div className="col-sm-4">
        <Link to="/Card1">
          <Card 
          featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW5SGjXx4I8SdtJ1uVf4MJbzeaO5Z64M_dsRq3dekG70oIJKxw"
          title="Boondoks Gang coming to Maseno"
          description="Genge Tone trio will be performing at Maseno University this Saturday..."
          
          />
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to='/Card2'>
          <Card 
          featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW5SGjXx4I8SdtJ1uVf4MJbzeaO5Z64M_dsRq3dekG70oIJKxw"
          title="Boondoks Gang coming to Maseno"
          description="Genge Tone trio will be performing at Maseno University this Saturday..."
          />
          </Link>
        </div>
        <div className="col-sm-4">
          <Link to='/Card3'>
          <Card
          featureImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW5SGjXx4I8SdtJ1uVf4MJbzeaO5Z64M_dsRq3dekG70oIJKxw"
          title="Boondoks Gang coming to Maseno"
          description="Genge Tone trio will be performing at Maseno University this Saturday..." 
          
          />
          </Link>
        </div>
      </div>
      </div>
    );
  }
  
  
  export default CardList