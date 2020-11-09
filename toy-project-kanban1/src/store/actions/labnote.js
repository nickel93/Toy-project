import { loadNote } from "../../api/noteAPI";
import * as actionType from "../actions/actionTypes";

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

export const initNote = () => {
    return (dispatch) => {
        loadNote("1234").then((note) => {
            dispatch(setNote(note));
        });
    }
}

export const findExperiments = () => {
    return (dispatch, id, Eid) => {
        loadNote("1234").then((experiments) => {
            dispatch(findNote(experiments.experiments, id, Eid));
        });
    }
}