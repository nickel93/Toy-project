import * as actionType from '../actions/actionType';


const initalState = {
    user: "",
};

const setUser = (state, action) => {
    let newUser = {
        ...state,
        user: action.user
    }
    return newUser;
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.SETUSER:
            return setUser(state, action);
        default:
            return state;
    }
};

export default reducer;