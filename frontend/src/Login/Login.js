import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import '../App2.css';
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";


class Login extends Component {
  render() {
    return (
        <div align="center">
          <h1>Hello from Login</h1>
          <main>
            <div class="row">
                <label for="username">Username</label>
                <input type="text" name="username" id="username"/>
            </div>

            <div class="row">
                <label for="password">password</label>
                <input type="text" name="password" id="password"/>
            </div>

            <div>
                {/* <button onclick="login()">Login</button>
                <button onclick="getDashboard()">Get Dashboard</button>
                <button onclick="getSettings()">Settings</button> */}
                <br/>
                <Button title="Login" onClick={() => this.handleLogin} />
                <Button title="Get Dashboard" />
                <Button title="Settings" />
            </div>
        </main>
        <br/><br/><br/><p>Don't have an account? <NavLink to="/register">Sign up</NavLink> now!</p>
        </div>
    );
  }
}
 
export default Login;