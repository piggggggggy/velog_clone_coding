import React, { useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "codemirror/lib/codemirror.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Write = (props) => {
  // const memberId = useSelector((state) => state.user.user.memberId);
  const memberId = localStorage.getItem('memberId');
  const pId = props.match.params.pId;
  const dispatch = useDispatch();
  const { history } = props;
  const editorRef = useRef();

  const [title, setTitle] = useState();
  // const [contentsMd, setMd] = useState();
  const [tag, setTag] = useState();

  const [taglist, setTagList] = useState([]);

  const [postIntro, setIntro] = useState();

  const [imgUrl, setImg] = useState();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeTag = (e) => {
    setTag(e.target.value);
  };

  const changeImg = (e) => {
    setImg(e.target.value);
  };

  const onCreate = (e) => {
    setTagList((taglist) => [...taglist, tag]);
    setTag("");
  };
  console.log(taglist);

  const changeIntro = (e) => {
    setIntro(e.target.value);
  };

  // const image = contentsHtml.split("=")[1]?.split('"')[1];
  // const contentsMd = editorRef.current.getInstance().getMarkdown();

  // 모달 구현
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(true);
  };
  const offModal = () => {
    setModal(false);
  };

  const [url, setUrl] = useState(false);
  const onUrl = () => {
    setUrl(true);
  };

  const createPost = () => {
    const contentsHtml = editorRef.current.getInstance().getHTML();
    const contentsMd = editorRef.current.getInstance().getMarkdown();

    const post = {
      title: title,
      content: contentsHtml,
      memberId: memberId,
      likeCount: 0,
      contentMd: contentsMd,
      previewText: postIntro,
      originalFileName: imgUrl,
      tagList: { stringTagName: taglist },
    };

    
    console.log(post);
    dispatch(postActions.addPostDB(post));
    // history.push(`/posting/${memberId}`);
  };

  return (
    <React.Fragment>
      {/* <PostingModal Open={modal} Close={offModal} data={post}/> */}
      {modal ? (
        <ModalContainer>
          <div>
            <LeftContent>
              <section>
                <h3>포스트 미리보기</h3>
                <div>
                  <Preview>
                    <div>
                      <div>
                        {!url ?
                        <svg
                          width="107"
                          height="85"
                          fill="none"
                          viewBox="0 0 107 85"
                        >
                          <path
                            fill="#868E96"
                            d="M105.155 0H1.845A1.844 1.844 0 0 0 0 1.845v81.172c0 1.02.826 1.845 1.845 1.845h103.31A1.844 1.844 0 0 0 107 83.017V1.845C107 .825 106.174 0 105.155 0zm-1.845 81.172H3.69V3.69h99.62v77.482z"
                          ></path>
                          <path
                            fill="#868E96"
                            d="M29.517 40.84c5.666 0 10.274-4.608 10.274-10.271 0-5.668-4.608-10.276-10.274-10.276-5.665 0-10.274 4.608-10.274 10.274 0 5.665 4.609 10.274 10.274 10.274zm0-16.857a6.593 6.593 0 0 1 6.584 6.584 6.593 6.593 0 0 1-6.584 6.584 6.591 6.591 0 0 1-6.584-6.582c0-3.629 2.954-6.586 6.584-6.586zM12.914 73.793a1.84 1.84 0 0 0 1.217-.46l30.095-26.495 19.005 19.004a1.843 1.843 0 0 0 2.609 0 1.843 1.843 0 0 0 0-2.609l-8.868-8.868 16.937-18.548 20.775 19.044a1.846 1.846 0 0 0 2.492-2.72L75.038 31.846a1.902 1.902 0 0 0-1.328-.483c-.489.022-.95.238-1.28.6L54.36 51.752l-8.75-8.75a1.847 1.847 0 0 0-2.523-.081l-31.394 27.64a1.845 1.845 0 0 0 1.22 3.231z"
                          ></path>
                        </svg>
                        :
                        <ImgUrl>
                          <div>
                            <input onChange={changeImg} placeholder="이미지 URL을 입력해주세요!"></input>
                          </div>
                        </ImgUrl> }

                        <button onClick={()=>{onUrl()}}>썸네일 업로드</button>
                      </div>
                    </div>
                  </Preview>
                  
                </div>
              </section>
            </LeftContent>
            <MiddleLine></MiddleLine>
            <RightContent>
              <RightBody>
                <section style={{ outline: "none", border: "none" }}>
                  <h3>포스트 소개하기</h3>
                  <div>
                    <TextPreview>
                      <h4></h4>
                      <textarea
                        onChange={changeIntro}
                        placeholder="당신의 포스트를 짧게 소개해보세요."
                      ></textarea>
                      {/* <div>{document.write(postIntro.length)}/150</div> */}
                    </TextPreview>
                  </div>
                </section>
              </RightBody>
              <RightFooter>
                <button
                  onClick={offModal}
                  sytle={{ backgroundColor: "#868e96" }}
                >
                  취소
                </button>
                <button
                  onClick={createPost}
                  style={{ marginLeft: "0.875rem", backgroundColor: "#12b886" }}
                >
                  출간하기
                </button>
              </RightFooter>
            </RightContent>
          </div>
        </ModalContainer>
      ) : null}
      {/* ------------------------------------------------------------------- */}

      <PostContainer>
        <WriteHeadrContainer>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            onChange={changeTitle}
          ></input>
          <UnderLine></UnderLine>
          <TagContainer>
            <Input
              onChange={changeTag}
              type="text"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  const newTag = document.createElement("div");
                  newTag.id = "tag";
                  const newTagName = document.createTextNode(e.target.value);
                  newTag.appendChild(newTagName);
                  document.querySelector(TagContainer).prepend(newTag);
                  document.querySelector(Input).value = "";
                  onCreate();
                }
              }}
              placeholder="태그를 입력하세요"
            ></Input>
          </TagContainer>
        </WriteHeadrContainer>
        <Editor
          ref={editorRef}
          // onChange={changeMd}
          initialValue=""
          previewStyle="vertical"
          height="100vh"
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
          <span onClick={history.goBack}>나가기</span>
        </Exit>
        <PostingButtonBox>
          <PostingButton onClick={onModal}>출간하기</PostingButton>
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
  position: fixed;
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
  z-index: 200;
