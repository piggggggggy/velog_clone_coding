import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/post";


import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
import SharedHeader from "../shared/SharedHeader";
import NameCard from "../components/NameCard";


const Detail = (props) => {
  const postId = props.match.params.postId;
  const dispatch = useDispatch();
  // const detailPost = useSelector((state) => state.post.main_list);
  // const comment_list = useSelector((state) => state.post.comments);
  const user = useSelector((state) => state.post.user);
  
  useEffect(() => {
    dispatch(postActions.detailPostDB(postId));
    // dispatch(commentActions.setCommentDB(postId));
  }, []);

  return (
    <React.Fragment>
      <SharedHeader />
      <DetailBody/>
      <NameCard {...user}/>
      <CommentBody postId={postId}/>
    </React.Fragment>
  );
};

export default Detail;
