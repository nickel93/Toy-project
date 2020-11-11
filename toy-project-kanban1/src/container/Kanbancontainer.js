import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import * as Action from '../store/actions/labnote';
import Board from '../components/Board';
import Experiment from '../components/experiment/Experiment';
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {





    //hook
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();


    //nodeId 수정
    const inputdata = useCallback(() => {
        dispatch(Action.initNote());
    }, [dispatch])


    //router
    let board = (
        <Route path={'/experiment'}
            render={() => <Board data={data.experiments} />}
        />
    );

    let detail = (
        <Route path={'/experiment/1234/:id'}
            render={() => <Experiment />}
        />
    );


    useEffect(() => {
        inputdata();
    }, [inputdata]);
    return (
        <div className={"kanban-container"}>
            {board}
            {detail}

        </div>
    );
};

export default Kanbancontainer

