import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as Action from '../store/actions/labnote'
import Board from '../components/Board'
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {
    let project = (
        <div>
            wait
        </div>
    );
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();
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
    }, [inputdata]);
    return (
        <div className={"kanban-container"}>
            {project}
        </div>
    );
};

export default Kanbancontainer

