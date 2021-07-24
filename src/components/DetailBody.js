import React, { useEffect } from "react";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const DetailBody = (props) => {
  // const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const user = useSelector((state) => state.post.user);
  // useEffect(() => {
  //   dispatch(postActions.detailPostDB(postId));
  // }, []);
  if (post === null) {
    return <div>loading</div>;
  }

  // const date = props.createdAt.split('-');
  // const day = date[2].split('T');
  // const _date = () => {
  //   return(
  //     date[0] + "년 " + date[1] + "월 " + day[0] + "일"
  //   )
  // }

  return (
    <React.Fragment>
      <HeaderContainer>
        <div>
          <h1>{post.title}</h1>
          <BtnBox>
            <button>수정</button>
            <button style={{marginLeft: "0.5rem"}}>삭제</button>
          </BtnBox>
          <UserNDate>
            <div>
              <span style={{color: "#343a40", fontWeight: "bold"}}>{user.nickName}</span>
              <span style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}>·</span>
              <span>{props.createdAt}</span>
            </div>  
          </UserNDate>
          <TagBar>
              {post.tagResponseDtoList.map((t, idx) => {
                return (
                  <Tag key={idx}>{t.tagName}</Tag>
                )
              })}
          </TagBar>
          <div style={{position: "relative", marginTop: "2rem"}}></div>
          <Ssumnale src={`"${post.imgUrl}"`}/>
        </div>
      </HeaderContainer>
      <BodyContainer>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
        </div>
      </BodyContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  margin-top: 5.5rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: #212529;

  & > div {
    
    & > h1 {
      font-size: 3rem;
      line-height: 1.5;
      letter-spacing: -0.004em;
      margin-top: 0px;
      font-weight: 800;
      color: rgb(52, 58, 64);
      margin-bottom: 2rem;
      word-break: keep-all;
    }
  }
`;

const BtnBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-bottom: -1.25rem;
  color: #212529;

  & > button {
    padding: 0px;
    outline: none;
    border: none;
    background: none;
    font-size: inherit;
    cursor: pointer;
    color: #868e96;
  }
`;

const UserNDate = styled.div`
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;

  & > div {
    font-size: 1rem;
    color: #495057;

    & > span {
      font-size: 1rem;
      color: #495057;
    }
  }
`;

const TagBar = styled.div`
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const Ssumnale = styled.img`
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
`;

const Tag = styled.div`
  margin-bottom: 0.875rem;
  background: #f1f3f5;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  border-radius: 1rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: #0ca678;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
`;

const BodyContainer = styled.div`
  width: 768px;
  margin: 5rem auto 0px;

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
    }
  }
`;

// const DetailContainer = styled.div`
//   width: 100%;
//   height: auto;
//   box-sizing: inherit;
// `;

// const HeadContainer = styled.div`
//   width: 60%;
//   margin: 2rem auto;
// `;
// const HeaderImage = styled.img`
//   max-height: 100vh;
//   max-width: 100%;
//   width: auto;
//   height: auto;
//   margin: 2rem auto 0px;
//   object-fit: contain;
//   display: block;
// `;
// const Title = styled.h1`
//   font-size: 4rem;
//   line-height: 1.5;
//   letter-spacing: -0.004em;
//   font-weight: 800;
//   margin-bottom: 2rem;
//   word-break: keep-all;
// `;

// const DetailInfo = styled.div`
//   display: flex;
//   -webkit-box-align: center;
//   color: rgb(73, 80, 87);
//   align-items: center;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
// `;

// const UserInfo = styled.div`
//   display: flex;
//   color: rgb(73, 80, 87);
//   -webkit-box-align: center;
//   align-items: center;
//   font-size: 1.3rem;
//   flex-flow: row nowrap;
//   & > span {
//     padding: 4px;
//     & > a {
//       text-decoration: none;
//       color: rgb(73, 80, 87);
//       font-weight: 800;
//     }
//   }
// `;

// const LikeInfo = styled.div`
//   display: none;
//   @media only screen and (max-width: 1200px) {
//     align-items: center;
//     display: flex;
//     & > button {
//       display: flex;
//       background-color: white;
//       border: 1px solid rgb(173, 181, 189);
//       padding-left: 1rem;
//       padding-right: 1rem;
//       align-items: center;
//       height: 2.5rem;
//       border-radius: 2rem;
//       outline: none;
//       cursor: pointer;
//       & > svg {
//         width: 24px;
//         height: 24px;
//         & > path {
//           fill: rgb(173, 181, 189);
//         }
//       }
//       & > span {
//         font-size: 1.3rem;
//         font-weight: 600;
//         color: rgb(173, 181, 189);
//         padding: 1rem;
//       }
//     }
//   }
// `;

// const TagBox = styled.div`
//   margin-top: 1.5rem;
// `;

// const Tag = styled.a`
//   margin-bottom: 1rem;
//   background-color: rgb(241, 243, 245);
//   padding-left: 2rem;
//   padding-right: 2rem;
//   height: 3rem;
//   border-radius: 2rem;
//   display: inline-flex;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-right: 1rem;
//   color: rgb(12, 166, 120);
//   font-size: 1.5rem;
//   font-weight: 500;
// `;

// const ListBox = styled.div`
//   margin-top: 2rem;
//   padding: 2rem 1.5rem;
//   background-color: rgb(248, 249, 250);
//   border-radius: 8px;
//   box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
//   position: relative;
//   & > h2 {
//     font-weight: 800;
//     font-size: 2rem;
//     padding-right: 2rem;
//   }
//   & > svg {
//     position: absolute;
//     top: 0;
//     right: 1.5rem;
//     width: 32px;
//     height: 48px;
//     fill: none;
//   }
// `;
// const PostBox = styled.div`
//   padding-right: 1rem;
//   padding-left: 1rem;
//   width: 59%;
//   margin: 5rem auto 0px;
// `;

// const Contents = styled.div`
//   font-size: 1.125rem;
//   color: black;
//   line-height: 1.7;
//   letter-spacing: -0.004em;
//   word-break: keep-all;
//   overflow-wrap: break-word;
// `;
export default DetailBody;
