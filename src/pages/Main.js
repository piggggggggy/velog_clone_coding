import React from "react";
import MainBody from '../components/MainBody';
import SharedHeader from "../shared/SharedHeader";

const Main = (props) => {

    return (
        <React.Fragment>
            <SharedHeader Logo/>
            <MainBody/>
        </React.Fragment>
    );
}

export default Main;