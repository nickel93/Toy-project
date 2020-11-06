import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../store/actions/labnote';

const Experiments = ({ match }) => {
    const data = useSelector((state) => state.data, []);
    const dispatch = useDispatch();
    //reducer move
    const inputdata = useCallback(() => {
        const { id } = match.params;
        console.log(match.params)
        action.findExperiments(dispatch, id);
        console.log(data.experiments)
    }, [dispatch]);

    // if (data.experiments !== null) {
    //     experimentss = (
    //         <div>
    //             <h3>Chemical:{data.experiments[0].info.display}</h3>
    //             <h3>Product number:{data.experiments[0].info.product_number}</h3>
    //             <h3>State:{data.experiments[0].info.state}</h3>
    //             <h3>Weight:{data.experiments[0].info.weight}</h3>
    //         </div>
    //     )
    // }

    useEffect(() => {
        inputdata();
    }, [inputdata], data);

    return (
        <div>
            wait
        </div>
    );
}


export default Experiments;