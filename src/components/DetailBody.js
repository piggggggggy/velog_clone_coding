import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const DetailBody = (props) => {

  const post = useSelector((state) => state.post.post);
  const user = useSelector((state) => state.post.user);

  if (post === null) {
    return <div>loading</div>;
  }


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

export default DetailBody;
