import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { getCookie } from "../../shared/api"
import api from "../../shared/api";
import { deleteCookie, setCookie } from "../../shared/Cookie";


// actions

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";


// action creator

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));


// initialState
const initialState = {
    user: {
        memberId: 44,
        email: "pyt4105@gmail.com",
        nickName: "용택이",
        velogName: "piggy",
        comment: "짜증나 진짜로",
        mStatus: true,
        profileImg: "https://media.vlpt.us/images/pyt4105/profile/0d998bb2-e2ce-430a-8434-c28369fc5009/%ED%83%80%EC%9D%B8%EC%9D%98%EC%82%B6.png?w=240",
        github: "https://github.com/piggggggggy",
    },
    is_login: false,
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
                // const USER_TOKEN = res.data.token; // 연결하고 확인
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
                nickName: data.mName,
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
        history.push('/');
        window.location.reload();
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

        [GET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;
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