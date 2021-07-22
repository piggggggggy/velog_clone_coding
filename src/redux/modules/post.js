import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/api";

// actions
const SET_POST = "post/SET_POST";
const ADD_POST = "post/ADD_POST";
const EDIT_POST = "post/EDIT_POST";
const DELETE_POST = "post/DELETE_POST";
const DETAIL_POST = "post/DETIL_POST";

// action creators

const setPost = createAction(SET_POST, (post_list, tag_list, member_info) => ({
  post_list,
  tag_list,
  member_info,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (postId, post) => ({ postId, post }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const detailPost = createAction(DETAIL_POST, (postId) => ({ postId }));

//initialState
const initialState = {
  // main_list: [],
  list: [],
  tags: [],
  user: {},
  post: null,
  comment: null,
};

// default data
const initialPost = {
  postId: 1,
  title: "제목",
  writer: "작성자1",
  content: "내용",
  createdAt: "2021-07-09T17:35:00",
  modifiedAt: "2021-07-09T17:35:00",
  countReply: 3,
};

// 게시물 생성
const addPostDB =
  (post) =>
  async (dispatch, getState, { history }) => {
    await api
      .post("/api/posting/write", {
        title: post.title,
        content: post.content,
        memberId: post.memberId,
        likeCount: post.likeCount,
        contentMd: post.contentMd,
        previewText: post.previewText,
        originalFileName: post.originalFileName,
        tagList: post.tagList,
      })
      .then((res) => {
        console.log(res);
        window.alert("포스팅 완료!");
        dispatch(addPost(post));
        history.push(`/posting/${post.memberId}`);
      })
      .catch((err) => {
        window.alert("포스팅에 실패하였어요!");
        console.log(err);
      });
  };

// 전체 게시물 조회

const setPostDB =
  (memberId) =>
  async (dispatch, getState, { history }) => {
    await api
      .get(`/api/posting/${memberId}`)
      .then((res) => {
        console.log(res);
        //   수정 필요함
        let post_list = res.data.postingResponseDto;
        let tag_list = res.data.tagList;
        let member_info = res.data.memberResponseDto;

        dispatch(setPost(post_list, tag_list, member_info));
        //   수정 필요함
      })
      .catch((err) => {
        window.alert("페이지에 오류가 있습니다!");
        console.log(err);
      });
  };

// 게시물 삭제
const deletePostDB =
  (postId) =>
  async (dispatch, getState, { history }) => {
    await api
      .delete(`/api/posting/${postId}`)
      .then((res) => {
        console.log(res);
        window.alert("포스팅이 삭제되었어요!");
        dispatch(deletePost(postId));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("포스팅 삭제에 오류가 생겼어요!");
        console.log(err);
      });
  };

// 게시물 수정
const editPostDB =
  (postId = null, edit = {}) =>
  async (dispatch, getState, { history }) => {
    await api
      .put(`/api/posting/${postId}`, {
        title: edit.title,
        content: edit.contentsHtml,
        memberId: edit.memberId,
        contentMd: edit.contentsMd,
        previewText: edit.postIntro,
        originalFileName: edit.originalFileName,
        tagList: edit.tagList,
      })
      .then((res) => {
        console.log(res);
        dispatch(editPost(postId, edit));
        window.alert("수정이 완료되었어요!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("리뷰 수정에 오류가 있어요!");
        console.log(err);
      });
  };

// 상세 게시물 조회
const detailPostDB =
  (postId = "") =>
  async (dispatch, getState, { history }) => {
    await api.get(`/api/posting/detail/${postId}`).then((res) => {
      console.log(res);
      let post = res.data;
      dispatch(detailPost(post));
    });
  };

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        draft.tags = action.payload.tag_list;
        draft.user = action.payload.member_info;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.new_post);
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const del_list = draft.list.filter((p, idx) => {
          if (p.postId !== action.payload.postId) {
            return p;
          }
        });
        return { list: del_list };
      }),

    [DETAIL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.postId;
        draft.comment = action.payload.postId;
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.postId === action.payload.postId
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.new_post };
      }),
  },
  initialState
);

export const actionCreators = {
  // addPost,
  // setPost,
  // editPost,
  // deletePost,
  // detailPost,
  addPostDB,
  setPostDB,
  editPostDB,
  deletePostDB,
  detailPostDB,
};
