import React from "react";
import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
import Comment from "../components/Comment";
const Detail = (props) => {
  return (
    <React.Fragment>
      <DetailBody />
      <CommentBody/>
      <Comment/>
    </React.Fragment>
  );
};

export default Detail;
