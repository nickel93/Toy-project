import { loadNote } from "../../api/noteAPI";
import * as actionType from "../actions/actionTypes";

const setNote = (note) => {
    return {
        type: actionType.SETNODE,
        note
    };

};

const findNote = (experiments, id) => {
    return {
        type: actionType.SETEXPERIMENTS,
        experiments,
        id
    };

};

export const initNote = () => {
    return (dispatch) => {
        loadNote("0000").then((note) => {
            dispatch(setNote(note));
        });
    }
}

export const findExperiments = () => {
    return (dispatch, id) => {
        loadNote("1234").then((experiments) => {
            console.log(experiments)
            dispatch(findNote(experiments.experiments, id));
        });
    }
}