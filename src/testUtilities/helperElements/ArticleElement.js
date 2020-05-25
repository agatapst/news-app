import { queryByTitle } from '@testing-library/dom';

import { ButtonElement } from './ButtonElement';

export class ArticleElement {
  constructor(element) {
    this.element = element;
  }

  get title() {
    return queryByTitle(this.element, 'Article title').textContent;
  }

  get readMoreButton() {
    return new ButtonElement(this.element, /^przeczytaj/i);
  }

  clickReadMore() {
    this.readMoreButton.click();
  }
}
