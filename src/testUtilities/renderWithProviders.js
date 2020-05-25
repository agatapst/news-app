import React from 'react';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

export const renderWithProviders = (Component, mocks = [], route = '') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(
      <MockedProvider mocks={mocks}>
        <Router history={history}>{Component}</Router>
      </MockedProvider>
    ),
    history,
  };
};
