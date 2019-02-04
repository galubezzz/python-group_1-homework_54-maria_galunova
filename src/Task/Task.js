import React from 'react';
import "./Task.css";

function Task(props) {
    return(
        <div className='container'>
            <div>
                -{props.text}-
                <a href='#'><i className="far fa-trash-alt"></i></a>
            </div>
        </div>
    );
}

export default Task;