import React, { Component } from 'react';
import axios from 'axios'; 
import { Route } from "react-router-dom"; 
import './App.css';

class App extends Component {
  state = {
    zoos: [],
    bears: [],
  }
  componentWillMount () {
    this.fetchZoos();
    this.fetchBears();
  }
  fetchZoos = () => {
    const promise = axios.get('http://localhost:3300/api/zoos')
    promise
    .then(response => (
      this.setState({ zoos: response.data})
    ))
    .catch(error => {
      console.log(error)
    })
  }

  fetchBears = () => {
    const promise = axios.get('http://localhost:3300/api/bears')
    promise
    .then(response => {
      this.setState({bears: response.data})
    })
    .catch(error => {
      console.log(error) 
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        Test
      </div>
    );
  }
}

export default App;
