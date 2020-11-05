import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadNote } from '../api/noteAPI';
import Board from '../components/Board'
import * as Action from '../store/actions/labnote'
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {

    const data = useSelector((state) => state.data, []);
    let project = null;
    const dispatch = useDispatch();
    const inputdata = useCallback(() => {
        loadNote("0000").then((response) => {
            dispatch(Action.setNote(response));
        });
    }, [dispatch])

    if (data.note !== null) {
        console.log(data)
        const experiments = JSON.parse(data.note.experiments);

        project = (
            <>
                <Board data={experiments} />
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

