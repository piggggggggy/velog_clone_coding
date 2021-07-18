import { stubArray } from "lodash";
import React from "react";
import styled from "styled-components";

const Signup = (props) => {

    return (
        <React.Fragment>
            <Container>
                <h1>환영합니다!</h1>
                <SignupExplain>기본 회원 정보를 등록해주세요.</SignupExplain>
                <BodyContent>
                    <div>
                        
                        <PartContent>
                            <label>이름</label>
                            <div>
                                <InputContent>
                                    <input placeholder="이름을 입력하세요" size="20"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <PartContent>
                            <label>아이디</label>
                            <div>
                                <InputContent>
                                    <input placeholder="아이디를 입력하세요" size="15"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <PartContent>
                            <label>한 줄 소개</label>
                            <div>
                                <InputContent>
                                    <input placeholder="당신을 한 줄로 소개해보세요" size="30"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <ButtonContent>
                            <div>
                                <Button style={{ background: "#e9ecef", color: "#495057" }}>취소</Button>
                                <Button style={{ background: "#12b886", color: "#ffffff", marginLeft: "1rem" }}>다음</Button>
                            </div>
                        </ButtonContent>

                    </div>
                </BodyContent>
            </Container>
        </React.Fragment>
    );
}

const Container = styled.div`
    width: 36%;
    min-width: 768px;
    margin: 100px auto 0px;
    line-height: 1.5;
    color: #212529;

    & > h1 {
        font-size: 4rem;
        color: #212529;
        font-weight: bolder;
        margin: 0px;
        line-height: 1.5;
    }
`;

const SignupExplain = styled.div`
    font-size: 1.5rem;
    color: #212529;
    line-height: 1.5;
`;

const BodyContent = styled.div`
    line-height: 1.5;
    color: #212529;

    & > div {
        margin-top: 3rem;
        margin-bottom: 3rem;
        line-height: 1.5;
        color: #212529;
    }
`;

const PartContent = styled.div`
    line-height: 1.5;
    color: #212529;

    & > label {
        font-weight: bold;
        font-size: 1.125rem;
        color: #212529;
        margin-bottom: 1rem;
        transition: all 0.125s ease-in 0s;
        display: block;
        line-height: 1.5;
    }

    & > div {
        display: inline-block;
        max-width: 100%;
        line-height: 1.5;
        color: #212529;
    }
`;

const InputContent = styled.div`
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #495057;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.5;
    color: #212529;

    & > input {
        font-size: 1.5rem;
        border: none;
        outline: none;
        width: 100%;
        color: #495057;
        transition: all 0.125s ease-in 0s;
        display: block;
        line-height: 1.5;
    }
`;

const WidthMaker = styled.div`
    max-width: 100%;
    display: inline-block;
    visibility: hidden;
    font-size: 1.5rem;
    overflow: hidden;
    line-height: 0;
    color: #212529;
`;

const ButtonContent = styled.div`
    margin-top: 6rem;
    line-height: 1.5;
    color: #212529;

    & > div {
        line-height: 1.5;
        color: #212529;
    }
`;

const Button = styled.button`
    height: 3rem;
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
`;

export default Signup;