import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Detail = () => {
    const dispatch = useDispatch("");
    const inputData = useCallback(() => {

    });


    return (
        <div>
            <h3>Chemical</h3>
            <h3>Product number</h3>
            <h3>State</h3>
            <h3>Weight</h3>
        </div>
    );
}


export default Detail;