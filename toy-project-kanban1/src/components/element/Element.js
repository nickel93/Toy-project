import React from 'react';

const element = (props) => {
    switch (props.task.type) {
        case "chemical":
            return (
                <div>
                    <h4>{props.task.info.stat + " " + props.task.info.display + " " + props.task.info.volume}</h4>
                </div>
            );
        case "process":
            return (
                <div>
                    <h4>{props.task.info.name + " " + props.task.info.time + " " + props.task.info.heating + " " + props.task.info.stirring + " " + props.task.info.gradually}</h4>
                </div>
            );
        default:
            return (
                <div>

                </div>
            );
    }
};

export default element;