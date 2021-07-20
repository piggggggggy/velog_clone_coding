import React from "react";
import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
import Comment from "../components/Comment";
import SharedHeader from "../shared/SharedHeader";

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
