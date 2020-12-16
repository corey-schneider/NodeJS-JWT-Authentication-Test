import React from 'react';
import './App2.css';
import axios from 'axios';
import Button from './Button/Button';
import Navigation from './Navigation/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', token: '', myContent: ''};
  }

  async callAPI() {
    let token = localStorage.getItem('jwt');
    const res = await axios.get("http://localhost:3001/api/dashboard", {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
  console.log(res);

    // fetch("http://localhost:3001/api/dashboard")
    // .then(res => res.text()
    // .then(res => this.setState({apiResponse: res})));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleLogin() {
    const token = localStorage.getItem('jwt');
    if(token) {
    const data = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
  };
  axios.post('/api/login', data).then(res => {
      console.log(res);
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
      if(res && res.data.success) {
          const token = res.data.token;
          localStorage.setItem('jwt', token);
      }
  });
}
  }

//function App() {
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <Navigation/>
      </header>


    <p>Hi user, {this.state.user}</p>
    <p>Hey token, {this.state.token}</p>
    <p>Howdy myContent, {this.state.myContent}</p>
    <br/>

    <br/>


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



    <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
    </div>

    
  );
  }
}

export default App;
