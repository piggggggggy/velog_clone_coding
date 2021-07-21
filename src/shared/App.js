import { Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Main from "../pages/Main";
import Posting from "../pages/Posting";
import Detail from "../pages/Detail";
import Signup from "../pages/Signup";
import Write from "../pages/Write";
import Setting from "../pages/Setting";
import PostingModal from "../pages/PostingModal";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path="/" exact component={Main} />
      <Route path="/posting/:memberId" exact component={Posting} />
      <Route path="/posting/detail/:postId" exact component={Detail} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/write" exact component={Write} />
      <Route path="/write" exact component={Write} />
      <Route path="/write/:postId" exact component={Write} />
      <Route path="/setting" exact component={Setting} />
      <Route path="/postingmodal" exact component={PostingModal} />
    </div>
  );
};

export default App;
