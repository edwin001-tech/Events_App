import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CardList from './CardList';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Registerform from './Registerform'
import Signin from './Signin'
const routing = (
    <Router>
      <div>
      
            
            <Switch>
              
            <Route exact path="/" component={CardList} /> 
            <Route path="/Card1" component={Card1} />
            <Route path="/Card2" component={Card2} />
            <Route path="/Card3" component={Card3} />
            <Route path="/Signin" component={Signin} />

            <Route path="/Registerform" component={Registerform} />
            
            
            
           
            </Switch>
            </div>
            </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
