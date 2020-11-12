
import * as actionType from '../actions/actionTypes'


const initialState = {
    note: null,
    tasks: null,
};


const findExperiments = (state, action) => {
    let experiments = JSON.parse(action.experiments);
    let Edata = experiments.find(obj => obj.id === action.Eid);
    let data = Edata.tasks.find(obj => obj.id === action.id);
    let newNote = {
        ...state,
        tasks: data,
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