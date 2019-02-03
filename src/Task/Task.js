import React from 'react';
import "./Task.css";

function Task(props) {
    return(
        <div className='container'>
            <div>
                {props.text}
            </div>
        </div>
    );
}