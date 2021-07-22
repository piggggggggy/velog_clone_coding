import { black } from "chalk";
import React from "react";
import styled from "styled-components";

const MainCard = (props) => {
  // return (
  //   <React.Fragment>
  //     <CardWrap>
  //       <img src="https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_960_720.jpg" />
  //       <CardInfo>
  //         <ContentsBox>
  //           <h4>프론트엔드 면접 문제 2탄 ⭐️</h4>
  //           <p>
  //             지난번엔 HTML편이었는데 이번엔 CSS 관련 문제들로 정리해봤습니다.
  //             오늘도 프론트엔드 화이팅!
  //           </p>
  //           <SubInfo>
  //             <span>2021년 7월 9일</span>
  //             <span>·</span>
  //             <span>0개의 댓글</span>
  //           </SubInfo>
  //         </ContentsBox>
  //         <UserInfoBox>
  //           {/* 유저 정보 div */}
  //           <div>
  //             <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg" />

  //             <p>by</p>
  //             <p style={{ fontWeight: 800 }}>JongVeloper</p>
  //           </div>
  //           {/* 유저 정보 div */}
  //           <div>
  //             <LikeInfo>
  //               <svg width="24" height="24" viewBox="0 0 24 24">
  //                 <path
  //                   fill="currentColor"
  //                   d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
  //                 ></path>
  //               </svg>{" "}
  //               <p>60</p>
  //             </LikeInfo>
  //           </div>
  //         </UserInfoBox>
  //       </CardInfo>
  //     </CardWrap>
  //   </React.Fragment>
  // );

  return (
    <Card>
      <a>
        <div>
          <img src="https://media.vlpt.us/images/dongyi/post/b3aea738-d3bd-447b-a22d-4652e13eba7d/0712_코딩몬스터tv---인터뷰-썸네일 (2).jpg?w=640"></img>
        </div>
      </a>
      <ContentPart>
        <a>
          <h4>스타트업 4년차에 억대연봉 개발자가 된 야간대 졸업생</h4>
          <div>
            <p>4년차에 억대 연봉을 달성한 스타트업 개발자 삼촌님에게 듣는 현실적인 자기성장 조언</p>
          </div>
        </a>
        <div>
          <span>2021년 7월 14일</span>
          <span style={{marginLeft: "0.25rem", marginRight: "0.25rem"}}>·</span>
          <span>0개의 댓글</span>
        </div>
      </ContentPart>
      <CardFooter>
        <a>
          <img src="https://media.vlpt.us/images/dongyi/profile/1d42f7e3-42c3-4b65-8c64-e6169c437565/cm-fb-profile.png?w=120"></img>
          <span>
            by  
            <b> 진태</b>
          </span>
        </a>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
          </svg>
          999
        </div>
      </CardFooter>

    </Card>
  )
};

const Card = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #212529;

  & > a {
    display: block;
    color: inherit;
    text-decoration: none;

    & > div {
      width: 100%;
      position: relative;
      padding-top: 52.19206680584551%;
      color: inherit;

      & > img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        color: inherit;
      }
    }
  }
`;

const ContentPart = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  color: #212529;

  & > a {
    display: block;
    color: inherit;
    text-decoration: none;

    & > h4 {
      font-size: 1rem;
      margin: 0px 0px 0.25rem;
      line-height: 1.5;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #212529;
    }

    & > div {
      flex: 1 1 0%;
      color: inherit;

      & > p {
        margin: 0px 0px 1.5rem;
        word-break: break-word;
        overflow-wrap: break-word;
        font-size: 0.875rem;
        line-height: 1.5;
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #495057;
      }
    }
  }

  & > div {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #868e96;

    & > span {
      font-size: 0.75rem;
      line-height: 1.5;
      color: #868e96;
    }
  }
`;

const CardFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid rgb(248, 249, 250);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(33, 37, 41);

  & > a {
    text-decoration: none;
    color: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.5;

    & > img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
      color: inherit;
      font-size: 0.75rem;
      line-height: 1.5;
    }

    & > span {
      color: #868e96;
      font-size: 0.75rem;
      line-height: 1.5;

      & > b {
        color: #343a40;
        font-size: 0.75rem;
        line-height: 1.5;
        font-weight: bold;
      }
    }
  }

  & > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.5;
    color: #212529;

    & > svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
      font-size: 0.75rem;
      line-height: 1.5;
      color: #212529;

      & > path {
        font-size: 0.75rem;
        line-height: 1.5;
        color: #212529;
      }
    }
  }
`;


// const CardWrap = styled.div`
//   margin: 1%;
//   width: 37rem;
//   height: 100%;
//   box-sizing: border-box;
//   border-radius: 10px;
//   background-color: white;
//   & > img {
//     width: 100%;
//     height: 30%;
//     border-top-right-radius: 15px;
//     border-top-left-radius: 15px;
//   }
// `;
// const CardInfo = styled.div`
//   width: 100%;
//   padding: 0%;
// `;

// const ContentsBox = styled.div`
//   width: 100%;
//   & > h4 {
//     font-size: 25px;
//     font-weight: 730;
//     padding: 4%;
//   }
//   & > p {
//     font-size: 20px;
//     line-height: 30px;
//     margin-bottom: 12%;
//     padding: 0 4%;
//   }
// `;

// const SubInfo = styled.div`
//   font-size: 18px;
//   padding: 4%;
//   & > span {
//     margin-right: 4px;
//   }
// `;

// const UserInfoBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   border-top: 1px solid rgb(248, 249, 250);
//   padding: 5%;
//   -webkit-box-pack: justify;
//   justify-content: space-between;

//   & > div {
//     & > img {
//       width: 1.5rem;
//       height: 1.5rem;
//       border-radius: 50%;
//       object-fit: cover;
//       display: block;
//     }
//   }

//   & > p {
//     display: flex;
//     flex-direction: row;
//     padding-left: 10px;
//     font-size: 18px;
//     line-height: 1.5;
//   }
//   & > div {
//     display: flex;
//     flex-direction: row;
//     padding-left: 10px;
//     font-size: 18px;
//     line-height: 1.5;

//     /* UserInfoBox p태그 */
//     & > p {
//       padding-right: 6px;
//     }
//   }
// `;

// const LikeInfo = styled.div`
//   display: flex;
//   flex-direction: row;
//   & > p {
//     margin: 0 6px;
//   }
// `;
export default MainCard;
