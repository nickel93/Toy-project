import React from 'react';

const element = (props) => {
    switch (props.task.type) {
        case "chemical":
            return (
                <>
                    <span>{props.task.info.stat}</span><span>{props.task.info.display}</span><span>{props.task.info.volume}</span>
                </>
            );
        case "process":
            return (
                <>
                    <span>{props.task.info.name}</span><span>{props.task.info.time}</span><span>{props.task.info.heating}</span><span>{props.task.info.stirring}</span><span>{props.task.info.gradually}</span>
                </>
            );
        default:
            return (
                <>

                </>
            );
    }
};

export default element;