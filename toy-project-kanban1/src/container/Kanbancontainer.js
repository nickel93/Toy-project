import React from 'react';
import Board from '../components/Board'
import sample_note from '../sample_note';
import "./Kanbancontainer.scss";
const kanbancontainer = () => {
    //data 이동수정
    return (
        <div className={"kanban-container"}>
            <Board data={sample_note} />
        </div>
    );

};

export default kanbancontainer

