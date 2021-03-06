import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// modules
import { actionCreators as postActions } from "../redux/modules/post";

// components
import NameCard from "./NameCard";
import PostingCard from "./PostingCard";

const PostingBody = (props) => {
    
    const dispatch = useDispatch();
    const memberId = props.memberId;
    const post_list = useSelector((state) => state.post.list);
    const tag_list = useSelector((state) => state.post.tags);
    const user_info = useSelector((state) => state.post.user);
    

    React.useEffect(() => {
        dispatch(postActions.setPostDB(memberId));
    },[]);

    if (!post_list) {
        return (
            <div>기다려....</div>
        )
    }


    return (
        <React.Fragment>
            <PostingContainer>

                <NameCard {...user_info}/>

                <NavigationBar>
                    <div>
                        <a>글</a>
                        <a style={{ color: "#20c997" }}>시리즈</a>
                        <a>소개</a>
                        <div style={{ left: "33.3333%" }}></div>
                    </div>
                </NavigationBar>

                <div>
                    <SearchBar>
                        <section>
                            <div>
                                <svg width="17" height="17" viewBox="0 0 17 17">
                                    <path 
                                    fillRule="evenodd" 
                                    d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
                                    clipRule="evenodd"></path>
                                </svg>
                                <input placeholder="검색어를 입력하세요"/>
                            </div>
                        </section>
                    </SearchBar>

                    <TagList> 
                        <div>
                            <div>
                                <div>
                                    <div>태그 목록</div>
                                    <ul>

                                        <li style={{color:"#20c997", fontWeight:"bold", marginTop:"0px"}}>
                                            <a href="/@pyt4105">전체보기</a>
                                            <span>
                                                {`(${post_list.length})`}
                                            </span>
                                        </li>

                                        {tag_list? tag_list.map((t, idx) =>{
                                            
                                            return (
                                                <li key={idx}>
                                                    <a>{t.tagName}</a>
                                                    <span>
                                                        {`(${t.count})`}
                                                    </span>
                                                </li>
                                            )
                                        }) : null}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TagList>
                    <CardList>
                        <div>
                            {post_list.map((p, idx) => {
                                return (
                                    <PostingCard key={idx} {...p}/>
                                )
                            })}
                            
                        </div>
                    </CardList>
                </div>
            </PostingContainer>
        </React.Fragment>
    );
}

const PostingContainer = styled.div`
    width: 36%;
    min-width: 768px;
    margin-left: auto;
    margin-right: auto;
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
            bottom: -2px;
            transition: left 0.25s ease-in-out 0s;

        }
    }
`;

const SearchBar = styled.div`
    color: #212529;

    & > section {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        margin-bottom: 2rem;
        color: #212529;

        & > div {
            display: flex;
            height: 2.25rem;
            border: 1px solid #adb5bd;
            padding-left: 0.625rem;
            padding-right: 0.625rem;
            -webkit-box-align: center;
            align-items: center;
            transition: all 0.125s ease-in 0s;
            cursor: text;
            color: #212529;

            & > svg {
                transition: all 0.125s ease-in 0s;
                margin-right: 0.5rem;
                width: 1rem;
                height: 1rem;
                fill: #adb5bd;
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
                transition: all 0.125s ease-in 0s;
                font-size: 0.875rem;
                flex: 1 1 0%;
                display: block;
                line-height: 1rem;
                height: 1rem;
                padding: 0px;
                border: none;
                outline: 0px;
                color: #495057;
                min-width: 0px;
            }
        }
    }
`;

const TagList = styled.div`
    position: relative;
    color: #212529;

    & > div {
        position: relative;
        color: #212529;

        & > div {
            position: absolute;
            width: 11.5rem;
            left: -13.5rem;
            color: #212529;

            & > div {

                & > div {
                    font-size: 1rem;
                    line-height: 1.5;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid #adb5bd;
                    margin-bottom: 1rem;
                    color: #495057;
                    font-weight: bold;
                }

                & > ul {
                    list-style: none;
                    padding-left: 0px;
                    color: #212529;

                    & > li {
                        font-size: 0.875rem;
                        line-height: 1.5;
                        color: #343a40;
                        list-style: none;
                        margin-top: 0.25rem;

                        & > a {
                            color: inherit;
                            text-decoration: none;
                            font-size: 0.875;
                            line-height: 1.5;
                            list-style: none;
                        }

                        & > span {
                            margin-left: 0.5rem;
                            color: #868e96;
                            font-weight: normal;
                            font-size: 0.875rem;
                            line-height: 1.5;
                            list-style: none;
                        }
                    }
                }
            }
        }
    }
`;

const CardList = styled.div`
    color: #212529;

    & > div {
        color: #212529;
    }
`;

export default PostingBody;