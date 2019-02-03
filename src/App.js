import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTaskForm/>
      </div>
    );
  }
}

export default App;
