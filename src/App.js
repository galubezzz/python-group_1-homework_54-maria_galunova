import React, { Component } from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm"
import Task from './Task/Task'

class App extends Component {
  state={
    tasks: [
        {id: 0, text: 'Не выходить из комнаты', completed: false},
        {id: 1, text: 'Не совершать ошибку', completed: false},
        {id: 2, text: 'Курить Шипку', completed: false},
        {id: 3, text: 'Сходить в уборную', completed: false}
    ],
      currentTask: {text: ''}
  };

   addTask = (event) => {
       this.setState({currentTask: {text: event.target.value}});
   };

   addTaskToList = () => {
        const newTask = this.state.currentTask;
        const tasks = [...this.state.tasks];
        tasks.push({id: tasks[tasks.length-1].id+1, text: newTask.text, completed: false});
        this.setState({tasks});
        this.setState({currentTask: {text: ''}})
   };

   removeTaskFromList = (taskId) => {
        const tasks = [...this.state.tasks];
        const newTasks = tasks.filter(task => task.id !== taskId);
        console.log(newTasks);
        this.setState({tasks: newTasks});
   };

   markAsDone = (taskId) => {
        const tasks = this.state.tasks.map(task => {
           if (task.id === taskId) {
               task.completed = !task.completed;
           }
           return task;
        });

        this.setState({tasks});
   };

  render() {
      const tasks = (
            <div>
                {
                  this.state.tasks.map((task) => {
                      let style = {};
                      if (task.completed) {
                          style = {
                              textDecoration: 'line-through'
                          };
                      }
                    return <Task key={task.id}
                                 id={task.id}
                                 text={task.text}
                                 delete={this.removeTaskFromList}
                                 done={this.markAsDone}
                                 style={style}
                    />
                  }
                  )
                }
            </div>
          );
    return (
      <div className="App">
        <AddTaskForm functionOnChange={this.addTask}
                     functionOnClick={this.addTaskToList}
                     text={this.state.currentTask.text}/>
          {tasks}
      </div>
    );
  }

}

export default App;
