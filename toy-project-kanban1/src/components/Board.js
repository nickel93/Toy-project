import React from 'react';
import Boards from './board/boards'
import "./Board.scss";
const Board = (props) => {
    //데이터를 변경하고있을때 useState사용
    // const [sampleState] = useState(sample_note);
    //map 변수 할당으로 수정
    const experiment = props.data.experiments.map((el) => {
        return (
            <Boards key={el.id} taska={el.tasks} id={el.name} />
        )
    });
    return (
        <div className={"board-container"}>
            {experiment}
        </div>
    );
};


export default Board;