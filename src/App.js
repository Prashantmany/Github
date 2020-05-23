import React, { Component } from 'react';
//import{ BrowserRouter as Router, Route, Switch } from 'react-route-dom';
import axios from 'axios';

import Navbar from './component/navbar';
import Users from './Users/Users';

import './App.css';


class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then(res=> (
        this.setState({users: res.data})
      ));
  }

  render(){
    return (
        <div className="App">
          <Navbar />
          <div className = "container">
            <Users users={this.state.users}/>
          </div>
        </div>
    );
  }
}

export default App;
