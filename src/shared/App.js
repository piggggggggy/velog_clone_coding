import { Route, BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
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
      <BrowserRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/posting" exact component={Posting} />
        <Route path="/posting/:pId" exact component={Detail} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/write" exact component={Write} />
        <Route path="/write/:pId" exact component={Write} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/postingmodal" exact component={PostingModal} />
      </BrowserRouter>
    </div>
  );
};

export default App;
