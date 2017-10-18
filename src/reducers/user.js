import * as Actions from '../constants/actions';

const initialState = {
    user: {
        loggedIn: false
    }
};

/**
    userReducer takes in the state and action and returns a new state object based on action type
    and payload if any
    @param {object} state Current state object
    @param {object} action Current dispatched action that has a type property and rest of payload
    @return {object} New state object
*/
const userReducer = (state, action) => {
    switch (action.type) {
    case Actions.GOOGLE_LOGIN_SUCCESS:
        return {
            ...state,
            user: {
                rawData: action.userData,
                loggedIn: true
            }
        };
    default:
        return state || initialState;
    }
};

export default userReducer;
