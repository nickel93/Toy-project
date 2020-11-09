import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as Action from '../store/actions/labnote'
import Board from '../components/Board'
import "./Kanbancontainer.scss";
import Experiment from '../components/experiment/Experiment'
const Kanbancontainer = () => {
    //hook
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();
    let project = (
        <div>
            wait
        </div>
    );
    let modal = () => {
        console.log(data)
        if (data.flge === true) {
            <>
                <Experiment />
            </>
        }
    };

    //reducer move
    const inputdata = useCallback(() => {
        const initNote = Action.initNote();
        initNote(dispatch);
        console.log(data.note)
    }, [dispatch])

    if (data.note !== null) {
        project = (
            <>
                <Board data={data.experiments} />
            </>
        )
    }

    useEffect(() => {
        inputdata();
        modal();
    }, []);
    return (
        <div className={"kanban-container"}>
            {project}
            {modal()}
        </div>
    );
};

export default Kanbancontainer

