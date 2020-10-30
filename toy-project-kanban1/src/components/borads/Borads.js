import React, { useState } from 'react';
import Element from '../element/Element'
const borads = (props) => {

    return (
        <div>
            {props.name}
            {props.task.map((el, index) => (<Element task={el} />))}
        </div>

    );
};

export default borads;
