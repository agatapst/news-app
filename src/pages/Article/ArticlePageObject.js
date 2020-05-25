import React from 'react';
import { Route } from 'react-router';
import { renderWithProviders } from 'testUtilities';
import {
  findByTitle,
  findAllByTitle,
  queryByTitle,
  waitForElementToBeRemoved,
} from '@testing-library/dom';
import { TagElement } from 'testUtilities/helperElements';
import { routes } from 'config/routes';

import { Article } from '.';

export class ArticlePageObject {
  static async render(mocks, id) {
    const { container, history } = renderWithProviders(
      <Route path={routes.article()} component={Article} />,
      mocks,
      routes.article(id)
    );
    await waitForElementToBeRemoved(queryByTitle(container, 'Loader'));
    return new ArticlePageObject(container, history);
  }

  constructor(container, history) {
    this.container = container;
    this.history = history;
  }

  get title() {
    return queryByTitle(this.container, 'Article title').textContent;
  }

  get text() {
    return queryByTitle(this.container, 'Article text').textContent;
  }

  async getTags() {
    const list = await findByTitle(this.container, 'Tags list');
    const tags = await findAllByTitle(list, 'Tag');
    return [...tags].map((tag) => new TagElement(tag));
  }
}
