import * as actionType from '../actions/actionType';


const initalState = {
    user: "",
    auth: false,
    position: "",
};

const setUser = (state, action) => {
    console.log(action);
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
const setPosition = (state, action) => {
    let newUser = {
        ...state,
        position: action.position
    }
    return newUser;
}


const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionType.SETUSER:
            return setUser(state, action);
        case actionType.SETLOGIN:
            return setLogin(state, action);
        case actionType.SETPOSITION:
            return setPosition(state, action);
        default:
            return state;
    }
};

export default reducer;