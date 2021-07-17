import React from "react";
import styled from "styled-components";

const SharedHeader = (props) => {

    return (
        <React.Fragment>
            <HeaderContainer>
                <LogoBox></LogoBox>
                <ContentBox>
                    <a>
                        <svg width="17" height="17" viewBox="0 0 17 17" />
                    </a>
                    <button>새 글 작성</button>
                    <div>
                        <img src="https://media.vlpt.us/images/pyt4105/profile/0d998bb2-e2ce-430a-8434-c28369fc5009/%ED%83%80%EC%9D%B8%EC%9D%98%EC%82%B6.png?w=120"/>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" height="0 0 24 24" height="1em" width="1em" xmlns="https://www.w3.org/2000/svg"/>
                    </div>
                </ContentBox>
            </HeaderContainer>
        </React.Fragment>
    );
}

const HeaderContainer = styled.div`
    width: 80%;
    height: 64px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

const LogoBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    color: #343a40;
    font-size: 21px;

    & > a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: inherit;
        cursor: pointer;
    }
`;

const ContentBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    & > a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        /* background:; */
        border: none;
        width: 40px;
        height: 40px;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 12px;
    }

    & > button {
        margin-right: 20px;
        height: 32px;
        padding-left: 16px;
        padding-right: 16px;
        font-size: 16px;
        border-radius: 16px;
        outline: none;
        font-weight: bold;
        word-break: keep-all;
        border: 1px solid #343a40;
        color: #343a40;
        transition: all 0.125s ease-in 0s;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
    }

    & > div {
        cursor: pointer;
        display: flex;
        align-items: center;

        & > img {
            display: block;
            height: 40px;
            width: 40px;
            box-shadow: #00000016 0px 0px 8px;
            border-radius: 50%;
            object-fit: cover;
            transition: all 0.125s ease-in 0s;
            cursor: pointer;
        }

        & > svg {
            font-size: 24px;
            margin-left: 4px;
            color: #868e96;
            transition: all 0.125s ease-in 0s;
            margin-right: -7px;
            cursor: pointer;
        }
    }

`;

export default SharedHeader;