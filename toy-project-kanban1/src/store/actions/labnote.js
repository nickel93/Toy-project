import * as actionType from "../actions/actionTypes";


export const setNote = (note) => {
    return {
        type: actionType.SETNODE,
        note
    };
}