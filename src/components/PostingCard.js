import React from "react";
import styled from "styled-components";
import moment from "moment";

const PostingCard = (props) => {

    return (
        <React.Fragment>
            <CardContainer>
                <a>
                    <div>
                        <img src={props.originalFileName}></img>
                    </div>
                </a>
                <a>
                    <h2>{props.title}</h2>
                </a>
                <p>{props.preText}</p>
                <TagContent>
                    {props.tags.tagName.map((t, idx) => {
                        return(
                            <a key={idx}>{t}</a>
                        )
                    })}
                </TagContent>
                <DateContent>
                    <span>{props.createdAt}</span>
                    <div>·</div>
                    <span>{props.countReply}개의 댓글</span>
                </DateContent>
            </CardContainer>
        </React.Fragment>
    );
};

PostingCard.defaultProps = {
    pId: 1,
    title: "제목",
    writer: "작성자1",
    content: "내용",
    contentMd: "내용",
    preText: "내용",
    originalFileName: "https://media.vlpt.us/images/pyt4105/post/f26cfe50-f7d2-4c0c-a139-9b194bf1b481/알고.png?w=768",
    tags: {tagName: ["asdffasfa", "dfa", "adsf"]},
    createdAt: moment().format("YYYY년 M월 D일"),
    modifiedAt: "2021-07-09T17:35:00",
    countReply: 3
};


const CardContainer = styled.div`
    padding-bottom: 4rem;
    line-height: 1.5;
    color: #212529;

    & > a {
        color: inherit;
        text-decoration: none;
        line-height: 1.5;

        & > div {
            padding-top: 52.356%;
            margin-bottom: 1rem;
            width: 100%;
            position: relative;
            color: inherit;
            line-height: 1.5;

            & > img {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                color: inherit;
                line-height: 1.5;
                
            }
        }

        & > h2 {
            font-size: 1.5rem;
            margin: 0px;
            color: #212529;
            word-break: keep-all;
            line-height: 1.5;
            font-weight: bold;
        }
    }

    & > p {
        margin-bottom: 2rem;
        margin-top: 0.5rem;
        font-size: 1rem;
        color: #495057;
        word-break: keep-all;
        overflow-wrap: break-word;
        line-height: 1.5;
    }
`;

const TagContent = styled.div`
    margin-bottom: -0.875rem;
    line-height: 1.5;
    color: #212529;

    & > a {
        margin-bottom: 0.875rem;
        background: #f1f3f5;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        border-radius: 1rem;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 0.875rem;
        color: #0ca678;
        text-decoration: none;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5;
    }
`;

const DateContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.875rem;
    line-height: 1.5;

    & > span {
        color: #868e96;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    & > div {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        color: #868e96;
        font-size: 0.875rem;
        line-height: 1.5;
    }
`;

export default PostingCard;