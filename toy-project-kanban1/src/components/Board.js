import React, { useEffect, useCallback } from 'react';
import Boards from './board/boards'
import "./Board.scss";


const Board = (props) => {
    let experiment = (
        <>
            <h3>wait</h3>
        </>

    );



    const inputdata = useCallback(() => {
        if (props.data != null) {
            experiment = props.data.map((el) => {
                return (
                    <Boards key={el.id} taska={el.tasks} id={el.name} Eid={el.id} />
                )
            });
        }

    }, [experiment]);

    useEffect(() => {
        inputdata();
    }, [inputdata()]);
    return (
        <div className={"board-container"}>
            {experiment}
        </div>
    );
};


export default Board;