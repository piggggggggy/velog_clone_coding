import React from "react";
import styled from "styled-components";

// components
import PostingCard from "./PostingCard";

const SearchBody = () => {

    return (
        <React.Fragment>
            <Container>
                <SearchBar>
                    <div>
                        <svg width="17" height="17" viewBox="0 0 17 17">
                            <path fillRule="evenodd" d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z" clipRule="evenodd"></path>
                        </svg>
                        <input placeholder="검색어를 입력하세요"></input>
                    </div>
                </SearchBar>
                <NumComment>
                    총<b> 10000개</b>의 포스트를 찾았습니다.
                </NumComment>
                
                <PostingCard/>

            </Container>
        </React.Fragment>
    )
};

const Container = styled.div`
    margin-top: 3.5rem;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    color: #212529;
`;

const SearchBar = styled.div`
    color: #212529;
    
    & > div {
        margin-bottom: 1.5rem;
        display: flex;
        border: 1px solid rgb(173, 181, 189);
        -webkit-box-align: center;
        align-items: center;
        transition: all 0.125s ease-in 0s;
        cursor: text;
        height: 4rem;
        padding: 0px 1.5rem;

        & > svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1.25rem;
            transition: all 0.125s ease-in 0s;
            fill: rgb(173, 181, 189);
            flex-shrink: 0;
            cursor: text;
            color: #212529;

            & > path {
                fill: #adb5bd;
                cursor: text;
                color: #212529;
            }
        }

        & > input {
            font-size: 1.5rem;
            line-height: 2rem;
            height: 2rem;
            transition: all 0.125s ease-in 0s;
            flex: 1 1 0%;
            display: block;
            padding: 0px;
            border: none;
            outline: 0px;
            color: rgb(73, 80, 87);
            min-width: 0px;
        }
    }
`;

const NumComment = styled.p`
    margin-bottom: 4rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #495057;

    & > b {
        color: #212529;
        font-size: 1.125rem;
        line-height: 1.5;
        font-weight: bold;
    }
`;

export default SearchBody;