import React, { useState, useEffect, useCallback } from 'react';
import SignIn from '../components/Auth/SignIn/Signln';
import Detail from '../components/Detail/Detail'
import { useSelector } from 'react-redux';
const Logincontainer = () => {
    const [Login, setLogin] = useState("");
    const data = useSelector((state) => state.user, []);
    const initLogin = useCallback(() => {
        setLogin(data.auth);

    }, [data.auth]);

    useEffect(() => {
        initLogin();
    }, [initLogin])

    return (
        <div>
            {Login ? <Detail user={data.user} /> : <SignIn />}
        </div>
    );

};

export default Logincontainer;