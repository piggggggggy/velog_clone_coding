import React from "react";
import styled from "styled-components";

const PostingModal = () => {
  return (
    <React.Fragment>
      {/* <ModalContainer>
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
      </ModalContainer> */}

      <ModalContainer>
        <div>
          <LeftContent>
            <section>
              <h3>포스트 미리보기</h3>
              <div>
                <Preview>
                  <div>
                    <div>
                      <svg width="107" height="85" fill="none" viewBox="0 0 107 85">
                        <path fill="#868E96" d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"></path>
                        <path fill="#868E96" d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"></path>
                      </svg>
                      <button>썸네일 업로드</button>
                    </div>
                  </div>
                </Preview>
                <TextPreview>
                  <h4></h4>
                  <textarea placeholder="당신의 포스트를 짧게 소개해보세요."></textarea>
                  <div>0/150</div>
                </TextPreview>
              </div>
            </section>
          </LeftContent>
          <MiddleLine>

          </MiddleLine>
          <RightContent>
            <RightBody>
              <section style={{outline: "none", border: "none"}}>
                <h3>공개 설정</h3>
                <OpenSetting>
                  <button style={{marginLeft: "1rem", border: "1px solid #00000000", color: "#868e96"}}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.243 22.212a10.209 10.209 0 0 1-6.03-2.939A10.218 10.218 0 0 1 1.714 12c0-2.473.868-4.813 2.458-6.673.041.492.142 1.019.116 1.395-.094 1.373-.23 2.232.574 3.39.313.451.39 1.098.542 1.62.149.51.744.779 1.155 1.094.828.635 1.62 1.373 2.5 1.932.579.369.941.552.771 1.26-.136.569-.174.92-.469 1.426-.09.155.34 1.15.482 1.292.433.433.862.83 1.333 1.219.732.604-.07 1.389-.42 2.257zm8.516-2.939a10.213 10.213 0 0 1-5.34 2.832c.285-.705.793-1.331 1.264-1.694.409-.316.922-.924 1.136-1.405.213-.48.496-.898.783-1.34.407-.628-1.005-1.577-1.463-1.776-1.03-.447-1.805-1.05-2.72-1.694-.653-.46-1.977.24-2.713-.082-1.009-.44-1.84-1.206-2.716-1.866-.905-.68-.861-1.475-.861-2.48.708.026 1.716-.196 2.187.373.148.18.659.984 1 .698.28-.233-.207-1.168-.3-1.388-.29-.676.658-.94 1.142-1.398.632-.597 1.989-1.535 1.882-1.964-.108-.428-1.358-1.643-2.092-1.453-.11.028-1.078 1.044-1.266 1.203l.015-.994c.004-.21-.39-.424-.372-.56.046-.34.996-.96 1.232-1.232-.165-.103-.73-.588-.9-.517-.415.173-.882.291-1.296.464 0-.144-.017-.279-.038-.412a10.188 10.188 0 0 1 2.614-.758l.812.326.574.68.573.591.5.162.795-.75-.205-.535v-.481c1.572.228 3.057.814 4.357 1.719-.233.02-.488.055-.777.091-.119-.07-.272-.102-.401-.15.376.81.77 1.608 1.169 2.408.426.853 1.372 1.77 1.539 2.67.195 1.063.06 2.028.166 3.278.104 1.204 1.358 2.572 1.358 2.572s.579.197 1.06.128a10.222 10.222 0 0 1-2.698 4.734z"></path>
                    </svg>
                    <div>전체 공개</div>
                  </button>
                  <button>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17.625 9H16.5V6.81c0-2.47-1.969-4.522-4.44-4.56a4.514 4.514 0 0 0-4.56 4.5V9H6.375A1.88 1.88 0 0 0 4.5 10.875v9a1.88 1.88 0 0 0 1.875 1.875h11.25a1.88 1.88 0 0 0 1.875-1.875v-9A1.88 1.88 0 0 0 17.625 9zm-4.969 5.85v3.225a.672.672 0 0 1-.623.675.657.657 0 0 1-.69-.656V14.85a1.5 1.5 0 0 1-.838-1.486 1.5 1.5 0 1 1 2.152 1.486zM15.187 9H8.814V6.75c0-.848.332-1.645.937-2.25A3.16 3.16 0 0 1 12 3.562a3.16 3.16 0 0 1 2.25.938 3.16 3.16 0 0 1 .938 2.25V9z"></path>
                    </svg>
                    <div>비공개</div>
                  </button>
                </OpenSetting>
              </section>
              <section style={{marginTop: "1.5rem"}}>
                <h3>URL 설정</h3>
                <UrlSetting>
                  <div>
                    <div>/@pyt4105/</div>
                    <input value></input>
                  </div>
                </UrlSetting>
              </section>
              <section style={{marginTop: "1.5rem"}}>
                <h3>시리즈 설정</h3>
                <SeriesSetting>
                  <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 10H2V12H14V10ZM14 6H2V8H14V6ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM2 16H10V14H2V16Z" fill="currentColor"></path>
                    </svg>
                    "시리즈에 추가하기"
                  </button>
                </SeriesSetting>
              </section>
            </RightBody>
            <RightFooter>
              <button sytle={{background: "gray"}}>취소</button>
              <button style={{marginLeft: "0.875rem", background: "teal"}}>출간하기</button>
            </RightFooter>
          </RightContent>
        </div>
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
  animation: 0.25s ease-in 0s 1 normal forwards running cdYrHg;

  & > div {
    width: 768px;
    display: flex;
  }
`;

const LeftContent = styled.div`
  flex: 1 1 0%;
  min-width: 0px;

  & > section {

    & > h3 {
      font-size: 1.3125rem;
      color: #343a40;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      margin-top: 0px;
    }

    & > div {
    }
  }
`;

const Preview = styled.div`
  width: 100%;
  padding-top: 55.11%;
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;

    & > div {
      background: #e9ecef;
      width: 100%;
      height: 100%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: column;

      & > svg {

        & > path {

        }

        & > button {
          margin-top: 1rem;
          padding: 0.25rem 2rem;
          background: white;
          border-radius: 4px;
          box-shadow: #00000006 0px 0px 4px;
          font-size: 1rem;
          line-height: 1.5;
          color: #20c997;
          outline: none;
          border: none;
          cursor: pointer;
          transition: all 0.125s ease-in 0s;
          font-weight: bold;
        }
      }
    }
  }
`;

const TextPreview = styled.div`
  margin-top: 1.5rem;

  & > h4 {
    line-height: 1.5;
    margin: 0px;
    display: block;
    font-size: 1.125rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #212529;
  }

  & > textarea {
    resize: none;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: #00000008 0px 0px 4px 0px;
    line-height: 1.5;
    font-size: 0.875rem;
    height: 7.375rem;
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
  }

  & > div {
    text-align: right;
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: #868e96;
  }
`;

const MiddleLine = styled.div`
  width: 1px;
  min-height: 425px;
  background: #e9ecef;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const RightContent = styled.div`
  flex: 1 1 0%;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const RightBody = styled.div`
  color: #212529;

  & > section {
    
    & > h3 {
      font-size: 1.3125rem;
      color: #343a40;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      margin-top: 0px;
    }
  }
`;

const OpenSetting = styled.div`
  display: flex;

  & > button {
    outline: 1 1 0%;
    height: 3rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    font-weight: bold;
    background: white;
    font-size: 1.125rem;
    box-shadow: #0000000d 0px 0px 4px 0px;
    padding: 0px 0px 0px 1rem;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #00000000;
    color: #868e96;

    & > svg {
      font-weight: bold;
      font-size: 1.125rem;
      cursor: pointer;
      color: #868e96;
    
      & > path {
        font-weight: bold;
        font-size: 1.125rem;
        cursor: pointer;
        color: #868e96;
      }
    }

    & > div {
      flex: 1 1 0%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.125rem;
      cursor: pointer;
      color: #868e96;
    }
  }  
`;

const UrlSetting = styled.div`
  color: #212529;
  
  & > div {
    display: flex;
    background: white;
    box-shadow: #00000008;
    padding: 0.5rem 0.875rem;
    line-height: 1.5;
    color: #212529;

    & > div {
      color: #868e96;
      line-height: 1.5;
    }

    & > input {
      font-size: 1rem;
      background: none;
      outline: none;
      flex: 1 1 0%;
      border: none;
      padding: 0px;
      line-height: 1.5;
      color: #343a40;
    }
  }
`;

const SeriesSetting = styled.div`
  color: #212529;

  & > button {
    background: white;
    height: 3rem;
    width: 100%;
    border-radius: 4px;
    box-shadow: #0000000d 0px 0px 4px 0px;
    border: none;
    outline: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-self: center;
    color: #20c997;
    font-size: 1.125rem;
    font-weight: bold;
    cursor: pointer;

    & > svg {
      margin-right: 0.875rem;
      color: #20c997;
      font-size: 1.125rem;
      font-weight: bold;
      cursor: pointer;

      & > path {
        color: #20c997;
        font-size: 1.125rem;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const RightFooter = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  color: #212529;

  & > button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    color: white;
    border-radius: 4px;
    padding: 0px 1.125rem;
    height: 2.5rem;
    font-size: 1.125rem;
  }
`;

export default PostingModal;
