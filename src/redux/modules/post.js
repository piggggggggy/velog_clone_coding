import { createAction, handleActons } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/api";

// actions
const SET_POST = "post/SET_POST";
const ADD_POST = "post/ADD_POST";
const EDIT_POST = "post/EDIT_POST";
const DELETE_POST = "post/DELETE_POST";
const DETAIL_POST = "post/DETIL_POST";

// action creators

const setPost = createAction(SET_POST, (post_list) => ({
  post_list,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (pId, post) => ({
  pId,
  post,
}));
const deletePost = createAction(DELETE_POST, (pId) => ({ pId }));
const detailPost = createAction(DETAIL_POST, (post, pId));

//initialState
const initialState = {
  list: [],
};

// default data
const initialPost = {
  pId: 1,
  title: "제목",
  writer: "작성자1",
  content: "내용",
  createdAt: "2021-07-09T17:35:00",
  modifiedAt: "2021-07-09T17:35:00",
  countReply: 3,
};

// 게시물 생성
const addPostDB = (post) => {
  async (dispatch, getState, { history }) => {
    await api
      .post("/api/posting/write", {
        title: post.title,
        content: post.content,
        originalFileName: post.originalFileName,
        tag: post.tag,
      })
      .then((res) => {
        console.log(res);
        window.alert("포스팅 완료!");
        dispatch(addPost(post));
        history.push("/posting");
      })
      .catch((err) => {
        window.alert("포스팅에 실패하였어요!");
        console.log(err);
      });
  };
};

// 전체 게시물 조회
const setPostDB = () => {
  async (dispatch, getState, { history }) => {
    await api
      .get("/api/recent")
      .then((res) => {
        //   수정 필요함
        let post_list = res.data.post;
        dispatch(setPost(post_list));
        //   수정 필요함
      })
      .catch((err) => {
        window.alert("페이지에 오류가 있습니다!");
        console.log(err);
      });
  };
};

// 게시물 삭제
const deletePostDB = (pId) => {
  async (dspatch, getState, { history }) => {
    await api
      .delete(`/api/posting/${pId}`)
      .then((res) => {
        console.log(res);
        window.alert("포스팅이 삭제되었어요!");
        dispatch(deletePost(pId));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("포스팅 삭제에 오류가 생겼어요!");
        console.log(err);
      });
  };
};

// 게시물 수정
const editPostDB = (pId = null, edit = {}) => {
  async (dispatch, getState, { history }) => {
    await api
      .put(`/api/posting/${pId}`, {
        title: edit.title,
        content: edit.content,
        tag: edit.tag,
        renameFileName: edit.renameFileName,
      })
      .then((res) => {
        console.log(res);
        dispatch(editPost(pId, edit));
        window.alert("수정이 완료되었어요!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("리뷰 수정에 오류가 있어요!");
        console.log(err);
      });
  };
};

// 상세 게시물 조회
const detailPostDB = (pId = "") => {
  async (dispatch, getState, { history }) => {
    await api.get(`/api/posting/detail/${pId}`).then((res) => {
      console.log(res);

      let post = res.data;
      dispatch(detailPost(post));
    });
  };
};

// reducer
export default handleActons(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.new_post);
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        if (p.pId !== action.payload.pId) {
          return p;
        }
        return { list: del_list };
      }),
    [DETAIL_POST]: (state, aciton) =>
      produce(state, (draft) => {
        // 수정 필요함
        draft.post = action.payload.pId;
        // 수정 필요함
      }),
    [EDIT_POST]: (state, aciton) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.pId === action.payload.pId);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.new_post };
      }),
  },
  initialState
);

export const actionCreator = {
  addPost,
  setPost,
  editPost,
  deletePost,
  detailPost,
  addPostDB,
  setPostDB,
  editPostDB,
  deletePostDB,
  detailPostDB,
};