import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import { history } from "../configStore";
import api from "../../shared/api";

//action
const SET_CMT = "comment/SET_CMT";
const ADD_CMT = "comment/CREATE_CMT";
const DELETE_CMT = "comment/DELETE_CMT";
const EDIT_CMT = "comment/EDIT_CMT";
//action creator
const setCmt = createAction(SET_CMT, (comment_list) => ({ comment_list }));
const addCmt = createAction(ADD_CMT, (comment) => ({ comment }));
const deleteCmt = createAction(DELETE_CMT, (cId) => ({ cId }));
const editCmt = createAction(EDIT_CMT, (cId, comment) => ({
  cId,
  comment,
}));

//initialState
const initialState = {
  comments: [],
};

const initialComment = {
  cId: 1,
  pId: 1,
  mId: 1,
  content: "내용",
  writer: "작성자",
  status: true,
  createdAt: "2021-07-09T17:35:00",
  modifiedAt: "2021-07-09T17:35:00",
  countReply: 3,
};

// thunk
// 전체 댓글 조회
const setCommentDB = (pId) => {
  async (dispatch, getState, { history }) => {
    await api
      .get(`/api/comment/${pId}`)
      .then((res) => {
        let comment_list = res.data.comment;
        dispatch(setCmt(comment_list));
      })
      .catch((err) => {
        window.alert("댓글을 불로오는데 실패했어요!");
        console.log(err);
      });
  };
};

// 댓글 생성
const addCommentDB = (comment) => {
  async (dispatch, getState, { history }) => {
    await api
      .post(`/api/comment/${pId}`, comment)
      .then((res) => {
        console.log(res);
        window.alert("댓글 작성 완료!");
        dispatch(addCmt(comment));
      })
      .catch((err) => {
        window.alert("댓글 작성에 실패했어요!");
        console.log(err);
      });
  };
};

// 댓글 삭제
const deleteCmtDB = (cId) => {
  async (dispatch, getState, { history }) => {
    await api
      .delete(`/api/comment/${cId}`)
      .then((res) => {
        console.log(res);
        window.alert("댓글이 삭제되었어요!");
        dispatch(deleteCmt(cId));
      })
      .catch((err) => {
        window.alert("댓글 삭제가 오류가 생겼어요!");
        console.log(err);
      });
  };
};

// 수정 필요
// 댓글 수정
const editCmtDB = (cId, comment) => {
  async (dispatch, getState, { history }) => {
    await api
      .put(`/api/comment/${cId}`, comment)
      .then((res) => {
        dispatch(editCmt(id, res.comment));
      })
      .catch((err) => {
        window.alert("댓글 수정에 오류가 있어요!");
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_CMT]: (state, aciton) =>
      produce(state, (draft) => {
        draft.comments = action.payload.comment_list;
      }),
    [ADD_CMT]: (state, aciton) =>
      produce(state, (draft) => {
        draft.comments.unshift(action.payload.comment_list);
      }),
    [DELETE_CMT]: (state, action) =>
      produce(state, (draft) => {
        const id = action.payload.cId;
        draft.commnets = draft.comments.filter((c) => {
          return c.id !== id;
        });
      }),
    [EDIT_CMT]: (state, aciton) =>
      produce(state, (draft) => {
        let idx = draft.comments.findIndex((c) => c.id === aciton.payload.cId);
        draft.comments[idx] = {
          ...aciton.payload.comment,
        };
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  addCmt,
  setCmt,
  editCmt,
  deleteCmt,
  addCommentDB,
  setCommentDB,
  deleteCmtDB,
  editCmtDB,
};

export { actionCreators };