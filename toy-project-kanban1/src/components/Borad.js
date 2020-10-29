import React, { useState, useEffect } from 'react';
import Borads from './borads/Borads'
import sample_note from '../sample_note';
const Borad = () => {
    const [sampleState, setsample] = useState(sample_note);

    return (
        <div>
            {sampleState.experiments.map((el, index) => (<Borads name={el.name} />))}
        </div>
    );
};



export default Borad;