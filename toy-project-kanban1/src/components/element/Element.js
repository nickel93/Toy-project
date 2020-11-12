import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Element.scss";
const Element = (props) => {

    //hook
    const history = useHistory();



    //clicked
    const onTaskClicked = (e, taskId) => {
        e.stopPropagation();
        console.log(taskId)
        history.push({
            pathname: 'experiment/1234/' + taskId,
            state: {
                id: taskId,
                Eid: props.Eid,
            }
        });

    };

    switch (props.task.type) {
        case "chemical":
            return (
                <button onClick={(e) => onTaskClicked(e, props.task.id)}>
                    <span>
                        {props.task.info.stat}{props.task.info.display}{props.task.info.volume}
                    </span>
                </button>
            );
        case "process":
            return (
                <span>
                    <h3>{props.task.info.name}</h3><h3>{props.task.info.time}</h3><h3>{props.task.info.heating}</h3><h3>{props.task.info.stirring}</h3><h3>{props.task.info.gradually}</h3>
                </span>
            );
        default:
            return (
                <>

                </>
            );
    }
};

export default Element;