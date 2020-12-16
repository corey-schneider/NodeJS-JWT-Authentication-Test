import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import '../App2.css';
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";
import axios from "axios";


    let URL = 'http://localhost:3001'; // TODO change this when put on live web

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    async handleLogin() {
        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };

        axios.post(URL+'/api/login', data).then(res => {
            console.log(res);
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            if(res && res.data.success) {
                const token = res.data.token;
                localStorage.setItem('jwt', token);
                alert('success.');
                this.getDashboard();
            }
        }, error => {
            if(error.response.status === 401) {
                alert('401 unauthorized error.');
            } else {
                alert(error.response.status+' error');
            }
        });
    }



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
                <br/>
                {/* <Button title="Login" onClick={() => this.handleLogin} /> */}
                <button onClick={this.handleLogin}>Log in</button>
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