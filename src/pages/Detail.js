import React from "react";
import DetailBody from "../components/DetailBody";
import CommentBody from "../components/CommentBody";
import Comment from "../components/Comment";
import SharedHeader from "../shared/SharedHeader";

const Detail = (props) => {
  const pId = props.match.params.pId
  console.log(props)
  return (
    <React.Fragment>
      <SharedHeader/>
      <DetailBody />
      <CommentBody pId={pId} />
      <Comment pId={pId}/>
    </React.Fragment>
  );
};

export default Detail;
