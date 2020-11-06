import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const Element = (props) => {
    const history = useHistory();
    const location = useLocation();
    const onTaskClicked = (e, taskId) => {
        e.stopPropagation();
        const slice = "/";
        const noteId = "1234";
        const url = "experiment";
        history.push(url + slice + noteId + slice + taskId);
    };

    switch (props.task.type) {
        case "chemical":
            return (
                <>
                    <button onClick={(e) => onTaskClicked(e, props.task.id)}>
                        <span>{props.task.info.stat}</span><span>{props.task.info.display}</span><span>{props.task.info.volume}</span>
                    </button>
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

export default Element;