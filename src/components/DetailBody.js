import React from "react";
import styled from "styled-components";

const DetailBody = (props) => {
  return (
    <React.Fragment>
      <DetailContainer>
        <HeadContainer>
          <Title>프론트엔드 면접 문제 2탄⭐️</Title>
          <DetailInfo>
            <UserInfo>
              <span>
                <a href="">JongVeloper</a>
              </span>
              <span>·</span>
              <span>2021년 7월 18일</span>
            </UserInfo>
            <LikeInfo>
              <button>
                <svg viewBox="0 0 24 24">
                  <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                </svg>
                <span>77</span>
              </button>
            </LikeInfo>
          </DetailInfo>
          <TagBox>
            <Tag>CSS</Tag>
            <Tag>면접</Tag>
          </TagBox>
          <ListBox>
            <h2>FE-Interview</h2>
            <svg viewBox="0 0 32 48">
              <path
                fill="#12B886"
                d="M32 0H0v48h.163l16-16L32 47.836V0z"
              ></path>
            </svg>
          </ListBox>
          <HeaderImage src="https://media.vlpt.us/images/cjy0029/post/75a71df9-605b-4e6b-94ca-e9a7310edacc/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png" />
        </HeadContainer>
        <PostBox>
          <Contents>
            {/* 추후 수정 */}
            <div>
              📌 프론트엔드 면접 문제은행 ⬆ 링크를 참조해서 답변을
              준비해봤습니다(순서는 무작위입니다😅) 작성한 답변들은 정답이 아닐
              수 있으니 틀린 부분있다면 피드백 주시면 너무 감사하겠습니다!
              오늘도 프론트엔드 화이팅..!
            </div>
            {/* 추후 수정 */}
          </Contents>
        </PostBox>
      </DetailContainer>
    </React.Fragment>
  );
};

const DetailContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: inherit;
`;

const HeadContainer = styled.div`
  width: 60%;
  margin: 2rem auto;
`;
const HeaderImage = styled.img`
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  height: auto;
  margin: 2rem auto 0px;
  object-fit: contain;
  display: block;
`;
const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  font-weight: 800;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const DetailInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  color: rgb(73, 80, 87);
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  color: rgb(73, 80, 87);
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.3rem;
  flex-flow: row nowrap;
  & > span {
    padding: 4px;
    & > a {
      text-decoration: none;
      color: rgb(73, 80, 87);
      font-weight: 800;
    }
  }
`;

const LikeInfo = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    align-items: center;
    display: flex;
    & > button {
      display: flex;
      background-color: white;
      border: 1px solid rgb(173, 181, 189);
      padding-left: 1rem;
      padding-right: 1rem;
      align-items: center;
      height: 2.5rem;
      border-radius: 2rem;
      outline: none;
      cursor: pointer;
      & > svg {
        width: 24px;
        height: 24px;
        & > path {
          fill: rgb(173, 181, 189);
        }
      }
      & > span {
        font-size: 1.3rem;
        font-weight: 600;
        color: rgb(173, 181, 189);
        padding: 1rem;
      }
    }
  }
`;

const TagBox = styled.div`
  margin-top: 1.5rem;
`;

const Tag = styled.a`
  margin-bottom: 1rem;
  background-color: rgb(241, 243, 245);
  padding-left: 2rem;
  padding-right: 2rem;
  height: 3rem;
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1rem;
  color: rgb(12, 166, 120);
  font-size: 1.5rem;
  font-weight: 500;
`;

const ListBox = styled.div`
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  position: relative;
  & > h2 {
    font-weight: 800;
    font-size: 2rem;
    padding-right: 2rem;
  }
  & > svg {
    position: absolute;
    top: 0;
    right: 1.5rem;
    width: 32px;
    height: 48px;
    fill: none;
  }
`;
const PostBox = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  width: 59%;
  margin: 5rem auto 0px;
`;

const Contents = styled.div`
  font-size: 1.125rem;
  color: black;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
export default DetailBody;
