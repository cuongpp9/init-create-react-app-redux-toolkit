import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home asdasd Paasdasdge</title>
        <meta
          name="description"
          content="A React Boilerplate application homepag aaae"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}
