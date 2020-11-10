import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as Action from '../store/actions/labnote'
import Board from '../components/Board'
import "./Kanbancontainer.scss";
const Kanbancontainer = () => {
    //hook
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();
    let project = (
        <div>
            wait
        </div>
    );

    //nodeId 수정
    const inputdata = useCallback(() => {
        dispatch(Action.initNote());
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

