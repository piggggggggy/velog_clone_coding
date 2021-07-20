import React from "react";
import styled from "styled-components";

const PostingModal = () => {
  return (
    <React.Fragment>
      <ModalContainer>
        <ModalContents>
          <PreviewContainer>
            <ModalPreview>
              <h3>포스트 미리보기</h3>
              <div>
                <div>
                  <PreviewBox>
                    <Preview>
                      <svg viewBox="0 0 107 85">
                        <path
                          fill="#868E96"
                          d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"
                        ></path>
                        <path
                          fill="#868E96"
                          d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"
                        ></path>
                      </svg>
                      <button>썸네일 업로드</button>
                    </Preview>
                    <TextPreview>asdfasdf</TextPreview>
                    <div>0/150</div>
                  </PreviewBox>
                </div>
              </div>
            </ModalPreview>
          </PreviewContainer>
          <MiddleLine></MiddleLine>
          <PublicBox></PublicBox>
        </ModalContents>
      </ModalContainer>
    </React.Fragment>
  );
};

const ModalContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgb(248, 249, 250);
  z-index: 15;
`;

const ModalContents = styled.div`
  width: 100%;
  display: flex;
  & > div {
    flex: 1 1 0%;
    min-width: 0px;
  }
`;
const ModalPreview = styled.section`
  box-sizing: inherit;
  width: 100%;
  height: auto;
  & > h3 {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    margin-top: 30%;
  }
  & > div {
    width: 100%;
    padding-top: 55.11%;
    position: relative;
  }
`;

const PreviewBox = styled.div`
flex: 1 1 0%;
min-width: 0px;
  & > div {
    text-align: right;
  }
`;

const PreviewContainer = styled.div`
  box-sizing: inherit;
  display: block;
`;

const Preview = styled.div`
  background-color: rgb(233, 236, 239);
  width: 100%;
  height: 50%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  & > svg {
    width: 107px;
    height: 85px;
  }
  & > button {
    margin-top: 1rem;
    padding: 0.25rem 2rem;
    background-color: white;
    font-size: 1rem;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
    line-height: 1.5;
    color: rgb(32, 201, 151);
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const TextPreview = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  line-height: 1.5;
  font-size: 0.875rem;
  height: 5rem;
  padding: 0.75rem 1rem;
  margin-top: 1.5rem;
  height: 120px;
`;

const MiddleLine = styled.div`
  width: 1px;
  min-height: 100px;
  background-color: rgb(233, 236, 239);
  margin-left: 20px;
`;

const PublicBox = styled.div`
  flex: 1 1 0%;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export default PostingModal;
