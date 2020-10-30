import React, { useState } from 'react';
import Borads from './borads/Borads'
import sample_note from '../sample_note';
const borad = () => {

    const [sampleState, setsample] = useState(sample_note);
    return (
        <div>
            {sampleState.experiments.map((el, index) => (<Borads name={el.name} task={el.tasks} />))}
        </div>
    );
};



export default borad;