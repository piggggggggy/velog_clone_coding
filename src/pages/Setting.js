import React from "react";
import styled from "styled-components";

const Setting = (props) => {

    return (
        <React.Fragment>
            <SettingContainer>

                <SectionHead>
                    <ImageArea>
                        <img src="https://media.vlpt.us/images/pyt4105/profile/0d998bb2-e2ce-430a-8434-c28369fc5009/타인의삶.png?w=400"/>
                        <ElButton style={{ backgroundColor: "#12b886", color: "white" }}>이미지 업로드</ElButton>
                        <ElButton style={{ backgroundColor: "white", color: "#12b886" }}>이미지 제거</ElButton>
                    </ImageArea>
                    <InfoArea>
                        <h2>박용태</h2>
                        <p>프론트엔드 개발자가 되고싶어요</p>
                        <EditButton>수정</EditButton>
                    </InfoArea>
                </SectionHead>

                <SectionBody>
                    <div>
                        <div>
                            <div>
                                <h3>벨로그 제목</h3>
                            </div>
                            <ContentBlock>
                                <Content>PIGGY4105.log</Content>
                                <EditWrapper>
                                    <EditButton>수정</EditButton>
                                </EditWrapper>
                            </ContentBlock>

                        </div>
                        <Explain>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</Explain>
                    </div>

                    <div style={{borderTop: "1px solid #e9ecef"}}>
                        <div>
                            <div>
                                <h3>소셜 정보</h3>
                            </div>
                            <ContentBlock>
                                <Content>
                                    <ElUl>
                                        <FirstLi>
                                            <svg>
                                                <path 
                                                fill="currentColor"
                                                d="M16 16.871L1.019 5H30.98L16 16.871zm0 3.146L1 8.131V27h30V8.131L16 20.017z"></path>
                                            </svg>
                                            <span>pyt4105@gmail.com</span>
                                        </FirstLi>
                                        <SecondLi>
                                                <mask>
                                                    <path 
                                                    fill="#ffffff"
                                                    fill-rule="evenodd"
                                                    d="M6.69 15.944c0 .08-.093.145-.21.145-.133.012-.226-.053-.226-.145 0-.081.093-.146.21-.146.12-.012.226.053.226.146zm-1.255-.182c-.028.08.053.173.174.198.105.04.226 0 .25-.081.024-.08-.053-.173-.174-.21-.104-.028-.221.012-.25.093zm1.783-.068c-.117.028-.198.104-.186.197.012.08.117.133.238.105.117-.028.198-.105.186-.186-.012-.076-.121-.129-.238-.116zM9.87.242C4.278.242 0 4.488 0 10.08c0 4.471 2.815 8.298 6.835 9.645.516.093.697-.226.697-.488 0-.25-.012-1.63-.012-2.476 0 0-2.822.605-3.415-1.202 0 0-.46-1.173-1.121-1.475 0 0-.924-.633.064-.621 0 0 1.004.08 1.557 1.04.883 1.557 2.363 1.109 2.94.843.092-.645.354-1.093.645-1.36-2.255-.25-4.529-.576-4.529-4.455 0-1.109.307-1.665.952-2.375-.105-.262-.448-1.342.105-2.738C5.56 4.157 7.5 5.51 7.5 5.51a9.474 9.474 0 0 1 2.532-.344c.86 0 1.726.117 2.533.343 0 0 1.939-1.355 2.782-1.089.552 1.4.21 2.476.105 2.738.645.714 1.04 1.27 1.04 2.375 0 3.891-2.375 4.202-4.63 4.456.372.319.686.923.686 1.87 0 1.36-.012 3.041-.012 3.372 0 .262.186.58.698.488C17.266 18.379 20 14.552 20 10.08 20 4.488 15.464.24 9.871.24zM3.919 14.149c-.052.04-.04.133.029.21.064.064.157.093.21.04.052-.04.04-.133-.029-.21-.064-.064-.157-.092-.21-.04zm-.435-.326c-.028.052.012.117.093.157.064.04.145.028.173-.028.028-.053-.012-.117-.093-.158-.08-.024-.145-.012-.173.029zm1.306 1.435c-.064.053-.04.174.053.25.092.093.21.105.262.04.052-.052.028-.173-.053-.25-.088-.092-.21-.104-.262-.04zm-.46-.593c-.064.04-.064.146 0 .238.065.093.174.133.226.093.065-.053.065-.157 0-.25-.056-.093-.16-.133-.225-.08z"
                                                    clip-rule="evenodd"></path>
                                                </mask>
                                                <g mask="url(#github)">
                                                    <path 
                                                    fill="currentColor"
                                                    d="M0 0h20v20H0z"></path>
                                                </g>
                                            <span>piggggggggy</span>
                                        </SecondLi>
                                    </ElUl>
                                </Content>
                                <EditWrapper>
                                    <EditButton>수정</EditButton>
                                </EditWrapper>
                            </ContentBlock>

                        </div>
                        <Explain>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</Explain>
                    </div>

                    <div style={{borderTop: "1px solid #e9ecef"}}>
                        <div>
                            <div>
                                <h3>이메일 주소</h3>
                            </div>
                            <ContentBlock>
                                <Content>pyt4105@gmail.com</Content>
                            </ContentBlock>
                        </div>
                        <Explain>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</Explain>
                    </div>

                    <div style={{borderTop: "1px solid #e9ecef"}}>
                        <div>
                            <div>
                                <h3>이메일 수신 설정</h3>
                            </div>
                            <ContentBlock>
                                <Content>
                                    <ElUl>
                                        <FirstLi>
                                            <span style={{ width:"14rem" }}>댓글 알림</span>
                                            <Toggle><div></div></Toggle>
                                        </FirstLi>
                                        <SecondLi>
                                            <span style={{ width:"14rem" }}>벨로그 업데이트 소식</span>
                                            <Toggle><div></div></Toggle>
                                        </SecondLi>

                                    </ElUl>
                                </Content>
                            </ContentBlock>
                        </div>
                    </div>

                    <div style={{borderTop: "1px solid #e9ecef"}}>
                        <div>
                            <div>
                                <h3>회원 탈퇴</h3>
                            </div>
                            <ContentBlock>
                                <Content>
                                    <ElButton style={{ backgroundColor:"#ff6b6b", color: "white"}}>회원 탈퇴</ElButton>
                                </Content>
                            </ContentBlock>
                        </div>
                        <Explain>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Explain>
                    </div>
                    
                </SectionBody>
            </SettingContainer>
        </React.Fragment>
    );
}

