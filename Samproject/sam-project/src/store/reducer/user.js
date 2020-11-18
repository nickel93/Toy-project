import * as actionType from '../actions/actionType';


const initalState = {
    user: "",
    auth: false,
};

const setUser = (state, action) => {
    let newUser = {
        ...state,
        user: action.user
    }
    return newUser;
}

const setLogin = (state, action) => {
    let newUser = {
        ...state,
        auth: action.auth
    }
    return newUser;
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.SETUSER:
            return setUser(state, action);
        case actionType.SETLOGIN:
            return setLogin(state, action);
        default:
            return state;
    }
};

export default reducer;