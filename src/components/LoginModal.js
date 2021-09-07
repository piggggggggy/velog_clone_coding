import React, { useRef } from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";

// modules
import { actionCreators as userActions } from "../redux/modules/user";

const LoginModal = (props) => {

    const dispatch = useDispatch();
    const {Open, Close} = props;
    const email = useRef();
    const pwd = useRef();

    const logIn = () => {
        console.log("dd");
        dispatch(userActions.logInDB(email.current.value, pwd.current.value));
        Close();
    }


    return (
        <React.Fragment>
            { Open ?(
            <>
            <Background></Background>
            <ModalContainer>
                <div>
                    <LeftContent>
                        <div>
                            <img src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" alt="welcome"/>
                            <div>환영합니다!</div>
                        </div>
                    </LeftContent>
                    <RightContent>
                        <Xbox>
                            <svg onClick={Close} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" tabIndex="1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                        </Xbox>
                        <ContentBox>
                            <div>
                                <Login>

                                    <h2>로그인</h2>
                                    <section>
                                        <h4>이메일로 로그인</h4>
                                        <form>
                                            <input ref={email} style={{border: "1px solid #dee2e6", borderRadius: "2px"}} tabIndex="2" placeholder="이메일을 입력하세요."></input>
                                        </form>
                                    </section>
                                    
                                    <section style={{marginTop: "1rem"}}>
                                        <form>
                                            <input ref={pwd} type="passWord" tabIndex="2" placeholder="비밀번호를 입력하세요."></input>
                                            <a onClick={logIn} tabIndex="3">로그인</a>
                                        </form>
                                    </section>

                                    <section style={{marginTop: "2.5rem"}}>
                                        <h4>소셜 계정으로 로그인</h4>
                                        <div>
                                            <a tabIndex="4" href="https://v2.velog.io/api/v2/auth/social/redirect/github?next=/" style={{background: "rgb(39, 46, 51)"}}>
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                    <mask id="github" width="20" height="20" x="0" y="0" maskUnits="userSpaceOnUse">
                                                        <path
                                                        fill="ffffff" 
                                                        fillRule="evenodd" 
                                                        d="M6.69 15.944c0 .08-.093.145-.21.145-.133.012-.226-.053-.226-.145 0-.081.093-.146.21-.146.12-.012.226.053.226.146zm-1.255-.182c-.028.08.053.173.174.198.105.04.226 0 .25-.081.024-.08-.053-.173-.174-.21-.104-.028-.221.012-.25.093zm1.783-.068c-.117.028-.198.104-.186.197.012.08.117.133.238.105.117-.028.198-.105.186-.186-.012-.076-.121-.129-.238-.116zM9.87.242C4.278.242 0 4.488 0 10.08c0 4.471 2.815 8.298 6.835 9.645.516.093.697-.226.697-.488 0-.25-.012-1.63-.012-2.476 0 0-2.822.605-3.415-1.202 0 0-.46-1.173-1.121-1.475 0 0-.924-.633.064-.621 0 0 1.004.08 1.557 1.04.883 1.557 2.363 1.109 2.94.843.092-.645.354-1.093.645-1.36-2.255-.25-4.529-.576-4.529-4.455 0-1.109.307-1.665.952-2.375-.105-.262-.448-1.342.105-2.738C5.56 4.157 7.5 5.51 7.5 5.51a9.474 9.474 0 0 1 2.532-.344c.86 0 1.726.117 2.533.343 0 0 1.939-1.355 2.782-1.089.552 1.4.21 2.476.105 2.738.645.714 1.04 1.27 1.04 2.375 0 3.891-2.375 4.202-4.63 4.456.372.319.686.923.686 1.87 0 1.36-.012 3.041-.012 3.372 0 .262.186.58.698.488C17.266 18.379 20 14.552 20 10.08 20 4.488 15.464.24 9.871.24zM3.919 14.149c-.052.04-.04.133.029.21.064.064.157.093.21.04.052-.04.04-.133-.029-.21-.064-.064-.157-.092-.21-.04zm-.435-.326c-.028.052.012.117.093.157.064.04.145.028.173-.028.028-.053-.012-.117-.093-.158-.08-.024-.145-.012-.173.029zm1.306 1.435c-.064.053-.04.174.053.25.092.093.21.105.262.04.052-.052.028-.173-.053-.25-.088-.092-.21-.104-.262-.04zm-.46-.593c-.064.04-.064.146 0 .238.065.093.174.133.226.093.065-.053.065-.157 0-.25-.056-.093-.16-.133-.225-.08z" 
                                                        clipRule="evenodd"
                                                        ></path>
                                                    </mask>
                                                    <g mask="url(#github)">
                                                        <path fill="currentColor" d="M0 0h20v20H0z"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                            
                                            <a tabIndex="5" href="https://v2.velog.io/api/v2/auth/social/redirect/google?next=/" style={{background: "white", border: "1px solid #dee2e6"}}>
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill="#4285F4" d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z"></path>
                                                    <path fill="#34A853" d="M10.2 19.931c2.753 0 5.064-.886 6.753-2.414l-3.218-2.436c-.862.587-2.017.997-3.536.997a6.126 6.126 0 0 1-5.801-4.141l-.12.01-3.148 2.38-.041.112c1.677 3.256 5.122 5.492 9.11 5.492z"></path>
                                                    <path fill="#FBBC05" d="M4.398 11.937a6.008 6.008 0 0 1-.34-1.971c0-.687.125-1.351.329-1.971l-.006-.132-3.188-2.42-.104.05A9.79 9.79 0 0 0 .001 9.965a9.79 9.79 0 0 0 1.088 4.473l3.309-2.502z"></path>
                                                    <path fill="#EB4335" d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.878-2.746C15.253.985 12.953 0 10.199 0 6.211 0 2.766 2.237 1.09 5.492l3.297 2.503A6.152 6.152 0 0 1 10.2 3.853z"></path>
                                                </svg>
                                            </a>
                                            
                                            <a tabIndex="6" href="https://v2.velog.io/api/v2/auth/social/redirect/facebook?next=/" style={{background: "#3b5998"}}>
                                                <svg width="20" height="20" fill="none" view="0 0 20 20">
                                                    <mask id="facebook" width="12" height="20" x="4" y="0" maskUnits="userSpaceOnUse">
                                                        <path fill="#fff" fillRule="evenodd" d="M7.84 20v-8.945H4.844V7.5H7.84V4.7C7.84 1.655 9.7 0 12.414 0c1.3 0 2.418.098 2.742.14v3.18h-1.883c-1.476 0-1.761.703-1.761 1.73V7.5h3.332l-.457 3.555h-2.875V20" clipRule="evenodd"></path>
                                                    </mask>
                                                    <g mask="url(#facebook)">
                                                        <path fill="#fff" d="M0 0h20v20H0z"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </section>
                                </Login>
                                <Footer>
                                    <span>아직 회원이 안니신가요?</span>
                                    <div tabIndex="7" onClick={()=>{history.push('/signup'); window.location.reload()}}>회원가입</div>
                                </Footer>
                            </div>
                        </ContentBox>
                    </RightContent>
                </div>
            </ModalContainer>
            </>
             ) : null}
        </React.Fragment>
    );
};

