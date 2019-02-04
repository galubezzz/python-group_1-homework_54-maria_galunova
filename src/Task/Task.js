import React from 'react';
import "./Task.css";

function Task(props) {
    return(
        <div className='container'>
            <div>
                <input type="checkbox" onClick={() => {props.done(props.id)}}/>
                <span style={props.style}>{props.text}</span>
                <span onChange={() => {props.delete(props.id)}}>
                    <i className="far fa-trash-alt"></i></span>
            </div>
        </div>
    );
}

export default Task;