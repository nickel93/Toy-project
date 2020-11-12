import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import * as Action from '../store/actions/labnote';
import Board from '../components/Board';
import Experiment from '../components/experiment/Experiment';
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {
    const noteId = "1234";
    const email = "helium@ant-inc.co";

    //hook
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();

    const inputdata = useCallback(() => {
        dispatch(Action.initNote(noteId, email));

    }, [dispatch])


    useEffect(() => {
        inputdata();
    }, [inputdata]);




    //Route
    let detail = (
        <Route path={'/experiment/1234/:id'}
            render={() => <Experiment data={data.experiments} />}
        />
    );
    let board = (
        <Route path={'/experiment'}
            render={() => <Board data={data.experiments} />}
        />
    )

    return (
        <div className={"kanban-container"}>
            {board}
            {detail}
        </div>
    );
};

export default Kanbancontainer

