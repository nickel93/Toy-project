import React, { useState, useEffect } from 'react';
import Borads from './borads/Borads'
import * as sample_note from '../sample_note';
const Borad = () => {
    const [sampleState, setsample] = useState(sample_note.default);

    let test = () => {
        console.log("왔어")
        sampleState.experiments.map((el, index) => {
            console.log(el.name);
            return (
                <div>
                    <Borads name={el.name} />
                </div>
            );
        });
    };

    return (
        <div>
            {test()}
        </div>
    );

};


export default Borad;