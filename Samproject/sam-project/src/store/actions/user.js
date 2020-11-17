import * as actionType from "./actionType";

const setUser = (user) => {
    return {
        type: actionType.SETUSER,
        user
    };
};


export const initUser = (userId) => {
    return (dispatch) => {
        dispatch(setUser());
    };

};