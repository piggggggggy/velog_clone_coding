import React from "react";
import styled from "styled-components";

const Text = (props) => {

    const { text } = props;

    return (
        <React.Fragment>
            <ElText>{text}</ElText>
        </React.Fragment>
    )
};

const ElText = styled.text`
`;

export default Text;