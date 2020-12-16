import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import '../App2.css';

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard';
import HomePage from '../HomePage/HomePage';
import Login from '../Login/Login';
import Register from '../Register/Register';

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            
        <div className="navbar" aria-label="Navigation bar"><br/>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><a href="#">Configure budgets</a></li>
            <li><a href="#">[empty]</a></li>
            <li class="dropdown">
                <NavLink to="/login">Log in</NavLink>
                <div class="dropdown-content">
                    <NavLink to="/register">Sign up</NavLink>
                </div>
            </li>
        </ul>
    </div>

          <div className="content">
              <Route exact path="/" component={HomePage}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
          </div>
          
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;