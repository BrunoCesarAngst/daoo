import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Products from "./pages/Products.js";
import Contacts from "./pages/Contacts.js";

function Section(props) {
  return (
    <section id="section" className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </section>
  );
}

export default Section;
