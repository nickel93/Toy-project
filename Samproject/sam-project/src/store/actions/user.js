import * as actionType from "./actionType";
import { getUser } from "../../api/noteAPI";
const setUser = (user) => {
    return {
        type: actionType.SETUSER,
        user
    };
};

const setSign = (auth) => {
    return {
        type: actionType.SETLOGIN,
        auth
    };
};

const setPosition = (position) => {
    return {
        type: actionType.SETPOSITION,
        position
    };
};


export const initUser = (user) => {
    return (dispatch) => {
        dispatch(setUser(user));
        getUser(user.sub).then((data) => {

            dispatch(setPosition(data));
        });

    };

};

export const setLogin = (auth) => {
    return (dispatch) => {
        dispatch(setSign(auth));
    };

};

