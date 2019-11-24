import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, List, Team, SignIn, SignUp } from "./components";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/list" exact={true}>
            <List />
          </Route>
          <Route path="/team" exact={true}>
            <Team />
          </Route>
          <Route path="/login" exact={true}>
            <SignIn />
          </Route>
          <Route path="/signup" exact={true}>
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
