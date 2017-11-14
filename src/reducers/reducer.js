import {TEXT_CHANGE} from "../actions/actionTypes";

const DEFAULT_STATE = {username: '', password: ''};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return {...state, username: action.username, password: action.password};

        default:
            return state;
    }
}