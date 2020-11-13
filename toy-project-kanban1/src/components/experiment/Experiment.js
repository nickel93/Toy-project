import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Experiment.scss";
const Experiment = (props) => {
    //init data

    let data = null;

    //hook
    const location = useLocation();



    //input data
    let views = () => {
        let Edata = props.data.find(obj => obj.id === location.state.Eid);
        data = Edata.tasks.find(obj => obj.id === location.state.id);
        console.log(data);
        return (
            <div className={"modal"}>
                <h3>Chemical:{data.info.display}</h3>
                <h3>Product number:{data.info.product_number}</h3>
                <h3>State:{data.info.state}</h3>
                <h3>Weight:{data.info.weight}</h3>
            </div>
        )
    };
    return (
        <>
            {views()}
        </>
    );
}


export default Experiment;