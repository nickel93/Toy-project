
import * as actionType from '../actions/actionTypes'

const initialState = {
    note: null,
    noteId: null,
};


const setNote = (state, action) => {
    let newNote = {
        ...state,
        note: action.note
    }

    return newNote;
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SETNODE:
            return setNote(state, action);
        default:
            return state;
    }
};

export default reducer;