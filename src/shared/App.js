import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import GlobalStyles from "./GlobalStyles";
import Main from "../pages/Main";
import Posting from "../pages/Posting";
import Detail from "../pages/Detail";
import Signup from "../pages/Signup";
import Write from "../pages/Write";
import Setting from "../pages/Setting";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/posting" exact component={Posting} />
        <Route path="/posting/:pId" exact component={Detail} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/Write" exact component={Write} />
        <Route path="/Write/:pId" exact component={Write} />
        <Route path="/Setting" exact component={Setting} />
      </ConnectedRouter>
    </div>
  );
};

export default App;
