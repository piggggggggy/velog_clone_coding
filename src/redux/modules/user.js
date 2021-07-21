import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { getCookie } from "../../shared/api"
import api from "../../shared/api";
import { deleteCookie, setCookie } from "../../shared/Cookie";


// actions

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";


// action creator

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));


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
                const USER_TOKEN = res.data.tokenDto.accessToken; // 연결하고 확인
                setCookie('token', USER_TOKEN, 1);
                // history.replace('/');
                // window.location.reload();
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

        // [GET_USER]: (state, action) =>
        // produce(state, (draft) => {
        //     draft.user = action.payload.user;
        // }),

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