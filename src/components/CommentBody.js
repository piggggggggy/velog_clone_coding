import React from "react";
import styled from "styled-components";

const CommentBody = (props) => {
  return (
    <React.Fragment>
      <CommentContainer>
        <ContentsContainer>
          <h4>1개의 댓글</h4>
          <CommentPostBox/>
          <CommentButtonBox>
              <button>댓글 작성</button>
          </CommentButtonBox>
        </ContentsContainer>
      </CommentContainer>
    </React.Fragment>
  );
};

const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: inherit;
`;

const ContentsContainer = styled.div`
  width: 59%;
  margin: 2rem auto;
  & > h4 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;
const CommentPostBox = styled.textarea`
  width: 100%;
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  border-radius: 4px;
  min-height: 7rem;
  font-size: 1.5rem;
  line-height: 1.75;
  placeholder: none;
`;

const CommentButtonBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  & > button{
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      cursor: pointer;
      font-weight: bold;
      outline: none;
      border: none;
      background-color: rgb(18, 184, 134);
      color: white;
      border-radius: 4px;
      padding: 0px 2rem;
      height: 3rem;
      font-size: 1.5rem;
  }
`;
export default CommentBody;
