import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Experiment.scss";
const Experiment = (props) => {
    //init data
    const Edata = props.data.find(obj => obj.id === location.state.Eid);
    const data = Edata.tasks.find(obj => obj.id === location.state.id);


    //hook
    const location = useLocation();



    //input data
    const views = (
        <div className={"modal"}>
            <h3>Chemical:{data.info.display}</h3>
            <h3>Product number:{data.info.product_number}</h3>
            <h3>State:{data.info.state}</h3>
            <h3>Weight:{data.info.weight}</h3>
        </div>

    );
    return (
        <>
            {views}
        </>
    );
}


export default Experiment;