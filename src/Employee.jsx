import React from 'react';
import './App.css';

function Employee(props){
    const activeStyle = {
        color: 'black'
    }
    const inactiveStyle = {
        color: 'red'
    }

    return(
        <div style={props.data.isActive ? activeStyle : inactiveStyle}>
            <div className="column left">{props.data.name}</div>
            <div className="column right">{props.data.age}</div>
        </div>
    )
}

export default Employee