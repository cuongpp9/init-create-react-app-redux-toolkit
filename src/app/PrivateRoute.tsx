import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import RouteNames from './RouteNames';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const id = '';
  return (
    <Route
      {...rest}
      render={props =>
        id ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: RouteNames.landing.path,
              state: {
                isNeedLogin: true,
                currentUrl: rest.location.pathname,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
