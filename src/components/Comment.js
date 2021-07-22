import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAcitons } from "../redux/modules/comment";
import moment from "moment";
const Comment = (props) => {
  const comments = useSelector((state) => state.comment.comment);
  const {
    postId,
    nickName,
    comment,
    memberId,
    createdAt,
    modfiedAt,
    commentId,
  } = props;
  console.log(comments);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(commentAcitons.setCommentDB(postId));
  // }, []);

  const deleteComment = () => {
    dispatch(commentAcitons.deleteCmtDB(commentId));
  };

  const editComment = () => {
    dispatch(commentAcitons.editCmtDB(commentId, comment));
  };
  return (
    <React.Fragment>
      <CommentsContainer>
        <CommentContetsBox>
          <CommentBox>
            <CommentUser>
              <a href="">
                <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg" />
              </a>
              <CommentUserInfo>
                <UserNameBox>
                  <a href="">{nickName}</a>
                </UserNameBox>
                <div>
                  {modfiedAt !== createdAt
                    ? moment(modfiedAt).format("YYYY년 MM월 DD일")
                    : moment(createdAt).format("YYYY년 MM월 DD일")}
                </div>
              </CommentUserInfo>
            </CommentUser>
            {nickName === memberId && (
              <div class="buttons">
                <span onClick={editComment}>수정</span>
                <span onClick={deleteComment}>삭제</span>
              </div>
            )}
          </CommentBox>
          <ContentsDesc>
            <p>{comment}</p>
            <ReplyBox>
              <div>
                <svg viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M5.5 2.5h1v3h3v1h-3v3h-1v-3h-3v-1h3v-3z"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm10 1H1v10h10V1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>0개의 답글</span>
              </div>
            </ReplyBox>
          </ContentsDesc>
        </CommentContetsBox>
      </CommentsContainer>
    </React.Fragment>
  );
};

const CommentsContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: inherit;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const CommentContetsBox = styled.div`
  width: 59%;
  margin: auto;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  & > .buttons {
    & > span {
      cursor: pointer;
      margin-right: 1rem;
    }
  }
`;

const CommentUser = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  & > a {
    cursor: pointer;
    & > img {
      width: 3.375rem;
      height: 3.375rem;
      display: block;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
const CommentUserInfo = styled.div`
  margin-left: 1rem;
  line-height: 1;
  & div {
    margin-top: 0.5rem;
    color: rgb(134, 142, 150);
    font-size: 1rem;
  }
`;
const UserNameBox = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  & > a {
    text-decoration: none;
    color: black;
  }
`;
const ContentsDesc = styled.div`
  font-size: 1.4rem;
  margin: 2.4em auto;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
const ReplyBox = styled.div`
  margin: 2rem auto auto auto;
  & > div {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(18, 184, 134);
    font-weight: bold;
    cursor: pointer;
    & > svg {
      width: 20px;
      height: 20px;
      fill: none;
      margin-right: 0.5rem;
    }
    & > span {
      margin-top: 0.2rem;
    }
  }
`;

export default Comment;
