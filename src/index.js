import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/react-hooks';
import { client, setupPersistState } from 'apollo/client';
import { PAGE_TITLE } from 'config/constants';
import { routes } from 'config/routes';
import { NewsList } from 'pages/NewsList';
import { Article } from 'pages/Article';

import './index.css';
import * as serviceWorker from './serviceWorker';

(async () => {
  await setupPersistState();

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <Helmet defaultTitle={PAGE_TITLE} />
        </HelmetProvider>
        <Router>
          <Switch>
            <Route exact path={routes.home()} component={NewsList} />
            <Route exact path={routes.article()} component={Article} />
          </Switch>
        </Router>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  serviceWorker.register();
})();
