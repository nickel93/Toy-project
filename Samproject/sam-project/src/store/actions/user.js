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
        console.log(user)
        dispatch(setUser(user));
        getUser("091b9baa-f5c2-4286-bcf2-70e899402536").then((data) => {
            console.log(data);
            dispatch(setPosition(data));
        });

    };

};

export const setLogin = (auth) => {
    return (dispatch) => {
        dispatch(setSign(auth));
    };

};

