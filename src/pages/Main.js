import React from "react";

// elements & components
import MainBody from '../components/MainBody';
import SharedHeader from "../shared/SharedHeader";


const Main = (props) => {
    
    return (
        <React.Fragment>
            <SharedHeader/>
            <MainBody/>
        </React.Fragment>
    );
}

export default Main;