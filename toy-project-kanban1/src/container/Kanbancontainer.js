import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import * as Action from '../store/actions/labnote';
import Board from '../components/Board';
import Experiment from '../components/experiment/Experiment';
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {

    //router
    let board = (
        <div>
            wait
        </div>
    );
    let detail = (
        <Route path={'/experiment/1234/:id'}
            render={() => <Experiment />}
        />
    );



    //hook
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();


    //nodeId 수정
    const inputdata = useCallback(() => {
        dispatch(Action.initNote());
    }, [dispatch])



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

