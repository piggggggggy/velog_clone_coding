import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { getCookie } from "../../shared/api"
import api from "../../shared/api";


// actions

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


// action creator

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));


// initialState
const initialState = {
    user: {},
    is_login: false,
};


// middleware



// reducer

