
import React, { useState, useContext } from 'react';
import { AccountContext } from "../Accounts";
import { useDispatch } from 'react-redux';
import * as user from '../../../store/actions/user'
const Signln = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { authenticate } = useContext(AccountContext);
    const { getSession } = useContext(AccountContext);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email + " " + password);
        authenticate(email, password)
            .then((data) => {
                console.log("Logged In!" + data);
                dispatch(user.setLogin(true));
                getSession().then((res) => {
                    console.log(res);
                    dispatch(user.initUser(res));
                });
            })
            .catch((err) => {
                console.error("Failed to login!", err);
            });
    }

    return (
        <div className={"SignIn"}>
            <div>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />

            </div>
            <div>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </div>
            <div>
                <button type="submit"
                    onClick={(e) => onSubmit(e)}

                >
                    버튼
                    </button>
            </div>
        </div>
    );

};

export default Signln;