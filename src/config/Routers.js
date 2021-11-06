import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Detail from "../pages/Detail/Detail";

function Routers() {
  return (
    <Switch>
      <Route path="/movies-app-js/:category" component={Catalog} />
       <Route path="/movies-app-js/:category/:id" component={Detail} />
      <Route path="/movies-app-js/" exact component={Home} />
    </Switch>
  );
}

export default Routers;
