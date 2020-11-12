import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import * as action from '../../store/actions/labnote';
import "./Experiment.scss";
const Experiment = (props) => {
    //init data
    let views = (
        <div className={"modal"}>
            wait
        </div>
    );


    //hook
    const dispatch = useDispatch();
    const location = useLocation();
    const data = useSelector((state) => state.data);


    //input data
    const inputdata = useCallback(() => {
        dispatch(action.findExperiments(location.state.id, location.state.Eid));
    }, [dispatch, location.state.id, location.state.Eid]);


    if (data.tasks != null) {
        console.log(data.tasks)
        views = (
            <div className={"modal"}>
                <h3>Chemical:{data.tasks.info.display}</h3>
                <h3>Product number:{data.tasks.info.product_number}</h3>
                <h3>State:{data.tasks.info.state}</h3>
                <h3>Weight:{data.tasks.info.weight}</h3>
            </div>
        )
    }





    useEffect(() => {
        inputdata();
    }, [inputdata], data);

    return (
        <>
            {views}
        </>
    );
}


export default Experiment;