import {TEXT_CHANGE} from "./actionTypes";

export function textChange(username, password) {
    return {
        type: TEXT_CHANGE,
        username: username,
        password: password
    }
}