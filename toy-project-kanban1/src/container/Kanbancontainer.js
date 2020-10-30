import React from 'react';
import Board from '../components/Board'
import sample_note from '../sample_note';
const kanbancontainer = () => {
    //data 이동수정
    return (
        <div>
            <Board data={sample_note} />
        </div>
    );

};

export default kanbancontainer