const SettingContainer = styled.div`
    width: 36%;
    min-width: 768px;
    margin: 48px auto;
    padding-bottom: 80px;
`;

const SectionHead = styled.div`
    display: flex;
    height: 220px;
`;

const ImageArea = styled.div`
    padding-right: 24px;
    display: flex;
    flex-direction: column;

    & > img {
        object-fit: cover;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        display: block;
        margin-bottom: 20px;
    }
`;

const ElButton = styled.button`
    display: inline-flex;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2rem;
    font-size: 1rem;
`;

const InfoArea = styled.div`
    padding-left: 24px;
    border-left: 1px solid #e9ecef;

    & > h2 {
        font-size: 2.25rem;
        font-weight: bold;
        margin: 0px;
        line-height: 1.5;
        color: #343a40;
    }

    & > p {
        font-size: 16px;
        margin-top: 4px;
        margin-bottom: 8px;
        line-height: 1.5;
        color: #868e96;
    }
`;

const EditButton = styled.button`
    outline: none;
    padding: 0px;
    border: none;
    display: inline;
    font-size: 16px;
    line-height: 24px;
    color: #12b886;
    text-decoration: underline;
    background: none;
    cursor: pointer;
`;

const SectionBody = styled.div`
    margin-top: 64px;
    
    & > div {
        padding-top: 16px;
        padding-bottom: 16px;
        

        & > div {
            display: flex;
            & > div {
                width: 152px;
                flex-shrink: 0;

                & > h3 {
                    line-height: 1.5;
                    color: #343a40;
                    margin: 0px;
                    font-size: 1.125rem;
                    font-weight: bold;
                }
            }
        }
    }
`;


const Explain = styled.div`
    margin-top: 14px;
    color: #868e96;
    font-size: 14px;
    display: block;
`;

const ContentBlock = styled.div`
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const Content = styled.div`
    flex: 1 1 0%;
    font-size: 1rem;
    color: #495057;
    line-height: 1.5;
`;

const EditWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 1rem;
`;

const ElUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

const FirstLi = styled.li`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;
    font-size: 1rem;
    color: #495057;
    line-height: 1.5;

    & > svg {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        margin-right: 0.5rem;
        flex-shrink: 0;
        list-style: none;
        color: #495057;
        line-height: 1.5;

        & > path {
            font-size: 1rem;
            list-style: none;
            color: #495057;
            line-height: 1.5;
        }
    }

    & > span {
        font-size: 1rem;
        list-style: none;
        color: #495057;
        line-height: 1.5;
    }
`;

const SecondLi = styled.li`
    margin-top: 0.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    list-style: none;
    font-size: 1rem;
    color: #495057;
    line-height: 1.5;

    & > svg {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        margin-right: 0.5rem;
        flex-shrink: 0;
        list-style: none;
        color: #495057;
        line-height: 1.5;
        
        & > mask {
            font-size: 1rem;
            list-style: none;
            color: #495057;
            line-height: 1.5;

            & > path {
                font-size: 1rem;
                list-style: none;
                color: #495057;
                line-height: 1.5;
            }
        }
    }

    & > span {
        font-size: 1rem;
        list-style: none;
        color: #495057;
        line-height: 1.5;
    }
`;

const Toggle = styled.div`
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 2.875rem;
    height: 1.5rem;
    background: #e9ecef;
    transition: all 0.125s ease-in 0s;
    border-radius: 1.125rem;
    padding: 0.124rem;
    list-style: none;
    font-size: 1rem;
    color: #495057;
    line-height: 1.5;

    & > div {
        transform: translate(0rem);
        box-shadow: 2px 0 4px #0000000d;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.625rem;
        background: white;
        cursor: pointer;
        list-style: none;
        font-size: 1rem;
        color: #495057;
        line-height: 1.5;
    }
`;

export default Setting;