import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAcitons } from "../redux/modules/post";

const Comment = (props) => {
  const dispatch = useDispatch();
  
  if(!props.commentUserResponseDto) {
    return (
      <div>기다려...</div>
    )
  }
  // console.log(props);


  // return null;  
  const memberId = localStorage.getItem('memberId');
  
  const is_me = memberId == props.commentUserResponseDto.memberId;
  console.log(is_me);
  const commentId = props.commentId;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(commentAcitons.setCommentDB(postId));
  // }, []);

  const deleteComment = () => {
    dispatch(commentAcitons.deleteCmtDB(commentId));
  };


  const date = props.createdAt.split('-');
  const day = date[2].split('T');
  const _date = () => {
    return(
      date[0] + "년 " + date[1] + "월 " + day[0] + "일"
    )
  }
  // const editComment = () => {
  //   dispatch(commentAcitons.editCmtDB(commentId, comment));
  // };
  return (
    <React.Fragment>
      <CommentsContainer>
        <CommentHeader>
          <UserInfo>

            <a>
              <img src={props.commentUserResponseDto.profileImg ? props.commentUserResponseDto.profileImg : "https://media.vlpt.us/images/jjunyjjuny/profile/c154920b-b1a4-45e8-9eb1-f0fafb75957c/social.png?w=120"}></img>
            </a>
            <div>
              <UserName>
                <a>{props.commentUserResponseDto.nickName}</a>
              </UserName>
              <Date>{_date()}</Date>
            </div>

          </UserInfo>
          {is_me?
          <BtnBox>
            <span>수정</span>
            <span onClick={deleteComment} style={{marginLeft: "0.5rem"}}>삭제</span>
          </BtnBox> : null}
        </CommentHeader>
        <CommentBody>
          <div>
            <div>
              <div>
                <p>
                  {props.content}
                </p>
              </div>
            </div>
          </div>
        </CommentBody>
      </CommentsContainer>
    </React.Fragment>
  );
};

// Comment.defaultProps = {
//   memberId: 1,
//   nickName: "가짜",
//   createdAt: "2021-07-22",
//   content: "할수있다................할수있다....................할수있다............."
// };

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
