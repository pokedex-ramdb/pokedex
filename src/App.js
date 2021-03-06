import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  Team,
  SignIn,
  SignUp,
  ListPokemon,
  DetailPokemon,
  HomeMember
} from "./components";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/list-pokemon" exact={true}>
            <ListPokemon />
          </Route>
          <Route path="/pokemon/:id-:name">
            <DetailPokemon />
          </Route>
          <Route path="/team" exact={true}>
            <Team />
          </Route>
          <Route path="/login" exact={true}>
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
