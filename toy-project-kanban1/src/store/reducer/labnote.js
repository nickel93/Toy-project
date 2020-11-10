
import * as actionType from '../actions/actionTypes'


const initialState = {
    note: null,
    noteId: null,
    tasks: null,
    flge: false,

};


const findExperiments = (state, action) => {
    let experiments = JSON.parse(action.experiments);
    console.log(experiments);
    console.log(action.Eid);
    let Edata = experiments.find(obj => obj.id === action.Eid);
    console.log(Edata);
    let data = Edata.tasks.find(obj => obj.id === action.id);
    console.log(data);

    let newNote = {
        ...state,
        tasks: data,
        flge: true
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