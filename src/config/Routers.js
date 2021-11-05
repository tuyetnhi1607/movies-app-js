import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Detail from "../pages/Detail/Detail";

function Routers() {
  return (
    <Switch>
      <Route path="/:category" component={Catalog} />
       <Route path="/:category/:id" component={Detail} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default Routers;
