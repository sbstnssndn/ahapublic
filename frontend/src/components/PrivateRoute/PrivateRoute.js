import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";
  
  
const PrivateRoute = ({ component: Component, authenticated, wasInitialized, ...rest }) => (
    <Route
      {...rest}
			render={props =>
				authenticated ? (
          <Component {...rest} {...props} />
        ) : !wasInitialized ? (
          ""
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )}
    />
);
  
export default PrivateRoute