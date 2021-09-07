import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { getCookie } from "../../shared/api"
import api from "../../shared/api";
import { deleteCookie, setCookie } from "../../shared/Cookie";


// actions

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const LOG_CHECK = "LOG_CHECK";
// const GET_USER = "GET_USER";
const LOAD_USER = "LOAD_USER";
const EDIT_USER = "EDIT_USER";
const WITHDRAW = "WITHDRAW"

// action creator

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const logCheck = createAction(LOG_CHECK, (user) => ({ user }));
const load_user = createAction(LOAD_USER, (user) => ({ user }));
const eidit_user = createAction(EDIT_USER, (user) => ({ user }));
const withdraw = createAction(WITHDRAW, (user) => ({ user }));



// initialState
const initialState = {
    user: {},
    is_login: false,
};


// middleware

// 로그인
const logInDB = (email, pwd) => 
    async (dispatch, getState, {history}) => {
        await api
            .post('/api/member/login', {
                email: email,
                pwd: pwd
            })
            .then((res) => {
                console.log(res);
                dispatch(
                    setUser({ // 연결하고 확인
                        comment: res.data.member.comment,
                        email: res.data.member.email,
                        github: res.data.member.github,
                        memberId: res.data.member.memberId,
                        nickName: res.data.member.nickName,
                        profileImg: res.data.member.profileImg,
                        velogName: res.data.member.velogName
                    })
                );
                localStorage.setItem('email', res.data.member.email);
                localStorage.setItem('memberId', res.data.member.memberId);
                localStorage.setItem('nickName', res.data.member.nickName);
                localStorage.setItem('velogName', res.data.member.velogName);
                localStorage.setItem('comment', res.data.member.comment);
                localStorage.setItem('profileImg', res.data.member.profileImg);
                // const USER_TOKEN = res.data.tokenDto.accessToken;
                setCookie('token', res.data.tokenDto.accessToken, 1);
                // history.replace('/');
            }).catch((err) => {
                console.log("에러났음", err);
            });
    };
    

// 로그인 체크
const loginCheckDB = () =>
    async (dispatch, getState, {history}) => {
        const memberId = localStorage.getItem('memberId');
        const token = document.cookie;

        if (memberId !== null && token !== '') {
            dispatch(logCheck());
        }
    
    };


// 회원가입
const registerDB = (data) =>
    async (dispatch, getState, {history}) => {
        await api
            .post('/api/member/register', {
                email: data.email,
                pwd: data.pwd,
                nickName: data.mName,
            })
            .then((res) => {
                console.log(res);
                history.replace('/');
                window.location.reload();
            }).catch((err) => {
                console.log('에러남', err);
            });
    };


// 로그아웃
const logOutDB = () => {
    return function (dispatch, getState, {history}) {
        deleteCookie('token');
        localStorage.removeItem('email');
        localStorage.removeItem('memberId');
        localStorage.removeItem('nickName');
        localStorage.removeItem('velogName');
        localStorage.removeItem('comment');
        localStorage.removeItem('profileImg');
        dispatch(logOut());
        history.push('/');
    };
};


// setting load
const loadUserDB = () => 
    async (dispatch, getState, {history}) => {
        await api
            .get('/api/member/setting')
            .then((res) => {
                console.log(res);
                

            }).catch((err) => {
                console.log(err, "에러남")
            });
    };


// setting edit
const editUserDB = () => 
    async (dispatch, getState, {history}) => {
        await api
            .put(`/api/member/setting`)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err, "에러남")
            });
    };


// withdraw
const withdrawDB = () => 
    async (dispatch, getState, {history}) => {
        await api
            .put('/api/member/withdrawal')
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err, "에러남")
            });
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

        [LOG_CHECK]: (state, action) => 
        produce(state, (draft) => {
            draft.is_login = true;
        }),

        [LOAD_USER]: (state, action) => 
        produce(state, (draft) => {
            draft.user = action.payload.user;
        }),

        [EDIT_USER]: (state, action) => 
        produce(state, (draft) => {
            draft.user = action.payload.user;
        }),

        [WITHDRAW]: (state, action) => 
        produce(state, (draft) => {
            draft.user = {};
        }),

    },
    initialState
);


const actionCreators = {
    logInDB,
    registerDB,
    logOutDB,
    loginCheckDB,

    loadUserDB,
    editUserDB,
    withdrawDB,

};

export { actionCreators };