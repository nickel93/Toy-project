
import * as actionType from '../actions/actionTypes'


const initialState = {
    note: null,
    noteId: null,

};


const findExperiments = (state, action) => {
    let experiments = JSON.parse(action.experiments);
    let data = experiments.map((obj) => {
        return obj.tasks.find(element => element.id === action.id)
    });
    console.log(data);
    let newNote = {
        ...state,
        experiments: data
    }
    return newNote;
};

const setNote = (state, action) => {
    let newNote = {
        ...state,
        note: action.note,
        experiments: JSON.parse(action.note.experiments)
    }
    return newNote;
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SETNODE:
            return setNote(state, action);
        case actionType.SETEXPERIMENTS:
            return findExperiments(state, action);
        default:
            return state;
    }
};

export default reducer;