import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAcitons } from "../redux/modules/comment";
import moment from "moment";

const Comment = (props) => {

 
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(commentAcitons.setCommentDB(postId));
  // }, []);

  // const deleteComment = () => {
  //   dispatch(commentAcitons.deleteCmtDB(commentId));
  // };

  // const editComment = () => {
  //   dispatch(commentAcitons.editCmtDB(commentId, comment));
  // };
  return (
    <React.Fragment>
      <CommentsContainer>
        <CommentHeader>
          <UserInfo>

            <a>
              <img src="https://media.vlpt.us/images/jjunyjjuny/profile/c154920b-b1a4-45e8-9eb1-f0fafb75957c/social.png?w=120"></img>
            </a>
            <div>
              <UserName>
                <a>닉네임</a>
              </UserName>
              <Date>일 전</Date>
            </div>

          </UserInfo>
          <BtnBox>
            <span>수정</span>
            <span style={{marginLeft: "0.5rem"}}>삭제</span>
          </BtnBox>
        </CommentHeader>
        <CommentBody>
          <div>
            <div>
              <div>
                <p>
                  내용
                </p>
              </div>
            </div>
          </div>
        </CommentBody>
        {/* <CommentContetsBox>
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
        </CommentContetsBox> */}
      </CommentsContainer>
    </React.Fragment>
  );
};

const CommentsContainer = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`;

const CommentHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  color: #343a40;
`;

const UserInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;color: #343a40;

  & > a {

    & > img {
      width: 3.375rem;
      height: 3.375rem;
      display: block;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  & > div {
    margin-left: 1rem;
    line-height: 1;
    color: #343a40;
  }
`;

const BtnBox = styled.div`
  font-size: 0.875rem;
  color: rgb(134, 142, 150);

  & > span {
    cursor: pointer;
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
  }
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(52, 58, 64);
  line-height: 1;

  & > a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1;
  }
`;

const Date = styled.div`
  margin-top: 0.5rem;
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  line-height: 1;
`;

const CommentBody = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;

  & > div {
    font-size: 1.125rem;
    color: rgb(34, 36, 38);
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;

    & > div {
      font-size: 1.125rem;
      color: rgb(34, 36, 38);
      line-height: 1.7;
      letter-spacing: -0.004em;
      word-break: keep-all;
      overflow-wrap: break-word;

      & > div {
        font-size: 1.125rem;
        color: rgb(34, 36, 38);
        line-height: 1.7;
        letter-spacing: -0.004em;
        word-break: keep-all;
        overflow-wrap: break-word;

        & > p {
          font-size: 1.125rem;
          color: rgb(34, 36, 38);
          line-height: 1.7;
          letter-spacing: -0.004em;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
      }
    }
  }
`;

// const CommentContetsBox = styled.div`
//   width: 59%;
//   margin: auto;
//   border-bottom: 1px solid rgb(233, 236, 239);
// `;

// const CommentBox = styled.div`
//   width: 100%;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;

//   & > .buttons {
//     & > span {
//       cursor: pointer;
//       margin-right: 1rem;
//     }
//   }
// `;

// const CommentUser = styled.div`
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   & > a {
//     cursor: pointer;
//     & > img {
//       width: 3.375rem;
//       height: 3.375rem;
//       display: block;
//       border-radius: 50%;
//       object-fit: cover;
//     }
//   }
// `;
// const CommentUserInfo = styled.div`
//   margin-left: 1rem;
//   line-height: 1;
//   & div {
//     margin-top: 0.5rem;
//     color: rgb(134, 142, 150);
//     font-size: 1rem;
//   }
// `;
// const UserNameBox = styled.div`
//   font-size: 1.3rem;
//   font-weight: bold;
//   & > a {
//     text-decoration: none;
//     color: black;
//   }
// `;
// const ContentsDesc = styled.div`
//   font-size: 1.4rem;
//   margin: 2.4em auto;
//   line-height: 1.7;
//   letter-spacing: -0.004em;
//   word-break: keep-all;
//   overflow-wrap: break-word;
// `;
// const ReplyBox = styled.div`
//   margin: 2rem auto auto auto;
//   & > div {
//     display: inline-flex;
//     -webkit-box-align: center;
//     align-items: center;
//     color: rgb(18, 184, 134);
//     font-weight: bold;
//     cursor: pointer;
//     & > svg {
//       width: 20px;
//       height: 20px;
//       fill: none;
//       margin-right: 0.5rem;
//     }
//     & > span {
//       margin-top: 0.2rem;
//     }
//   }
// `;

export default Comment;
