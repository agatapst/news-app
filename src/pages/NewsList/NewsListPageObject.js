import React from 'react';
import { Route } from 'react-router';
import { renderWithProviders } from 'testUtilities';
import {
  findByTitle,
  findAllByTitle,
  waitForElementToBeRemoved,
  queryByTitle,
} from '@testing-library/dom';
import { ArticleElement, PaginationElement } from 'testUtilities/helperElements';
import { routes } from 'config/routes';

import { NewsList } from '.';

export class NewsListPageObject {
  static async render(mocks) {
    const { container, history } = renderWithProviders(
      <Route path={routes.home()} component={NewsList} />,
      mocks,
      routes.home()
    );
    return new NewsListPageObject(container, history);
  }

  constructor(container, history) {
    this.container = container;
    this.history = history;
  }

  async waitUntilLoaded() {
    await waitForElementToBeRemoved(queryByTitle(this.container, 'Loader'));
  }

  async getArticles() {
    const list = await findByTitle(this.container, 'News list');
    const articles = await findAllByTitle(list, 'Article');
    return [...articles].map((article) => new ArticleElement(article));
  }

  get pathname() {
    return this.history.location.pathname;
  }

  get queryParams() {
    return this.history.location.search;
  }

  get pagination() {
    return new PaginationElement(queryByTitle(this.container, 'Pagination'));
  }
}