const Background = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #f9f9f9d9;
    z-index: 10;
    animation: 0.25s ease 0s 1 normal forwards running bcCCNc;
    color: #212529;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 25%;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    justify-content: center;
    z-index: 20;
    color: #212529;

    & > div {
        width: 606px;
        height: 480px;
        animation: 0.4s ease-in-out 0s 1 normal forwards running hwrkPK;
        box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
        display: flex;
        color: #212529;
    }
`;

const LeftContent = styled.div`
    width: 216px;
    background: #f1f3f5;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: #212529;

    & > div {
        color: #212529;

        & > img {
            width: 100%;
            height: auto;
            display: block;
            color: #212529;
        }

        & > div {
            font-size: 1.75rem;
            margin-top: 1.5rem;
            color: #495057;
            text-align: center;
            font-weight: 600;
        }
    }
`;

const RightContent = styled.div`
    flex: 1 1 0%;
    background: white;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

const Xbox = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    font-size: 1.5rem;
    color: #868e96;
    margin-bottom: 2rem;

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
`;

const ContentBox = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    color: #212529;

    & > div {
        display: flex;
        flex: 1 1 0%;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        line-height: 1.5;
        color: #212529;
    }
`;

const Login = styled.div`
    line-height: 1.5;
    color: #212529;

    & > h2 {
        font-size: 1.3125rem;
        color: #343a40;
        margin: 0px;
        font-weight: bold;
    }

    & > section {
        line-height: 1.5;
        color: #212529;

        & > h4 {
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: #868e96;
            /* margin: 0px; */
            line-height: 1.5;

        }
        
        & > div {
            display: flex;
            justify-content: space-around;
            margin-top: 1.5rem;
            line-height: 1.5;
            color: #212529;

            & > a {
                width: 3rem;
                height: 3rem;
                border-radius: 1.5rem;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                outline: none;
                transition: all 0.125s ease-in 0s;
                color: white;

                & > svg {
                    color: white;

                    & > path {
                            color: white;
                            line-height: 1.5;
                        }
                    
                    & > mask {
                        color: white;
                        
                        & > path {
                            color: white;
                            line-height: 1.5;
                        }
                    }

                    & > g {
                        color: white;

                        & > path {
                            color: white;
                            line-height: 1.5;
                        }
                    }
                }
            }
        }

        & > form {
            width: 100%;
            display: flex;
            height: 3rem;
            line-height: 1.5;

            & > input {
                flex: 1 1 0%;
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
                padding: 1rem;
                font-size: 1rem;
                border-top: 1px solid #dee2e6;
                border-bottom: 1px solid #dee2e6;
                border-left: 1px solid #dee2e6;
                border-image: initial;
                border-right: none;
            }

            & > a {
                background: #12b886;
                color: white;
                font-size: 1rem;
                font-weight: bold;
                outline: none;
                border: none;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
                width: 6rem;
                word-break: keep-all;
                cursor: pointer;
                text-align: center;
                padding-top: 11px;
                padding-bottom: 11px;  
            }
        }
    }
`;

const Footer = styled.div`
    text-align: right;
    line-height: 1.5;
    color: #212529;

    & > span {
        margin-right: 0.25rem;
        line-height: 1.5;
        color: #212529;
    }

    & > div {
        display: inline-block;
        font-weight: bold;
        color: #12b886;
        cursor: pointer;
        text-align: right;
        line-height: 1.5;
    }
`;


export default LoginModal;