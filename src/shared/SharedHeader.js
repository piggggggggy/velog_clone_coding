import React from "react";
import styled from "styled-components";

const SharedHeader = (props) => {

    return (
        <React.Fragment>
            <Container>
                <HeaderContainer>
                    <LogoBox>
                        <Logo>
                            <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
                                <rect width="192" height="192" fill="currentColor" rx="24"></rect>
                                <path d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z" fill="white"></path>
                            </svg>
                        </Logo>
                        <UserLogo>PIGGY4105.log</UserLogo>
                    </LogoBox>
                    <ContentBox>
                        <a>
                            <svg width="17" height="17" viewBox="0 0 17 17">
                                <path fill-rule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <button>새 글 작성</button>
                        <div>
                            <div>
                                <img src="https://media.vlpt.us/images/pyt4105/profile/0d998bb2-e2ce-430a-8434-c28369fc5009/%ED%83%80%EC%9D%B8%EC%9D%98%EC%82%B6.png?w=120"/>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" height="0 0 24 24" height="1em" width="1em" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z"></path>
                                </svg>
                            </div>
                        </div>
                    </ContentBox>
                </HeaderContainer>
            </Container>
        </React.Fragment>
    );
}
const Container = styled.div`
    height: 4rem;
`;

const HeaderContainer = styled.div`
    width: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    color: #212529;
`;

const LogoBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    color: #343a40;
    font-size: 1.3125rem;
    text-decoration: none;
    /* font-family: "Fira Mono", monospace; */
`;

const Logo = styled.a`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: inherit;
    text-decoration: none;

    & > svg {
        margin-right: 1rem;
        width: 1.75rem;
        height: 1.75rem;
        display: block;
        color: inherit;
        font-weight: bold;
        font-size: 1.3125rem;

        & > rect {
            font-weight: bold;
            font-size: 1.3125rem;
        }

        & > path {
            font-weight: bold;
            font-size: 1.3125rem;
        }
    }
`;

const UserLogo = styled.a`
    display: block;
    max-width: calc(100vw - 200px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.3125rem;
    /* font-family: "Fira Mono", monospace; */
`;

const ContentBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    color: #212529;

    & > a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        background: #00000000;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 0.75rem;

        & > svg {
            width: 1.125rem;
            height: 1.125rem;
            cursor: pointer;

            & > path {
                cursor: pointer;
            }
        }
    }

    & > button {
        margin-right: 1.25rem;
        height: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
        border-radius: 1rem;
        outline: none;
        font-weight: bold;
        word-break: keep-all;
        background: white;
        border: 1px solid #343a40;
        color: #343a40;
        transition: all 0.125s ease-in 0s;
        cursor: pointer;
    }

    & > div {

        & > div {
        cursor: pointer;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #212529;

        & > img {
            display: block;
            height: 2.5rem;
            width: 2.5rem;
            box-shadow: #00000016 0px 0px 8px;
            border-radius: 50%;
            object-fit: cover;
            transition: all 0.125s ease-in 0s;
            cursor: pointer;
            color: #212529;
        }

        & > svg {
            font-size: 1.5rem;
            margin-left: 0.25rem;
            color: #868e96;
            transition: all 0.125s ease-in 0s;
            margin-right: -0.4375px;
            cursor: pointer;

            & > path {
                font-size: 1.5rem;
                color: #868e96;
                cursor: pointer;
            }
        }
        }
    }
    

`;

export default SharedHeader;