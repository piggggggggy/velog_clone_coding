import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as recentActions } from "../redux/modules/allPost";


import MainCard from "./MainCard";

const MainBody = (props) => {


  const dispatch = useDispatch();
  const all_list = useSelector((state) => state.allPost.list);

  React.useEffect(() => {
      if (all_list.length !== 0 ) {
          dispatch(recentActions.getRecentDB());
      }
      // dispatch(recentActions.getRecentDB());
  },[])

  if (!all_list) {
    return (
      <div>기다려..</div>
    )
  }

  return (
    <React.Fragment>
      <Container>
        <NavBox>
          <div>
            <ToggleBox>
              <Trending>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
                </svg>
                트렌딩
              </Trending>
              <Recent>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                </svg>
                최신
              </Recent>
              <div style={{left: "0%"}}></div>
            </ToggleBox>
          </div>
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
        </NavBox>

        <CardBox>
          <main>
            <div>
              {all_list.map((p, idx) => {
                return (
                <MainCard key={idx} {...p}/>
                )
              })}
            </div>
          </main>
        </CardBox>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 92%;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
  color: #212529;
  background: #f8f9fa;
`;

const NavBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  color: #212529;

  & > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    & > svg {
      cursor: pointer;
      font-size: 1.5rem;
      color: #868e96;

      & > path {
        cursor: pointer;
        font-size: 1.5rem;
        color: #868e96;
      }
    }
  }
`;

const ToggleBox = styled.div`
  display: flex;
  position: relative;
  width: 14rem;

  & > div {
    width: 50%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    background: #343a40;
    color: #212529;

    & > div {
      width: 50%;
      height: 2px;
      position: absolute;
      bottom: 0px;
      background: #343a40;
      color: #212529;
    }
  }
`;

const Trending = styled.a`
  color: #343a40;
  font-weight: bold;
  width: 7rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.125rem;
  text-decoration: none;
  height: 3rem;

  & > svg {
    color: #343a40;
    font-weight: bold;

    & > path {
      font-size: 1.5rem;
      color: #343a40;
      font-weight: bold;
    }
  }
`;

const Recent = styled.a`
  width: 7rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.125rem;
  text-decoration: none;
  color: #868e96;
  height: 3rem;

  & > svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    color: #868e96;

    & > path {
      font-size: 1.5rem;
      color: #868e96;
    }
  }
`;

const CardBox = styled.div`
  display: flex;
  margin-top: 2rem;

  & > main {
    flex: 1 1 0%;
    color: #212529;

    & > div {
      display: flex;
      margin: -1rem;
      flex-wrap: wrap;
      color: #212529;
    }
  }
`;




// const NavBox = styled.div`
//   margin-top: 1.5rem;
//   /* width: 88%; */
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;
//   position: relative;
//   /* margin: auto; */
// `;

// const CheckBox = styled.div`
//   background: white;
//   width: 8rem;
//   height: 2.8rem;
//   border-radius: 4px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   padding-left: 0.5rem;
//   padding-right: 0.5rem;
//   font-weight: 600;
//   color: rgb(73, 80, 87);
//   box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
//   cursor: pointer;
// `;

// const UnderLine = styled.div`
//   width: 40%;
//   height: 3px;
//   position: absolute;
//   bottom: 0px;
//   background-color: rgb(52, 58, 64);
// `;

// const Changing = styled.div`
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   position: relative;
//   /* box-sizing: inherit; */
//   font-weight: 400;
//   /* padding: 3px; */
//   & > a {
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-obx-pack: center;
//     justify-content: center;
//     font-size: 35px;
//     height: 3rem;
//     color: rgb(134, 142, 150);
//     text-decoration: none;
//     padding: 20px;
//     :active {
//       color: black;
//     }
//   }
// `;

// const MoreBox = styled.div`
//   margin-right: 10px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   & > a {
//     margin-top: 10px;
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-obx-pack: center;
//     justify-content: center;
//     font-size: 35px;
//     height: 3rem;
//     color: rgb(134, 142, 150);
//     text-decoration: none;
//     cursor: pointer;
//   }
// `;

// const MainContainer = styled.div`
//   max-width: 100%;
//   height: auto;
//   background-color: rgb(248, 249, 250);
//   display: block;
// `;

// const CardContainer = styled.div`
//   width: 90%;
//   height: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin: auto;
// `;
export default MainBody;
