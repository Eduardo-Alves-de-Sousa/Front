import React from "react";

import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

function Route({ component: Component, ...rest }) {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        <Redirect
          to={{
            pathname: "/Cadastro",
            state: { from: location },
          }}
        />;
      }}
    />
  );
}

export default Route;
