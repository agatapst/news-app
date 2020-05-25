import { fireEvent, getAllByText } from '@testing-library/dom';

export class ButtonElement {
  constructor(container, label) {
    this.container = container;
    (this.label = label), (this.element = this.findButton());
  }

  click() {
    fireEvent.click(this.element);
  }

  findButton() {
    let [buttonElement] = getAllByText(this.container, this.label);

    return buttonElement;
  }
}
