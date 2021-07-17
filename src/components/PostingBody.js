import React from "react";
import styled from "styled-components";

import NameCard from "./NameCard";

const PostingBody = (props) => {

    return (
        <React.Fragment>
            <PostingContainer>
                <NameCard/>
                <NavigationBar>
                    <div>
                        <a>글</a>
                        <a>시리즈</a>
                        <a>소개</a>
                        <div></div>
                    </div>
                </NavigationBar>
            </PostingContainer>
        </React.Fragment>
    );
}

const PostingContainer = styled.div`
    width: 36%;
    min-width: 768px;
`;

const NavigationBar = styled.div`
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    color: #212529;

    & > div {
        display: flex;
        position: relative;
        color: #212529;

        & > a {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            font-size: 1.325rem;
            width: 8rem;
            height: 3rem;
            color: #495057;
            text-decoration: none;
            transition: color 0.25s ease-in-out 0s;
            font-weight: 600;
        }

        & > div {
            width: 8rem;
            height: 2px;
            background: #20c997;
            position: absolute;
            bottom: --2px;
            transition: left 0.25s ease-in-out 0s;

        }
    }
`;

export default PostingBody;