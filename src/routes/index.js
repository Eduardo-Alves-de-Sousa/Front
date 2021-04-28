import React from "react";
import { Switch } from "react-router-dom";
import Login from "../pages/cadastro/index";
import Inicial from "../pages/inicial";

import Route from "./routes";

function Rotas() {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/Cadastro" component={Login}></Route>
    </Switch>
  );
}

export default Rotas;
