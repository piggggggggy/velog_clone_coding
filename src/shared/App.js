import { BrowserRouter, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/posting" exact component={Posting} />
        <Route path="/posting/:pId" exact component={Detail} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/Write" exact component={Write} />
        <Route path="/Write/:pId" exact component={Write} />
        <Route path="/Setting" exact component={Setting} />
      </BrowserRouter>
    </div>
  );
};

export default App;
