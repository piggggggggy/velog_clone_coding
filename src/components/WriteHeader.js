import React from "react";
import styled from "styled-components";

const WriteHeader = (props) => {

  return (
    <WriteHeadrContainer>
      <textarea placeholder="제목을 입력하세요"></textarea>
      <UnderLine></UnderLine>
      <TagContainer>
        <Input
            type="text"
            placeholder="태그를 입력하세요"
        >
        </Input>
      </TagContainer>
    </WriteHeadrContainer>
  );
};

const WriteHeadrContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: white;
  & > textarea {
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

export default WriteHeader;
