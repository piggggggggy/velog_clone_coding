import React from "react";
import PostingBody from "../components/PostingBody";
import SharedHeader from "../shared/SharedHeader";

const Posting = (props) => {

    const memberId = props.match.params.memberId;
    return (
        <React.Fragment>
            <SharedHeader memberId={memberId}/>
            <PostingBody memberId={memberId}/>
        </React.Fragment>
    );
}

export default Posting;