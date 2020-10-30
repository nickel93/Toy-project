import React from 'react';
import Element from '../element/Element'
import "./boards.scss";
const boards = (props) => {
    const task = props.taska.map((el) => {
        return (
            <Element
                key={el.id}
                task={el}
            />
        )
    });
    return (
        <div className="boards-name">
            <h1> {props.id} </h1>
            {task}
        </div>

    );
};

export default boards;
