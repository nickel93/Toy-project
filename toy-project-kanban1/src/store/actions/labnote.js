import * as actionType from "../actions/actionTypes";


export const setNote = (labnote) => {
    return {
        type: actionType.SETNODE,
        labnote
    };
}