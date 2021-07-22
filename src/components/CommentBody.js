import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

import Comment from "./Comment";

const CommentBody = (props) => {

  const comment_list= useSelector((state) => state.comment.comments);

  const memberId = localStorage.getItem("memberId");
  const postId = props.postId;
  const dispatch = useDispatch();

  const [comment, setComment] = useState();

  React.useEffect(() => {
    if(comment_list.length !== 0){
      dispatch(commentActions.setCommentDB(postId));
    }
  },[])

  if (!comment_list) {
    return (<div>기다려..</div>)
  }

  
  const changeComment = (e) => {
    setComment(e.target.value);
  };


  const registComment = (e) => {
    const cmt = {
      // postId: parseInt(postId),
      // status: true,
      content: comment,
      memberId: parseInt(memberId),
    };
    console.log(cmt);
    dispatch(commentActions.addCommentDB(postId, cmt));
  };
  return (
    <React.Fragment>

        <ContentsContainer>
          {/* <h4>{comments.length}개의 댓글</h4>
          <CommentPostBox cols="30" rows="5" onChange={changeComment} />
          <CommentButtonBox>
            <button onClick={registComment}>댓글 작성</button>
          </CommentButtonBox> */}
          <h4>개의 댓글</h4>
          <InputBox>
            <textarea onChange={changeComment} placeholder="댓글을 작성하세요"></textarea>
            <div>
              <button onClick={registComment}>댓글 작성</button>
            </div>
          </InputBox>
          <CommentContainer>
            {comment_list.map((c, idx) => {
              return (
                <Comment key={idx} {...c}/>
              )
            })}
          </CommentContainer>
        </ContentsContainer>

    </React.Fragment>
  );
};



const ContentsContainer = styled.div`
  margin-top: 3rem;
  color: #343a40;
  width: 768px;
  margin-left: auto;
  margin-right: auto;

  & > h4 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #343a40;
  }

  & > div {
    color: #343a40;
  }
`;

const InputBox = styled.div`
  color: #343a40;

  & > textarea {
    height: 70px;
    resize: none;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid rgb(233, 236, 239);
    margin-bottom: 1.5rem;
    width: 100%;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: rgb(33, 37, 41);
    line-height: 1.75;
  }

  & > div {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    color: #343a40;

    & > button {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      background: rgb(18, 184, 134);
      color: white;
      border-radius: 4px;
      padding: 0px 1.25rem;
      height: 2rem;
      font-size: 1rem;
    }
  }
`;

const CommentContainer = styled.div`
  margin-top: 2.5rem;
  color: #343a40;

  & > div {
    color: #343a40;


  }
`;


// const CommentPostBox = styled.textarea`
//   width: 100%;
//   resize: none;
//   padding: 1rem 1rem 1.5rem;
//   outline: none;
//   border: 1px solid rgb(233, 236, 239);
//   margin-bottom: 1.5rem;
//   border-radius: 4px;
//   min-height: 7rem;
//   font-size: 1.5rem;
//   line-height: 1.75;
// `;

// const CommentButtonBox = styled.div`
//   display: flex;
//   -webkit-box-pack: end;
//   justify-content: flex-end;
//   & > button {
//     display: inline-flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     justify-content: center;
//     cursor: pointer;
//     font-weight: bold;
//     outline: none;
//     border: none;
//     background-color: rgb(18, 184, 134);
//     color: white;
//     border-radius: 4px;
//     padding: 0px 2rem;
//     height: 3rem;
//     font-size: 1.5rem;
//   }
// `;
export default CommentBody;
