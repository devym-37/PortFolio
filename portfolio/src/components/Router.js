import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";

import Home from "Routes/Home";
import Contact from "Routes/Contact";
import PortFolio from "Routes/PortFolio";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={PortFolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
