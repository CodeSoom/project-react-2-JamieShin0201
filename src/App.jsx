import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Global, css } from '@emotion/core';

import HomePage from './pages/HomePage';

const GlobalStyles = css`
  body{
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
