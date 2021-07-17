import React from "react";
import styled from "styled-components";
import MainCard from "./MainCard";

const MainBody = (props) => {
  return (
    <React.Fragment>
      <MainContainer>
        <NavBox>
          <Changing>
            {/* 트렌딩 시작*/}
            <a href="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
              </svg>
              트렌딩
            </a>
            {/* 트렌딩 끝*/}
            {/* 최신 시작 */}
            <a href="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
              </svg>
              최신
            </a>
            {/* 최신 끝 */}
            <CheckBox>
              이번 주
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.8em"
                width="1.8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
            </CheckBox>
            {/* 하단 표시선 시작*/}
            <UnderLine></UnderLine>
          </Changing>
          <MoreBox>
            <a>
              <svg
                stroke="currentColor"
                flill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                  fill="rgb(134, 142, 150)"
                ></path>
              </svg>
            </a>
          </MoreBox>
        </NavBox>
        <CardContainer>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </CardContainer>
      </MainContainer>
    </React.Fragment>
  );
};

const NavBox = styled.div`
  /* margin-top: 1.5rem; */
  width: 88%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: auto;
`;

const CheckBox = styled.div`
  background: white;
  width: 8rem;
  height: 2.8rem;
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: rgb(73, 80, 87);
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  cursor: pointer;
`;

const UnderLine = styled.div`
  width: 40%;
  height: 3px;
  position: absolute;
  bottom: 0px;
  background-color: rgb(52, 58, 64);
`;

const Changing = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  /* box-sizing: inherit; */
  font-weight: 400;
  /* padding: 3px; */
  & > a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-obx-pack: center;
    justify-content: center;
    font-size: 35px;
    height: 3rem;
    color: rgb(134, 142, 150);
    text-decoration: none;
    padding: 20px;
    :active {
      color: black;
    }
  }
`;

const MoreBox = styled.div`
  margin-right: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  & > a {
    margin-top: 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-obx-pack: center;
    justify-content: center;
    font-size: 35px;
    height: 3rem;
    color: rgb(134, 142, 150);
    text-decoration: none;
    cursor: pointer;
  }
`;

const MainContainer = styled.div`
  max-width: 100%;
  height: auto;
  background-color: rgb(248, 249, 250);
  display: block;
`;

const CardContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;
export default MainBody;
