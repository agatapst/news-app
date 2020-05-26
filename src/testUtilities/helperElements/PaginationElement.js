import { queryAllByRole, queryByText, fireEvent } from '@testing-library/dom';

export class PaginationElement {
  constructor(element) {
    this.element = element;
  }

  get pageButtons() {
    return queryAllByRole(this.element, 'button');
  }

  get currentPage() {
    const currentPageButton = this.pageButtons.find((page) => page.getAttribute('aria-current'));
    return parseInt(currentPageButton.textContent);
  }

  changePage(pageNumber) {
    const pageButton = queryByText(this.element, pageNumber.toString());
    fireEvent.click(pageButton);
  }
}
