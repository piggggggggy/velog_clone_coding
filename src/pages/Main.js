import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as recentActions } from "../redux/modules/allPost";

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