import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/api";

// actions
const RECENT = "RECENT";
const RECENT_TAG = "RECENT_TAG";
const RECENT_SCH = "RECENT_SCH";

// actionCreators
const recent = createAction(RECENT, (recent) => ({recent}));
const recentTag = createAction(RECENT_TAG, (recent) => ({recent}));
const recentSch = createAction(RECENT_SCH, (recent) => ({recent}));


// initialState

const initialState = {
    list: [],
}

// thunk

// 전체 불러오기
const getRecentDB = () =>
    async (dispatch, {history}) => {
        await api
            .get('/api/recent')
            .then((res) => {
                console.log(res);
                
                dispatch(recent(res.data));
            }).catch((err) => {
                console.log("안불러오네", err);
            });
    };


// tag 검색
const getTagDB = (tag) => 
    async (dispatch, {history}) => {
        await api
            .get(`/api/recent-tag/${tag}`)
            .then((res) => {
                console.log(res);

                dispatch(recentTag(res.data));
            }).catch((err) => {
                console.log("안불러옴", err);
            });
    };

// 검색
const getSearchDB = (search) =>
    async (dispatch, {history}) => {
        await api
            .get(`/api/recent-search/${search}`)
            .then((res) => {
                console.log(res);

                dispatch(recentSch(res.data));
            }).catch((err) => {
                console.log("검색안됨", err);
            });
    };

// reducer

export default handleActions(
    {
        [RECENT]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.recent;
        }),

        [RECENT_TAG]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.recent;
        }),

        [RECENT_SCH]: (state, action) =>
        produce(state, (draft) => {
            draft.list = action.payload.recent;
        }),
    }, initialState
);


export const actionCreators = {
    getRecentDB,
    getTagDB,
    getSearchDB,
};