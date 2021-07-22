import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as recentActions } from "../redux/modules/allPost";

import MainBody from '../components/MainBody';
import SharedHeader from "../shared/SharedHeader";


const Main = (props) => {
    const dispatch = useDispatch();
    const all_list = useSelector((state) => state.allPost.list);

    React.useEffect(() => {
        if (all_list.length !== 0 ) {
            dispatch(recentActions.getRecentDB());
        }
    },[])

    return (
        <React.Fragment>
            <SharedHeader/>
            <MainBody/>
        </React.Fragment>
    );
}

export default Main;