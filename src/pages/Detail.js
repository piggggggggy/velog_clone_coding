import React, { useEffect } from "react";
import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
import Comment from "../components/Comment";
import SharedHeader from "../shared/SharedHeader";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Detail = (props) => {
  const postId = props.match.params.postId;
  console.log(postId);
  const dispatch = useDispatch();
  const detailPost = useSelector((state) => state.post.main_list);
  const { writer } = detailPost;
  useEffect(() => {
    dispatch(postActions.detailPostDB(postId));
  }, []);
  return (
    <React.Fragment>
      <SharedHeader />
      <DetailBody />
      <CommentBody postId={postId} />
      <Comment postId={postId} />
    </React.Fragment>
  );
};

export default Detail;