`;

const PostingButtonBox = styled.div`
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  align-items: center;
`;

// const TemporaryButton = styled.button`
//   display: inline-flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   font-weight: bold;
//   cursor: pointer;
//   outline: none;
//   border: none;
//   background-color: rgb(233, 236, 239);
//   border-radius: 4px;
//   padding: 0.7rem;
//   margin-right: 10px;
//   color: rgb(73, 80, 87);
// `;

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
  & > div {
    margin-bottom: 1rem;
    margin-top: 1rem;
    background-color: rgb(241, 243, 245);
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 2rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 1rem;
    color: rgb(12, 166, 120);
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Input = styled.input`
  line-height: 1.5rem;
  font-size: 1rem;
  display: inline-flex;
  outline: none;
  cursor: text;
  min-width: 8rem;
  border: none;
`;

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
  z-index: 9000;
  animation: 0.25s ease-in 0s 1 normal forwards running cdYrHg;
  padding-top: 16rem;
  padding-bottom: 16rem;

  transform: translateY(100%);
  transform: translateY(0%);

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
      font-weight: bold;
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
`;

const ImgUrl = styled.div`
  width: 80%;
  color: #212529;

  & > div {
    display: flex;
    background: white;
    box-shadow: #00000008;
    padding: 0.5rem 0.875rem;
    line-height: 1.5;
    color: #212529;

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
    height: 10rem;
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
      font-weight: bold;
    }
  }
`;

// const OpenSetting = styled.div`
//   display: flex;

//   & > button {
//     flex: 1 1 0%;
//     height: 3rem;
//     display: inline-flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: start;
//     justify-content: flex-start;
//     font-weight: bold;
//     background: white;
//     font-size: 1.125rem;
//     box-shadow: #0000000d 0px 0px 4px 0px;
//     padding: 0px 0px 0px 1rem;
//     border-radius: 4px;
//     cursor: pointer;
//     border: 1px solid #00000000;
//     color: #868e96;

//     & > svg {
//       font-weight: bold;
//       font-size: 1.125rem;
//       cursor: pointer;
//       color: #868e96;

//       & > path {
//         font-weight: bold;
//         font-size: 1.125rem;
//         cursor: pointer;
//         color: #868e96;
//       }
//     }

//     & > div {
//       flex: 1 1 0%;
//       display: flex;
//       -webkit-box-pack: center;
//       justify-content: center;
//       -webkit-box-align: center;
//       align-items: center;
//       font-weight: bold;
//       font-size: 1.125rem;
//       cursor: pointer;
//       color: #868e96;
//     }
//   }
// `;

// const UrlSetting = styled.div`
//   color: #212529;

//   & > div {
//     display: flex;
//     background: white;
//     box-shadow: #00000008;
//     padding: 0.5rem 0.875rem;
//     line-height: 1.5;
//     color: #212529;

//     & > div {
//       color: #868e96;
//       line-height: 1.5;
//     }

//     & > input {
//       font-size: 1rem;
//       background: none;
//       outline: none;
//       flex: 1 1 0%;
//       border: none;
//       padding: 0px;
//       line-height: 1.5;
//       color: #343a40;
//     }
//   }
// `;

// const SeriesSetting = styled.div`
//   color: #212529;

//   & > button {
//     background: white;
//     height: 3rem;
//     width: 100%;
//     border-radius: 4px;
//     box-shadow: #0000000d 0px 0px 4px 0px;
//     border: none;
//     outline: none;
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     justify-self: center;
//     color: #20c997;
//     font-size: 1.125rem;
//     font-weight: bold;
//     cursor: pointer;

//     & > svg {
//       margin-right: 0.875rem;
//       color: #20c997;
//       font-size: 1.125rem;
//       font-weight: bold;
//       cursor: pointer;

//       & > path {
//         color: #20c997;
//         font-size: 1.125rem;
//         font-weight: bold;
//         cursor: pointer;
//       }
//     }
//   }
// `;

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

export default Write;
