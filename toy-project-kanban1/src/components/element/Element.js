import React from 'react';

const element = (props) => {
    switch (props.task.type) {
        case "chemical":
            return (
                <div>
                    <span>{props.task.info.stat}</span><span>{props.task.info.display}</span><span>{props.task.info.volume}</span>
                </div>
            );
        case "process":
            return (
                <div>
                    <span>{props.task.info.name}</span><span>{props.task.info.time}</span><span>{props.task.info.heating}</span><span>{props.task.info.stirring}</span><span>{props.task.info.gradually}</span>
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