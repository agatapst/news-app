import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { NewsList } from 'pages/NewsList';
import { Article } from 'pages/Article';

import { PAGE_TITLE } from './config/constants';
import { routes } from './config/routes';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate={PAGE_TITLE} defaultTitle={PAGE_TITLE} />
      </HelmetProvider>
      <Router>
        <Switch>
          <Route exact path={routes.home()} component={NewsList} />
          <Route exact path={routes.article()} component={Article} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
