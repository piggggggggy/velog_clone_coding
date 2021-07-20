import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as postActions } from "../redux/modules/post";


import PostingModal from "./PostingModal";

const Write = (props) => {
  const uId = props.match.params.pId;
  const dispatch = useDispatch();
  const editorRef = useRef();
  const _title = React.useRef();
  const submit = () => {
    const contentsHtml = editorRef.current.getInstance().getHTML();
    const contentsMd = editorRef.current.getInstance().getMarkdown();
    const image = contentsHtml.split("=")[1]?.split('"')[1];

    const post = {
      title: _title.current.value,
      content: contentsMd.replaceAll("#", ""),
      contentsHtml,
      contentsMd,
      image,
    };
    console.log(post);
    console.log(contentsHtml.split('"')[1]);
  };

  const [modal, setModal] = React.useState(false);
    const onModal = () => {
        setModal(true);
    };
    const offModal = () => {
        setModal(false);
    }


  return (
    <React.Fragment>
      <PostingModal Open={modal} Close={offModal}/>
      <PostContainer>
        <WriteHeadrContainer>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            ref={_title}
          ></input>
          <UnderLine></UnderLine>
          <TagContainer>
            <Input type="text" placeholder="태그를 입력하세요"></Input>
          </TagContainer>
        </WriteHeadrContainer>
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="82vh"
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
          <PostingButton onClick={onModal}>출간하기</PostingButton>
        </PostingButtonBox>
      </Footer>
      {/* <textarea
        dangerouslySetInnerHTML={{ __html: post.contentsHtml }}
      ></textarea> */}
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

////
const WriteHeadrContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  & > input {
    display: block;
    padding: 0px;
    width: 100%;
    height: 50px;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: 900;
    font-size: 1.8rem;
  }
`;
// const Title = styled.input`
//   display: block;
//   padding: 0px;
//   width: 100%;
//   height: 50px;
//   line-height: 1.5;
//   outline: none;
//   border: none;
//   font-weight: 900;
//   font-size: 1.8rem;
// `;

const UnderLine = styled.div`
  margin-top: 0rem;
  margin-bottom: 0.5rem;
  background-color: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
`;

const TagContainer = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  line-height: 1.5rem;
  font-size: 0.5rem;
  display: inline-flex;
  outline: none;
  cursor: text;
  min-width: 8rem;
  border: none;
`;
export default Write;
