import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm"
import Task from './Task/Task'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTaskForm/>
        <Task text="Тестовая таска"/>
      </div>
    );
  }
}

export default App;
