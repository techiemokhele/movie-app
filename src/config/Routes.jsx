import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Movies from "../pages/Movies.jsx";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import About from "../pages/About.jsx";

/* Declare all internal application endpoints */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/:category" component={Catalog} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
