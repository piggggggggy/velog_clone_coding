import { black } from "chalk";
import React from "react";
import styled from "styled-components";

const MainCard = (props) => {
  return (
    <React.Fragment>
      <CardWrap>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_960_720.jpg" />
        <CardInfo>
          <ContentsBox>
            <h4>프론트엔드 면접 문제 2탄 ⭐️</h4>
            <p>
              지난번엔 HTML편이었는데 이번엔 CSS 관련 문제들로 정리해봤습니다.
              오늘도 프론트엔드 화이팅!
            </p>
            <SubInfo>
              <span>2021년 7월 9일</span>
              <span>·</span>
              <span>0개의 댓글</span>
            </SubInfo>
          </ContentsBox>
          <UserInfoBox>
            {/* 유저 정보 div */}
            <div>
              <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg" />

              <p>by</p>
              <p style={{ fontWeight: 800 }}>JongVeloper</p>
            </div>
            {/* 유저 정보 div */}
            <div>
              <LikeInfo>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                  ></path>
                </svg>{" "}
                <p>60</p>
              </LikeInfo>
            </div>
          </UserInfoBox>
        </CardInfo>
      </CardWrap>
    </React.Fragment>
  );
};

const CardWrap = styled.div`
  margin: 2%;
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  & > img {
    width: 100%;
    height: 30%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;
const CardInfo = styled.div`
  width: 100%;
  padding: 0%;
`;

const ContentsBox = styled.div`
  width: 100%;
  & > h4 {
    font-size: 25px;
    font-weight: 730;
    padding: 4%;
  }
  & > p {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 12%;
    padding: 0 4%;
  }
`;

const SubInfo = styled.div`
  font-size: 18px;
  padding: 4%;
  & > span {
    margin-right: 4px;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgb(248, 249, 250);
  padding: 5%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  & > div {
    & > img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }
  }

  & > p {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    font-size: 18px;
    line-height: 1.5;
  }
  & > div {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    font-size: 18px;
    line-height: 1.5;

    /* UserInfoBox p태그 */
    & > p {
      padding-right: 6px;
    }
  }
`;

const LikeInfo = styled.div`
  display: flex;
  flex-direction: row;
  & > p {
    margin: 0 6px;
  }
`;
export default MainCard;
