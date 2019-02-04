import React from 'react';
import "./Task.css";

function Task(props) {
    return(
        <div className='container'>
            <div>
                -{props.text}-
                <span onClick={() => {props.delete(props.id)}}><i className="far fa-trash-alt"></i></span>
            </div>
        </div>
    );
}

export default Task;