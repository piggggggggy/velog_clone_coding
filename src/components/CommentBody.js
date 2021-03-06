import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

// modules
import { actionCreators as commentActions } from "../redux/modules/post";

// components
import Comment from "./Comment";

const CommentBody = (props) => {

  const comment_list= useSelector((state) => state.post.comment);

  const memberId = localStorage.getItem("memberId");
  const postId = props.postId;
  const dispatch = useDispatch();

  const [comment, setComment] = useState();

  if (!comment_list) {
    return (<div>기다려..</div>)
  }

  
  const changeComment = (e) => {
    setComment(e.target.value);
  };


  const registComment = (e) => {
    const cmt = {
      content: comment,
      memberId: parseInt(memberId),
      status: true,
    };

    dispatch(commentActions.addCommentDB(postId, cmt));
    history.replace(`/posting/detail/${postId}`);

  };

  return (
    <React.Fragment>

        <ContentsContainer>
          <h4>{comment_list.length}개의 댓글</h4>
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

export default CommentBody;
