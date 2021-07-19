import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import WriteHeader from "../components/WriteHeader";

const Write = (props) => {
  return (
    <React.Fragment>
      <PostContainer>
        <WriteHeader />
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="75vh"
          initialEditType="markdown"
          previewHighlight={false}
          placeholder="당신의 이야기를 적어보세요..."
        />
      </PostContainer>
      <Footer>
        <Exit>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
          </svg>
          <span>나가기</span>
        </Exit>
        <PostingButtonBox>
        <TemporaryButton>임시저장</TemporaryButton>
        <PostingButton>출간하기</PostingButton>
        </PostingButtonBox>
      </Footer>
    </React.Fragment>
  );
};

const PostContainer = styled.div`
  box-sizing: inherit;
  height: 94vh;
`;
const Footer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const PostingButtonBox = styled.div`
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
`;

const TemporaryButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: rgb(233, 236, 239);
  border-radius: 4px;
  padding: 0.7rem;
  margin-right: 10px;
  color: rgb(73, 80, 87);
`;

const PostingButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  padding: 0.7rem;
  border-radius: 4px;
  color: white;
`;

const Exit = styled.button`
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: center;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  display: flex;
  outline: none;
  
  & > svg {
    stroke: currentColor;
    fill: currentColor;
    stroke-width: 0;
    height: 1em;
    width: 1em;
  }
`;
export default Write;
