import { stubArray } from "lodash";
import React from "react";
import styled from "styled-components";

const Signup = (props) => {

    return (
        <React.Fragment>
            <Container>
                <h1>환영합니다!</h1>
                <>기본 회원 정보를 등록해주세요.</>
                <div>
                    <Label>이름</Label>
                    <InlineBox>
                        <InputBox>
                            <Input placeholder="이름을 입력하세요"/>
                        </InputBox>
                    </InlineBox>
                </div>
                <div>
                    <Label>이메일</Label>
                    <InlineBox>
                        <InputBox>
                            <Input placeholder="avp_@naver.com"/>
                        </InputBox>
                    </InlineBox>
                </div>
                <div>
                    <Label>아이디</Label>
                    <InlineBox>
                        <InputBox>
                            <Input placeholder="아이디를 입력하세요"/>
                        </InputBox>
                    </InlineBox>
                </div>
                <div>
                    <Label>한 줄 소개</Label>
                    <InlineBox>
                        <InputBox>
                            <Input placeholder="당신을 한 줄로 소개해보세요"/>
                        </InputBox>
                    </InlineBox>
                </div>
                <BtnContainer>
                    <Button1 color="lightgray">취소</Button1>
                    <Button2 color="teal" type="submit">다음</Button2>
                </BtnContainer>
            </Container>
        </React.Fragment>
    );
}

const Container = styled.div`
    margin: 100px 673px;
`;

const Label = styled.label`
    font-size: 18px;
    margin: 0px 0px 16px;
    font-weight: bold;

`;

const InlineBox = styled.div`
    display: inline-block;
    max-width: 100%;
`;

const InputBox = styled.input`
    padding-bottom: 8px;
    border-bottom: 1px solid black;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const Input = styled.input`
    size: 20;
    font-size: 24px;
    border: none;
    outline: none;
    width: 100%;
    /* line-height: 24px; */
`;

const BtnContainer = styled.div`
    margin-top: 108px;
    box-sizing: inherit;
`;

const BtnBox = styled.div`
    box-sizing: inherit;
`;

const Button1 = styled.button`
    height: 48px;
    font-size: 24px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 24px;
    border: none;
    outline: none;
    font-weight: bold;
    background-color: #e9ecef;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    align-items: flex-flex-start;
    margin: 0px;
    padding: 1px 6px;
`;

const Button2 = styled.button`
    height: 48px;
    font-size: 24px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 24px;
    border: none;
    outline: none;
    font-weight: bold;
    background-color: #e9ecef;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    align-items: flex-flex-start;
    margin-left: 16px;
    padding: 1px 6px;
`;

export default Signup;