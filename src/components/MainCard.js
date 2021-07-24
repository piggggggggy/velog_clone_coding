import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

const MainCard = (props) => {

  const date = props.createdAt.split('-');
  const day = date[2].split('T');
  const _date = () => {
    return(
      date[0] + "년 " + date[1] + "월 " + day[0] + "일"
    )
  }

  return (
    <Card onClick={()=>{history.push(`/posting/detail/${props.postId}`)}}>
      <a>
        <div>
          <img src={`"${props.imgUrl}"`}></img>
        </div>
      </a>
      <ContentPart>
        <a>
          <h4>{props.title}</h4>
          <div>
            <p>{props.previewText}</p>
          </div>
        </a>
        <div>
          <span>{_date()}</span>
          <span style={{marginLeft: "0.25rem", marginRight: "0.25rem"}}>·</span>
          {/* <span>개의 댓글</span> */}
        </div>
      </ContentPart>
      <CardFooter>
        <a>
          <img src="https://media.vlpt.us/images/jjunyjjuny/profile/c154920b-b1a4-45e8-9eb1-f0fafb75957c/social.png?w=120"></img>
          <span>
            by  
            <b> {props.postingMemberResponseDto.nickName}</b>
          </span>
        </a>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
          </svg>
          {props.likeCount}
        </div>
      </CardFooter>

    </Card>
  )
};

MainCard.defaultProps = {
  postId: 1,
  title: "테스트 테스트",
  likeCount: 0,
  previewText: "테스트... 제발 잘되길..",
  imgUrl: "https://media.vlpt.us/images/dongyi/post/b3aea738-d3bd-447b-a22d-4652e13eba7d/0712_코딩몬스터tv---인터뷰-썸네일 (2).jpg?w=640",
  createAt: "2021-07-22T09:44:11"
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
  &:hover {
    transform: translateY(-12px);
    box-shadow: rgb(0 0 0 / 20%) 0px 4px 16px 0px;
  }

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
