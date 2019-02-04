import React, { Component } from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm"
import Task from './Task/Task'

class App extends Component {
  state={
    tasks: [
        {id: 0, text: 'Не выходить из комнаты'},
        {id: 1, text: 'Не совершать ошибку'},
        {id: 2, text: 'Курить Шипку'},
        {id: 3, text: 'Сходить в уборную'}
    ],
      currentTask: {text: ''}
  };

   addTask = (inputText) => {
       this.setState({currentTask: {text: inputText.target.value}});
       console.log(this.state.currentTask);
   };

   addTaskToList = () => {
        const newTask = this.state.currentTask;
        const tasks = [...this.state.tasks];
        tasks.push({id: tasks.length, text: newTask.text});
        this.setState({tasks});
        console.log(tasks);
   };

   removeTaskFromList = () => {

   }

  render() {
      const tasks = (
            <div>
                {
                  this.state.tasks.map((task) => {
                    return <Task key={task.id} text={task.text}/>
                    }
                  )
                }
            </div>
          );
    return (
      <div className="App">
        <AddTaskForm functionOnChange={this.addTask} functionOnClick={this.addTaskToList}/>
          {tasks}
      </div>
    );
  }

}

export default App;
