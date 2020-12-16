import React from 'react';
import './App2.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
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

//function App() {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className="navbar" aria-label="Navigation bar">
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Configure budgets</a></li>
            <li><a href="#">[empty]</a></li>
            <li class="dropdown">
                <a href="#">Log in</a>
                <div class="dropdown-content">
                    <a href="#">dropdown 1</a>
                    <a href="#">dropdown 2</a>
                </div>
            </li>
        </ul>
    </div>
    <p>Hi, {this.state.username}</p>
    <br/>


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
