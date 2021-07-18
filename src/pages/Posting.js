import React from "react";
import NameCard from "../components/NameCard";
import PostingBody from "../components/PostingBody";
import SharedHeader from "../shared/SharedHeader";

const Posting = (props) => {

    return (
        <React.Fragment>
            <SharedHeader></SharedHeader>
            <PostingBody/>
        </React.Fragment>
    );
}

export default Posting;