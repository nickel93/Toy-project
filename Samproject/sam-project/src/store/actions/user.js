import * as actionType from "./actionType";

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


export const initUser = (user) => {
    return (dispatch) => {
        console.log(user)
        dispatch(setUser(user));
    };

};

export const setLogin = (auth) => {
    return (dispatch) => {
        dispatch(setSign(auth));
    };

};