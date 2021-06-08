/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { HomePage } from '../containers/HomePage/Loadable';
import { LandingPage } from '../containers/LandingPage';
import { NotFoundPage } from '../containers/NotFoundPage';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React asdasdBoilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="A React Boilerplat asdasde application"
        />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/landing'}
          component={LandingPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
