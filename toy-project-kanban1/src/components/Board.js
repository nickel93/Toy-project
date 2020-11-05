import React, { useEffect } from 'react';
import Boards from './board/boards'
import "./Board.scss";
const Board = (props) => {
    let experiment = null;

    const inputdata = () => {
        if (props.data === null) {
            experiment = (
                <>
                    <h3>wait</h3>
                </>
            );
        } else {
            console.log(props.data)
            experiment = props.data.map((el) => {
                return (
                    <Boards key={el.id} taska={el.tasks} id={el.name} />
                )
            });
        }
    };
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