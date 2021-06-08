/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from '../styles/global-styles';
import Router from './Router';

export function App() {
  const { i18n } = useTranslation();
  return (
    // <BrowserRouter>
    <div>
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
      <Router />
      <GlobalStyle />
    </div>
  );
}
