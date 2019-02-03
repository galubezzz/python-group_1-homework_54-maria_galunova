import React from 'react';
import './AddTaskForm.css;

function AddTaskForm(props) {
    return (
        <form>
          <div className="form-group">
            <label for="taskInput">Task</label>
            <input type="text" className="form-control" id="taskInput" placeholder="Do something">
            <small id="emailHelp" className="form-text text-muted">Start with writing down your task.</small>
          </div>
        </form>
    );
}

export default AddTaskForm;