import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInPage from "./pages/Signin";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Signin' component={SignInPage} exact />
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
