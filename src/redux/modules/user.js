import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { getCookie } from "../../shared/api"
import api from "../../shared/api";
import { deleteCookie, setCookie } from "../../shared/Cookie";


// actions

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


// action creator

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));


// initialState
const initialState = {
    user: {},
    is_login: true,
};


// middleware

// 로그인
const logInDB = (email, pwd) => 
    async (dispatch, getstate, {history}) => {
        await api
            .post('/api/member/login', {
                email: email,
                pwd: pwd
            })
            .then((res) => {
                // console.log(res);
                dispatch(
                    setUser({ // 연결하고 확인
                        mName: res.data.mName,
                        email: res.data.email,
                        mId: res.data.mId,
                    })
                );
                const USER_TOKEN = res.data.token; // 연결하고 확인
                setCookie('token', res.data.token, 1);
                history.replace('/')
            }).catch((err) => {
                console.log("에러났음", err);
            });
    };


// 회원가입
const registerDB = (data) =>
    async (dispatch, getState, {history}) => {
        await api
            .post('/api/member/register', {
                email: data.email,
                pwd: data.pwd,
                pwdCheck: data.pwdCheck,
                mName: data.mName,
            })
            .then((res) => {
                console.log(res);

                history.replace('/')
            }).catch((err) => {
                console.log('에서났음', err);
            });
    };

// 로그아웃
const logOutDB = () => {
    return function (dispatch, getState, {history}) {
        dispatch(logOut());

    };
};



// reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;
            draft.is_login = true;
        }),

        [LOG_OUT]: (state, action) => 
        produce(state, (draft) => {
            deleteCookie('token');
            draft.user = {};
            draft.is_login = false;
        }),

    },
    initialState
);


const actionCreators = {
    logInDB,
    registerDB,
    logOutDB,
};

export { actionCreators };