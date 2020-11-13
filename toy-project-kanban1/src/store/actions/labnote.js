import { loadNote } from "../../api/noteAPI";
import * as actionType from "../actions/actionTypes";
//Note data
let state;

const setNote = (note) => {
    return {
        type: actionType.SETNODE,
        note
    };

};

const findNote = (experiments, id, Eid) => {
    return {
        type: actionType.SETEXPERIMENTS,
        experiments,
        id,
        Eid
    };
};

export const initNote = (noteId, email) => {
    return (dispatch) => {
        loadNote(noteId, email).then((note) => {
            state = note;
            dispatch(setNote(note));
        });
    }
}
export const findExperiments = (id, Eid) => {
    return (dispatch) => {
        dispatch(findNote(state.experiments, id, Eid));
    }
}