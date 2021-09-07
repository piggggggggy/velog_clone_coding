import React, {useState, useRef} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// modules
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();
    const {history} = props;

    const [alert, setAlert] = useState(true);
    const mName = useRef();
    const email = useRef();
    const pwd = useRef();
    const pwdCheck = useRef();
    
    const alertRed = () => {
        if (mName.current.value === "") {
            return (
                <AlertText>"이름을 입력하세요."</AlertText>
            )
        } else if (email.current.value === "") {
            return (
                <AlertText>"아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다."</AlertText>
            )
        } else if (pwd.current.value !== pwdCheck.current.value) {
            return (
                <AlertText>"비밀번호가 일치하지 않아요!"</AlertText>
            )
        };
    };

    const signUp = () => {
        let data = {
            mName: mName.current.value,
            email: email.current.value,
            pwd: pwd.current.value,
            pwdCheck: pwdCheck.current.value,
        };
        console.log(data);
        if (mName.current.value === "") {
            setAlert(false)
            return;
        } else if (email.current.value === "") {
            setAlert(false)
            return;
        } else if (pwd.current.value !== pwdCheck.current.value) {
            setAlert(false)
            return;
        } else{
            setAlert(true)
            dispatch(userActions.registerDB(data));
        };
    };

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
                                    <input ref={mName} placeholder="이름을 입력하세요" size="20"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <PartContent>
                            <label>아이디</label>
                            <div>
                                <InputContent>
                                    <input ref={email} placeholder="아이디를 입력하세요" size="15"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <PartContent>
                            <label>비밀번호</label>
                            <div>
                                <InputContent>
                                    <input ref={pwd} type="password" placeholder="비밀번호를 입력하세요" size="25"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <PartContent>
                            <label>비밀번호 확인</label>
                            <div>
                                <InputContent>
                                    <input ref={pwdCheck} type="password" placeholder="비밀번호를 다시 입력하세요" size="30"/>
                                </InputContent>
                                <WidthMaker></WidthMaker>
                            </div>    
                        </PartContent>

                        <ButtonContent>
                            <div>
                                {!alert? alertRed():''}
                                <Button onClick={()=>{history.replace('/')}} style={{ background: "#e9ecef", color: "#495057" }}>취소</Button>
                                <Button onClick={()=>{signUp()}} style={{ background: "#12b886", color: "#ffffff", marginLeft: "1rem" }}>등록</Button>
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

const AlertText = styled.div`
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #ff6b6b;
    font-weight: bold;
`;

export default Signup;