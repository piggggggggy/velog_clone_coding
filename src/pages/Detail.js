import React from "react";
import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
const Detail = (props) => {
  return (
    <React.Fragment>
      <DetailBody />
      <CommentBody/>
    </React.Fragment>
  );
};

export default Detail;
