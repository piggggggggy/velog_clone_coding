import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Main from "../pages/Main";
import Posting from "../pages/Posting";
import Detail from "../pages/Detail";
import Signup from "../pages/Signup";
import Write from "../pages/Write";
import Setting from "../pages/Setting";
import PostingModal from "../pages/PostingModal";
import Search from "../pages/Search";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Edit from "../pages/Edit";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  return (
    <div className="App" style={{background: "#f8f9fa"}}>
      <GlobalStyles />
      <Route path="/" exact component={Main} />
      <Route path="/posting/:memberId" exact component={Posting} />
      <Route path="/posting/detail/:postId" exact component={Detail} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/write" exact component={Write} />
      <Route path="/write/:postId" exact component={Write} />
      <Route path="/setting/:memberId" exact component={Setting} />
      <Route path="/postingmodal" exact component={PostingModal} />
      <Route path="/search" exact component={Search} />
      <Route path="/edit" exact component={Edit} />
    </div>
  );
};

export default App;
